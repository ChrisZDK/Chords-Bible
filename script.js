const noteValues = {
  C: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  F: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
};

const sharpNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = [
  { note: "C#", label: "C#/Db", x: 28 },
  { note: "D#", label: "D#/Eb", x: 70 },
  { note: "F#", label: "F#/Gb", x: 154 },
  { note: "G#", label: "G#/Ab", x: 196 },
  { note: "A#", label: "A#/Bb", x: 238 },
];

let audioContext;
let activePlaybackOutput;
let pianoSampler;
let pianoReady = false;
let activeTimers = [];
const startDelay = 0.5;
const pianoSampleUrls = {
  A0: "A0.mp3",
  C1: "C1.mp3",
  "D#1": "Ds1.mp3",
  "F#1": "Fs1.mp3",
  A1: "A1.mp3",
  C2: "C2.mp3",
  "D#2": "Ds2.mp3",
  "F#2": "Fs2.mp3",
  A2: "A2.mp3",
  C3: "C3.mp3",
  "D#3": "Ds3.mp3",
  "F#3": "Fs3.mp3",
  A3: "A3.mp3",
  C4: "C4.mp3",
  "D#4": "Ds4.mp3",
  "F#4": "Fs4.mp3",
  A4: "A4.mp3",
  C5: "C5.mp3",
  "D#5": "Ds5.mp3",
  "F#5": "Fs5.mp3",
  A5: "A5.mp3",
  C6: "C6.mp3",
  "D#6": "Ds6.mp3",
  "F#6": "Fs6.mp3",
  A6: "A6.mp3",
  C7: "C7.mp3",
  "D#7": "Ds7.mp3",
  "F#7": "Fs7.mp3",
  A7: "A7.mp3",
  C8: "C8.mp3",
};

function initializePianoSampler() {
  if (!window.Tone || pianoSampler) {
    return;
  }

  pianoSampler = new Tone.Sampler({
    urls: pianoSampleUrls,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
    attack: 0.02,
    release: 1.4,
    onload: () => {
      pianoReady = true;
    },
  }).toDestination();

  pianoSampler.volume.value = -8;
}

function getAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  audioContext ||= new AudioContextClass();

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function startNewPlayback() {
  getAudioContext();
  activeTimers.forEach((timerId) => window.clearTimeout(timerId));
  activeTimers = [];

  if (pianoSampler) {
    pianoSampler.releaseAll();
  }

  if (activePlaybackOutput) {
    const now = audioContext.currentTime;
    const previousOutput = activePlaybackOutput;
    previousOutput.gain.cancelScheduledValues(now);
    previousOutput.gain.setTargetAtTime(0.0001, now, 0.02);
    window.setTimeout(() => previousOutput.disconnect(), 120);
  }

  activePlaybackOutput = audioContext.createGain();
  activePlaybackOutput.connect(audioContext.destination);

  return activePlaybackOutput;
}

function schedulePlayback(callback, delaySeconds) {
  const timerId = window.setTimeout(callback, delaySeconds * 1000);
  activeTimers.push(timerId);
}

function normalizeNote(note) {
  return sharpNames[noteValues[note.trim()]];
}

function chordFrequencies(notes) {
  const rootValue = noteValues[notes[0]];

  return notes.map((note) => {
    const value = noteValues[note];
    const octave = value < rootValue ? 5 : 4;
    const midiNumber = 12 * (octave + 1) + value;

    return 440 * 2 ** ((midiNumber - 69) / 12);
  });
}

function chordNoteNames(notes) {
  const rootValue = noteValues[notes[0]];

  return notes.map((note) => {
    const value = noteValues[note];
    const octave = value < rootValue ? 5 : 4;

    return `${normalizeNote(note)}${octave}`;
  });
}

function createKeyboard(notes) {
  const activeNotes = new Set(notes.map(normalizeNote));
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "piano-svg");
  svg.setAttribute("viewBox", "0 0 294 132");
  svg.setAttribute("aria-hidden", "true");

  whiteKeys.forEach((note, index) => {
    const x = index * 42;
    const key = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    key.setAttribute("class", `white-key${activeNotes.has(note) ? " key-active" : ""}`);
    key.setAttribute("x", x);
    key.setAttribute("y", 0);
    key.setAttribute("width", 42);
    key.setAttribute("height", 128);
    svg.appendChild(key);

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("class", "key-label");
    label.setAttribute("x", x + 21);
    label.setAttribute("y", 118);
    label.textContent = note;
    svg.appendChild(label);
  });

  blackKeys.forEach(({ note, label, x }) => {
    const key = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    key.setAttribute("class", `black-key${activeNotes.has(note) ? " key-active" : ""}`);
    key.setAttribute("x", x);
    key.setAttribute("y", 0);
    key.setAttribute("width", 28);
    key.setAttribute("height", 82);
    key.setAttribute("rx", 2);
    svg.appendChild(key);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", "black-label");
    text.setAttribute("x", x + 14);
    text.setAttribute("y", 72);
    text.textContent = label;
    svg.appendChild(text);
  });

  return svg;
}

function playChord(notes) {
  const playbackOutput = startNewPlayback();
  const noteNames = chordNoteNames(notes);

  if (pianoReady) {
    Tone.start();

    schedulePlayback(() => {
      pianoSampler.triggerAttackRelease(noteNames, 1.45, undefined, 0.75);
    }, startDelay);

    noteNames.forEach((noteName, index) => {
      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(noteName, 0.95, undefined, 0.78);
      }, startDelay + 1.63 + index * 0.62);
    });

    return;
  }

  const now = audioContext.currentTime + startDelay;
  const frequencies = chordFrequencies(notes);
  const chordDuration = 1.45;
  const noteStart = now + chordDuration + 0.18;
  const noteSpacing = 0.62;
  const output = audioContext.createGain();

  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
  output.gain.exponentialRampToValueAtTime(0.085, now + 0.55);
  output.gain.exponentialRampToValueAtTime(0.0001, now + chordDuration);
  output.connect(playbackOutput);

  frequencies.forEach((frequency) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.connect(output);
    oscillator.start(now);
    oscillator.stop(now + chordDuration + 0.08);
  });

  frequencies.forEach((frequency, index) => {
    playSynthNote(frequency, noteStart + index * noteSpacing, 0.95, playbackOutput);
  });
}

function chordNoteNamesFromSymbol(symbol) {
  const match = symbol.trim().match(/^([A-G](?:#|b)?)(m?)$/);

  if (!match) {
    return [];
  }

  const [, root, minor] = match;
  const rootValue = noteValues[root];
  const thirdInterval = minor ? 3 : 4;
  const midiNumbers = [rootValue, rootValue + thirdInterval, rootValue + 7].map((value) => {
    return 60 + value;
  });

  return midiNumbers.map((midiNumber) => {
    const noteName = sharpNames[midiNumber % 12];
    const octave = Math.floor(midiNumber / 12) - 1;

    return `${noteName}${octave}`;
  });
}

function frequenciesFromChordSymbol(symbol) {
  return chordNoteNamesFromSymbol(symbol).map((noteName) => {
    const [, note, octave] = noteName.match(/^([A-G]#?)(\d)$/);
    const midiNumber = 12 * (Number(octave) + 1) + noteValues[note];

    return 440 * 2 ** ((midiNumber - 69) / 12);
  });
}

function playSynthNote(frequency, startTime, duration = 1.35, destination = audioContext.destination) {
  const oscillator = audioContext.createOscillator();
  const noteGain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  noteGain.gain.setValueAtTime(0.0001, startTime);
  noteGain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.015);
  noteGain.gain.exponentialRampToValueAtTime(0.12, startTime + 0.55);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(noteGain);
  noteGain.connect(destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function playProgression(chordSymbols) {
  const playbackOutput = startNewPlayback();
  const chordSpacing = 1.05;
  const chordDuration = 1.45;

  if (pianoReady) {
    Tone.start();

    chordSymbols.forEach((symbol, index) => {
      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(chordNoteNamesFromSymbol(symbol), chordDuration, undefined, 0.82);
      }, startDelay + index * chordSpacing);
    });

    return;
  }

  const now = audioContext.currentTime + startDelay;

  chordSymbols.forEach((symbol, index) => {
    const output = audioContext.createGain();
    const startTime = now + index * chordSpacing;
    const chordFrequencies = frequenciesFromChordSymbol(symbol);

    output.gain.setValueAtTime(0.0001, startTime);
    output.gain.exponentialRampToValueAtTime(0.2, startTime + 0.03);
    output.gain.exponentialRampToValueAtTime(0.14, startTime + 0.6);
    output.gain.exponentialRampToValueAtTime(0.0001, startTime + chordDuration);
    output.connect(playbackOutput);

    chordFrequencies.forEach((frequency) => {
      playSynthNote(frequency, startTime, chordDuration, output);
    });
  });
}

document.querySelectorAll(".card[data-notes]").forEach((card) => {
  const notes = card.dataset.notes.split(",");
  const keyboard = card.querySelector(".keyboard");
  const button = card.querySelector(".play-button");

  keyboard.appendChild(createKeyboard(notes));
  button.addEventListener("click", () => playChord(notes));
});

document.querySelectorAll(".progressions li[data-progression]").forEach((item) => {
  const button = item.querySelector(".progression-play");
  const chordSymbols = item.dataset.progression.split(",");

  button.addEventListener("click", () => playProgression(chordSymbols));
});

const menuToggle = document.querySelector(".menu-toggle");
const menuBackdrop = document.querySelector(".menu-backdrop");
const sidebarLinks = document.querySelectorAll(".sidebar a");

function setMenuOpen(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));

  if (menuBackdrop) {
    menuBackdrop.hidden = !isOpen;
  }
}

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("menu-open"));
});

menuBackdrop?.addEventListener("click", () => {
  setMenuOpen(false);
});

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

initializePianoSampler();
