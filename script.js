const noteValues = {
  Cb: 11,
  C: 0,
  "B#": 0,
  "C#": 1,
  Db: 1,
  D: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  Fb: 4,
  "E#": 5,
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
const flatNames = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const rootSelectorNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const enharmonicRootLabels = {
  "C#": "C#/Db",
  "D#": "D#/Eb",
  "F#": "F#/Gb",
  "G#": "G#/Ab",
  "A#": "A#/Bb",
};
const majorChordsByRoot = Object.fromEntries(
  rootSelectorNotes.map((root) => {
    const rootValue = noteValues[root];

    return [
      root,
      {
        root,
        quality: "Major",
        notes: [rootValue, rootValue + 4, rootValue + 7].map((value) => sharpNames[normalizeValue(value)]),
      },
    ];
  })
);
const majorKeys = {
  C: ["C", "D", "E", "F", "G", "A", "B"],
  G: ["G", "A", "B", "C", "D", "E", "F#"],
  D: ["D", "E", "F#", "G", "A", "B", "C#"],
  A: ["A", "B", "C#", "D", "E", "F#", "G#"],
  E: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
  Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"],
  F: ["F", "G", "A", "Bb", "C", "D", "E"],
};
const majorKeyOrder = Object.keys(majorKeys);
const majorDiatonicPattern = [
  { roman: "I", quality: "Major", suffix: "" },
  { roman: "ii", quality: "Minor", suffix: "m" },
  { roman: "iii", quality: "Minor", suffix: "m" },
  { roman: "IV", quality: "Major", suffix: "" },
  { roman: "V", quality: "Major", suffix: "" },
  { roman: "vi", quality: "Minor", suffix: "m" },
  { roman: "vii\u00b0", quality: "Diminished", suffix: "dim" },
];
const commonProgressions = [
  { roman: "I - IV - V", degrees: [0, 3, 4] },
  { roman: "I - V - vi - IV", degrees: [0, 4, 5, 3] },
  { roman: "ii - V - I", degrees: [1, 4, 0] },
  { roman: "vi - IV - I - V", degrees: [5, 3, 0, 4] },
];
const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
const blackKeys = [
  { note: "C#", x: 28 },
  { note: "D#", x: 70 },
  { note: "F#", x: 154 },
  { note: "G#", x: 196 },
  { note: "A#", x: 238 },
];
const majorScaleIntervals = [0, 2, 4, 5, 7, 9, 11];
const minorScaleIntervals = [0, 2, 3, 5, 7, 8, 10];
const keyChordPattern = [
  { roman: "I", quality: "Major", intervals: [0, 4, 7] },
  { roman: "ii", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "iii", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "IV", quality: "Major", intervals: [0, 4, 7] },
  { roman: "V", quality: "Major", intervals: [0, 4, 7] },
  { roman: "vi", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "vii\u00b0", quality: "Diminished", intervals: [0, 3, 6] },
];
const minorKeyChordPattern = [
  { roman: "i", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "ii\u00b0", quality: "Diminished", intervals: [0, 3, 6] },
  { roman: "III", quality: "Major", intervals: [0, 4, 7] },
  { roman: "iv", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "v", quality: "Minor", intervals: [0, 3, 7] },
  { roman: "VI", quality: "Major", intervals: [0, 4, 7] },
  { roman: "VII", quality: "Major", intervals: [0, 4, 7] },
];
const progressionSets = {
  common: [
    {
      roman: "I - IV - V",
      degrees: [0, 3, 4],
    },
    {
      roman: "I - V - vi - IV",
      degrees: [0, 4, 5, 3],
    },
    {
      roman: "I - vi - IV - V",
      degrees: [0, 5, 3, 4],
    },
    {
      roman: "I - IV - I - V",
      degrees: [0, 3, 0, 4],
    },
    {
      roman: "I - ii - V - I",
      degrees: [0, 1, 4, 0],
    },
  ],
  uncommon: [
    {
      roman: "I - iii - IV - iv",
      degrees: [0, 2, 3, { degree: 3, quality: "Minor" }],
    },
    {
      roman: "I - bVII - IV - I",
      degrees: [0, { rootOffset: 10, quality: "Major" }, 3, 0],
    },
    {
      roman: "I - bVI - bVII - I",
      degrees: [0, { rootOffset: 8, quality: "Major" }, { rootOffset: 10, quality: "Major" }, 0],
    },
    {
      roman: "I - V - bVII - IV",
      degrees: [0, 4, { rootOffset: 10, quality: "Major" }, 3],
    },
    {
      roman: "I - #iv\u00b0 - V - I",
      degrees: [0, { rootOffset: 6, quality: "Diminished" }, 4, 0],
    },
  ],
};
const minorProgressionSets = {
  common: [
    { roman: "i - iv - v", degrees: [0, 3, 4] },
    { roman: "i - VI - III - VII", degrees: [0, 5, 2, 6] },
    { roman: "i - VII - VI - VII", degrees: [0, 6, 5, 6] },
    { roman: "i - iv - VII - III", degrees: [0, 3, 6, 2] },
    { roman: "i - VI - iv - V", degrees: [0, 5, 3, { degree: 4, quality: "Major" }] },
  ],
  uncommon: [
    { roman: "i - v - VI - iv", degrees: [0, 4, 5, 3] },
    { roman: "i - III - VII - iv", degrees: [0, 2, 6, 3] },
    { roman: "i - bII - VII - i", degrees: [0, { rootOffset: 1, quality: "Major" }, 6, 0] },
    { roman: "i - iv - bVII - VI", degrees: [0, 3, { rootOffset: 10, quality: "Major" }, 5] },
    { roman: "i - ii\u00b0 - V - i", degrees: [0, 1, { degree: 4, quality: "Major" }, 0] },
  ],
};
const keyModeConfigs = {
  major: {
    titleQuality: "Major",
    subtitle: "Major scale and diatonic triads",
    fallbackRoot: "C",
    page: "piano-major-key.html",
    scaleIntervals: majorScaleIntervals,
    chordPattern: keyChordPattern,
    progressions: progressionSets,
  },
  minor: {
    titleQuality: "Minor",
    subtitle: "Natural minor scale and diatonic triads",
    fallbackRoot: "A",
    page: "piano-minor-key.html",
    scaleIntervals: minorScaleIntervals,
    chordPattern: minorKeyChordPattern,
    progressions: minorProgressionSets,
  },
};
const notationStorageKey = "preferredNotation";

let audioContext;
let activePlaybackOutput;
let pianoSampler;
let pianoReady = false;
let activeTimers = [];
let preferredNotation = getStoredNotation();
const startDelay = 0.5;
const progressionChordSpacing = 1.35;
const progressionChordDuration = 1.45;
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
  resetProgressionAnimations();

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
  return sharpNames[normalizeValue(noteValues[note.trim()])];
}

function getStoredNotation() {
  try {
    const storedNotation = window.localStorage?.getItem(notationStorageKey);
    return storedNotation === "flat" ? "flat" : "sharp";
  } catch {
    return "sharp";
  }
}

function storeNotation(notation) {
  try {
    window.localStorage?.setItem(notationStorageKey, notation);
  } catch {
    // The toggle still works when storage is blocked.
  }
}

function normalizeValue(value) {
  return ((value % 12) + 12) % 12;
}

function noteNameForValue(value, notation = preferredNotation) {
  const names = notation === "flat" ? flatNames : sharpNames;
  return names[normalizeValue(value)];
}

function displayNoteName(note) {
  return noteNameForValue(noteValues[note.trim()]);
}

function displayNotes(notes) {
  return notes.map(displayNoteName).join(" - ");
}

function getRootValue(root) {
  return noteValues[root?.trim()];
}

function chordName(root, quality) {
  return `${displayNoteName(root)} ${quality}`;
}

function rootSelectorLabel(root) {
  return enharmonicRootLabels[root] || root;
}

function selectedChordRootName(root) {
  return noteNameForValue(noteValues[root]);
}

function chordIntervalsForQuality(quality) {
  return quality === "Minor" ? [0, 3, 7] : [0, 4, 7];
}

function getChordForRoot(root, quality = "Major") {
  const normalizedRoot = sharpNames[normalizeValue(noteValues[root] ?? 0)];
  const rootValue = noteValues[normalizedRoot];
  const displayRoot = selectedChordRootName(normalizedRoot);

  return {
    root: displayRoot,
    quality,
    notes: chordNotesFromRoot(rootValue, chordIntervalsForQuality(quality)),
  };
}

function getMajorChordForRoot(root) {
  return getChordForRoot(root, "Major");
}

function keySymbol(root, quality) {
  return `${root}${qualitySuffix(quality)}`;
}

function displayKeyChordName(chord) {
  return `${chord.roman}: ${chord.root}${chord.suffix}`;
}

function getKeyMode() {
  return document.body.dataset.keyMode === "minor" ? "minor" : "major";
}

function getKeyConfig() {
  return keyModeConfigs[getKeyMode()];
}

function chordTitleForCard(card) {
  const name = chordName(card.dataset.root, card.dataset.quality);
  return card.dataset.roman ? `${card.dataset.roman} ${name}` : name;
}

function majorChordNotes(rootValue) {
  return [rootValue, rootValue + 4, rootValue + 7].map((value) => {
    return sharpNames[normalizeValue(value)];
  });
}

function notesFromValues(values) {
  return values.map((value) => {
    return sharpNames[normalizeValue(value)];
  });
}

function scaleValues(rootValue, config = getKeyConfig()) {
  return config.scaleIntervals.map((interval) => {
    return normalizeValue(rootValue + interval);
  });
}

function scaleNotes(rootValue, config = getKeyConfig()) {
  return notesFromValues(scaleValues(rootValue, config));
}

function chordNotesFromRoot(rootValue, intervals) {
  return notesFromValues(intervals.map((interval) => rootValue + interval));
}

function qualitySuffix(quality) {
  if (quality === "Minor") {
    return "m";
  }

  if (quality === "Diminished") {
    return "dim";
  }

  return "";
}

function chordSymbol(root, quality) {
  return `${normalizeNote(root)}${qualitySuffix(quality)}`;
}

function displayChordSymbol(symbol) {
  const match = symbol.trim().match(/^([A-G](?:#|b)?)(dim|m?)$/);

  if (!match) {
    return symbol;
  }

  const [, root, suffix] = match;
  return `${displayNoteName(root)}${suffix}`;
}

function keyChords(rootValue, config = getKeyConfig()) {
  return scaleValues(rootValue, config).map((scaleValue, index) => {
    const chord = config.chordPattern[index];

    return {
      roman: chord.roman,
      root: sharpNames[scaleValue],
      quality: chord.quality,
      notes: chordNotesFromRoot(scaleValue, chord.intervals),
      symbol: chordSymbol(sharpNames[scaleValue], chord.quality),
    };
  });
}

function progressionChordFromItem(item, rootValue, diatonicChords) {
  if (typeof item === "number") {
    return diatonicChords[item];
  }

  if (Number.isInteger(item.degree)) {
    const baseChord = diatonicChords[item.degree];
    const pattern = getKeyConfig().chordPattern.find((entry) => entry.quality === item.quality) || keyChordPattern[0];

    return {
      root: baseChord.root,
      quality: item.quality,
      notes: chordNotesFromRoot(noteValues[baseChord.root], pattern.intervals),
      symbol: chordSymbol(baseChord.root, item.quality),
    };
  }

  const quality = item.quality || "Major";
  const pattern = getKeyConfig().chordPattern.find((entry) => entry.quality === quality) || keyChordPattern[0];
  const chordRoot = sharpNames[normalizeValue(rootValue + item.rootOffset)];

  return {
    root: chordRoot,
    quality,
    notes: chordNotesFromRoot(noteValues[chordRoot], pattern.intervals),
    symbol: chordSymbol(chordRoot, quality),
  };
}

function progressionChords(progression, rootValue, diatonicChords = keyChords(rootValue)) {
  return progression.degrees.map((item) => {
    return progressionChordFromItem(item, rootValue, diatonicChords);
  });
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

function createKeyboard(notes, preserveLabels = false) {
  const activeNotes = new Set(notes.map(normalizeNote));
  const activeLabels = new Map(
    preserveLabels
      ? notes.map((note) => [normalizeValue(noteValues[note]), note])
      : []
  );
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
    label.textContent = activeLabels.get(noteValues[note]) || note;
    svg.appendChild(label);
  });

  blackKeys.forEach(({ note, x }) => {
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
    text.textContent = activeLabels.get(noteValues[note]) || displayNoteName(note);
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
  const match = symbol.trim().match(/^([A-G](?:#|b)?)(dim|m?)$/);

  if (!match) {
    return [];
  }

  const [, root, quality] = match;
  const rootValue = noteValues[root];
  const intervals = quality === "dim" ? [0, 3, 6] : [0, quality ? 3 : 4, 7];
  const midiNumbers = intervals.map((interval) => {
    const value = rootValue + interval;
    return 60 + value;
  });

  return midiNumbers.map((midiNumber) => {
    const noteName = sharpNames[midiNumber % 12];
    const octave = Math.floor(midiNumber / 12) - 1;

    return `${noteName}${octave}`;
  });
}

function chordNotesFromSymbol(symbol) {
  const match = symbol.trim().match(/^([A-G](?:#|b)?)(dim|m?)$/);

  if (!match) {
    return [];
  }

  const [, root, quality] = match;
  const rootValue = noteValues[root];
  const intervals = quality === "dim" ? [0, 3, 6] : [0, quality ? 3 : 4, 7];

  return chordNotesFromRoot(rootValue, intervals);
}

function frequenciesFromChordSymbol(symbol) {
  return chordNoteNamesFromSymbol(symbol).map((noteName) => {
    const [, note, octave] = noteName.match(/^([A-G](?:#|b)?)(\d)$/);
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

function resetProgressionAnimations() {
  document.querySelectorAll("[data-progression-animation]").forEach((animation) => {
    setProgressionAnimationChord(animation, 0);
    animation.classList.remove("is-active");
  });
  document.querySelectorAll(".progressions li.is-playing").forEach((item) => {
    item.classList.remove("is-playing");
  });
}

function ensureProgressionAnimation(item, chordSymbols) {
  let animation = item.querySelector("[data-progression-animation]");
  const content = item.querySelector(".progression-play + div") || item;

  if (!animation) {
    animation = document.createElement("div");
    animation.className = "progression-animation";
    animation.dataset.progressionAnimation = "";
    animation.setAttribute("aria-label", "Played chord sequence");

    content.appendChild(animation);
  }

  animation.dataset.symbols = chordSymbols.join(",");
  if (item.dataset.displayProgression) {
    animation.dataset.displaySymbols = item.dataset.displayProgression;
  }
  updateProgressionAnimation(animation);

  return animation;
}

function updateProgressionAnimation(animation) {
  const symbols = animation.dataset.symbols?.split(",").filter(Boolean) || [];

  if (!animation.querySelector(".progression-step")) {
    const step = document.createElement("div");
    step.className = "progression-step";
    step.append(document.createElement("span"), document.createElement("div"));
    animation.replaceChildren(step);
  }

  setProgressionAnimationChord(animation, Number(animation.dataset.activeIndex) || 0);
}

function setProgressionAnimationChord(animation, index) {
  const symbols = animation.dataset.symbols?.split(",").filter(Boolean) || [];
  const symbol = symbols[index] || symbols[0];
  const step = animation.querySelector(".progression-step");

  if (!symbol || !step) {
    return;
  }

  const label = step.querySelector("span");
  const keyboard = step.querySelector("div");
  const notes = chordNotesFromSymbol(symbol);
  const displaySymbols = animation.dataset.displaySymbols?.split(",").filter(Boolean) || [];

  animation.dataset.activeIndex = String(index);
  label.textContent = displaySymbols[index] || displayChordSymbol(symbol);
  keyboard.className = "progression-keyboard";
  keyboard.setAttribute("aria-hidden", "true");
  keyboard.replaceChildren(createKeyboard(notes));
}

function updateProgressionAnimationLabels() {
  document.querySelectorAll("[data-progression-animation]").forEach(updateProgressionAnimation);
}

function scheduleProgressionAnimation(item, chordSymbols) {
  if (!item) {
    return;
  }

  const animation = ensureProgressionAnimation(item, chordSymbols);
  item.classList.add("is-playing");

  chordSymbols.forEach((_, index) => {
    schedulePlayback(() => {
      animation.classList.add("is-active");
      setProgressionAnimationChord(animation, index);
    }, startDelay + index * progressionChordSpacing);
  });

  schedulePlayback(() => {
    animation.classList.remove("is-active");
    setProgressionAnimationChord(animation, 0);
    item.classList.remove("is-playing");
  }, startDelay + chordSymbols.length * progressionChordSpacing + 0.2);
}

function playProgression(chordSymbols, item) {
  const playbackOutput = startNewPlayback();
  scheduleProgressionAnimation(item, chordSymbols);

  if (pianoReady) {
    Tone.start();

    chordSymbols.forEach((symbol, index) => {
      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(chordNoteNamesFromSymbol(symbol), progressionChordDuration, undefined, 0.82);
      }, startDelay + index * progressionChordSpacing);
    });

    return;
  }

  const now = audioContext.currentTime + startDelay;

  chordSymbols.forEach((symbol, index) => {
    const output = audioContext.createGain();
    const startTime = now + index * progressionChordSpacing;
    const chordFrequencies = frequenciesFromChordSymbol(symbol);

    output.gain.setValueAtTime(0.0001, startTime);
    output.gain.exponentialRampToValueAtTime(0.2, startTime + 0.03);
    output.gain.exponentialRampToValueAtTime(0.14, startTime + 0.6);
    output.gain.exponentialRampToValueAtTime(0.0001, startTime + progressionChordDuration);
    output.connect(playbackOutput);

    chordFrequencies.forEach((frequency) => {
      playSynthNote(frequency, startTime, progressionChordDuration, output);
    });
  });
}

function updateChordCardText(card) {
  const notes = card.dataset.notes.split(",");
  const title = card.querySelector("h2, h3");
  const noteText = card.querySelector("[data-dynamic-chord-notes]") || card.querySelector("p");
  const keyboard = card.querySelector(".keyboard");
  const button = card.querySelector(".play-button");
  const displayedChordName = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayTitle
    : card.dataset.root && card.dataset.quality
      ? chordTitleForCard(card)
      : displayNotes(notes);
  const displayedNotes = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayNotes
    : displayNotes(notes);

  if (title && card.dataset.root && card.dataset.quality) {
    title.textContent = displayedChordName;
  }

  if (noteText) {
    noteText.textContent = `${card.hasAttribute("data-dynamic-major-card") ? "Chord" : "Notes"}: ${displayedNotes}`;
  }

  if (button && card.dataset.root && card.dataset.quality) {
    button.setAttribute("aria-label", `Play ${displayedChordName} chord`);
  }

  if (card.closest("[data-dynamic-chord-page], [data-major-chord-page]") && card.dataset.root && card.dataset.quality) {
    document.title = `${displayedChordName} - Chords Bible`;
  }

  if (keyboard) {
    keyboard.setAttribute("aria-label", `Piano keys for ${displayedChordName}`);
    keyboard.replaceChildren(createKeyboard(notes, card.hasAttribute("data-preserve-spelling")));
  }
}

function initializeChordCard(card) {
  const notes = card.dataset.notes.split(",");
  const keyboard = card.querySelector(".keyboard");
  const button = card.querySelector(".play-button");

  if (keyboard && !keyboard.firstChild) {
    keyboard.appendChild(createKeyboard(notes));
  }

  if (button && !card.dataset.playReady) {
    button.addEventListener("click", () => playChord(card.dataset.notes.split(",")));
    card.dataset.playReady = "true";
  }

  updateChordCardText(card);
}

function initializeChordCards() {
  document.querySelectorAll(".card[data-notes]").forEach(initializeChordCard);
}

function initializeProgressions() {
  document.querySelectorAll(".progressions li[data-progression]").forEach((item) => {
    const button = item.querySelector(".progression-play");
    const chordSymbols = item.dataset.progression.split(",");
    ensureProgressionAnimation(item, chordSymbols);

    if (button && !item.dataset.playReady) {
      button.addEventListener("click", () => playProgression(chordSymbols, item));
      item.dataset.playReady = "true";
    }
  });
}

function dynamicChordPageForElement(element = document) {
  return element.closest?.("[data-dynamic-chord-page], [data-major-chord-page]") ||
    document.querySelector("[data-dynamic-chord-page], [data-major-chord-page]");
}

function getChordPageQuality(page) {
  return page?.dataset.chordQuality || "Major";
}

function getDynamicChordCard(page = dynamicChordPageForElement()) {
  return page?.querySelector("[data-dynamic-chord-card], [data-major-chord-card]");
}

function updateChordRootButtons() {
  document.querySelectorAll("[data-chord-root]").forEach((button) => {
    const root = button.dataset.chordRoot;
    const displayRoot = selectedChordRootName(root);
    const label = rootSelectorLabel(root);
    const page = dynamicChordPageForElement(button);
    const quality = getChordPageQuality(page).toLowerCase();

    button.textContent = label;
    button.setAttribute("aria-label", `Choose ${displayRoot} ${quality} chord root`);
  });
}

function setDynamicChordRoot(root, page = dynamicChordPageForElement()) {
  const card = getDynamicChordCard(page);

  if (!card) {
    return;
  }

  const quality = getChordPageQuality(page);
  const chord = getChordForRoot(root, quality);
  card.dataset.root = chord.root;
  card.dataset.quality = chord.quality;
  card.dataset.notes = chord.notes.join(",");
  document.title = `${chord.root} ${quality} - Chords Bible`;

  page.querySelectorAll("[data-chord-root]").forEach((button) => {
    const isActive = normalizeValue(noteValues[button.dataset.chordRoot]) === normalizeValue(noteValues[root]);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateChordCardText(card);
}

function setMajorChordRoot(root) {
  setDynamicChordRoot(root);
}

function initializeMajorChordPage() {
  const page = document.querySelector("[data-dynamic-chord-page], [data-major-chord-page]");

  if (!page) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const fallbackRoot = page.dataset.fallbackRoot || "C";
  const root = params.get("root") || fallbackRoot;
  const initialRoot = Number.isInteger(getRootValue(root)) ? root : fallbackRoot;

  page.querySelectorAll("[data-chord-root]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextRoot = button.dataset.chordRoot;
      const url = new URL(window.location.href);
      url.searchParams.set("root", selectedChordRootName(nextRoot));
      window.history.replaceState({}, "", url);
      setDynamicChordRoot(nextRoot, page);
    });
  });

  updateChordRootButtons();
  setDynamicChordRoot(initialRoot, page);
}

function updateRootMenu() {
  document.querySelectorAll("[data-root-link]").forEach((link) => {
    const rootValue = Number(link.dataset.rootLink);
    const rootName = noteNameForValue(rootValue);
    const rootMenu = link.closest("[data-root-menu]");
    const page = rootMenu?.dataset.keyPage || getKeyConfig().page;
    link.textContent = rootName;
    link.setAttribute("href", `${page}?root=${encodeURIComponent(rootName)}`);
  });
}

function updateNotationButtons() {
  document.querySelectorAll("[data-notation]").forEach((button) => {
    const isActive = button.dataset.notation === preferredNotation;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateDynamicKeyText() {
  const card = document.querySelector("[data-key-chords] .card[data-notes]");

  if (!card) {
    return;
  }

  const config = getKeyConfig();
  const heading = document.querySelector("[data-key-title], [data-major-title]");
  const subtitle = document.querySelector("[data-key-subtitle], [data-major-subtitle]");
  const scaleText = document.querySelector("[data-dynamic-scale-notes]");
  const keyChordsContainer = document.querySelector("[data-key-chords]");
  const keyChordsTitle = document.querySelector("[data-key-chords-title]");
  const commonProgressionsTitle = document.querySelector("[data-common-progressions-title]");
  const uncommonProgressionsTitle = document.querySelector("[data-uncommon-progressions-title]");
  const chordTitle = chordName(card.dataset.root, config.titleQuality);

  document.title = `${chordTitle} - Piano Chords`;

  if (heading) {
    heading.textContent = chordTitle;
  }

  if (subtitle) {
    subtitle.textContent = config.subtitle;
  }

  if (keyChordsTitle) {
    keyChordsTitle.textContent = `Chords in ${chordTitle} key`;
  }

  if (commonProgressionsTitle) {
    commonProgressionsTitle.textContent = `Common progressions in ${chordTitle}`;
  }

  if (uncommonProgressionsTitle) {
    uncommonProgressionsTitle.textContent = `Uncommon progressions in ${chordTitle}`;
  }

  if (scaleText) {
    scaleText.textContent = `Scale: ${displayNotes(keyChordsContainer.dataset.scaleNotes.split(","))}`;
  }

  updateProgressionLabels();
}

function updateNotation() {
  updateNotationButtons();
  updateRootMenu();
  updateChordRootButtons();
  document.querySelectorAll(".card[data-notes]").forEach(updateChordCardText);
  updateDynamicKeyText();
  updateProgressionLabels();
  updateProgressionAnimationLabels();
}

function initializeNotationToggle() {
  document.querySelectorAll("[data-notation]").forEach((button) => {
    button.addEventListener("click", () => {
      preferredNotation = button.dataset.notation === "flat" ? "flat" : "sharp";
      storeNotation(preferredNotation);
      updateNotation();
    });
  });
}

function initializeDynamicMajorPage() {
  const keyChordsContainer = document.querySelector("[data-key-chords]");

  if (!keyChordsContainer) {
    return;
  }

  const config = getKeyConfig();
  const params = new URLSearchParams(window.location.search);
  const rootValue = getRootValue(params.get("root"));
  const fallbackRootValue = noteValues[config.fallbackRoot];
  const normalizedRootValue = Number.isInteger(rootValue) ? rootValue : fallbackRootValue;
  const scaleNoteNames = scaleNotes(normalizedRootValue, config);
  const chords = keyChords(normalizedRootValue, config);

  keyChordsContainer.dataset.scaleNotes = scaleNoteNames.join(",");
  renderKeyChords(chords);
  renderProgressions(normalizedRootValue, chords, config);
}

function canonicalMajorKey(key) {
  const trimmedKey = key?.trim() || "C";

  if (majorKeys[trimmedKey]) {
    return trimmedKey;
  }

  const value = noteValues[trimmedKey];

  return majorKeyOrder.find((keyName) => noteValues[keyName] === value) || "C";
}

function majorKeyDiatonicChords(keyName) {
  const scale = majorKeys[keyName];

  return majorDiatonicPattern.map((pattern, index) => {
    const notes = [scale[index], scale[(index + 2) % 7], scale[(index + 4) % 7]];

    return {
      ...pattern,
      root: scale[index],
      notes,
      symbol: keySymbol(scale[index], pattern.quality),
    };
  });
}

function renderMajorKeyMenu(activeKey) {
  const menu = document.querySelector("[data-major-key-menu]");

  if (!menu) {
    return;
  }

  menu.replaceChildren();

  majorKeyOrder.forEach((keyName) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.majorKey = keyName;
    button.textContent = keyName;
    button.setAttribute("aria-label", `Choose ${keyName} major key`);
    button.setAttribute("aria-pressed", String(keyName === activeKey));
    button.addEventListener("click", () => {
      const url = new URL(window.location.href);
      url.searchParams.set("key", keyName);
      window.history.replaceState({}, "", url);
      renderMajorKeyPage(keyName);
    });
    menu.appendChild(button);
  });
}

function renderMajorKeyChords(chords) {
  const container = document.querySelector("[data-major-key-chords]");

  if (!container) {
    return;
  }

  container.replaceChildren();

  chords.forEach((chord) => {
    const article = createChordCard({
      root: chord.root,
      quality: chord.quality,
      roman: chord.roman,
      notes: chord.notes,
    });

    article.dataset.preserveSpelling = "";
    article.dataset.displayTitle = displayKeyChordName(chord);
    article.dataset.displayNotes = chord.notes.join(" - ");
    container.appendChild(article);
  });
}

function renderMajorKeyProgressions(chords) {
  const container = document.querySelector("[data-major-key-progressions]");

  if (!container) {
    return;
  }

  container.replaceChildren();

  commonProgressions.forEach((progression) => {
    const progressionChordsForKey = progression.degrees.map((degree) => chords[degree]);
    const chordLabels = progressionChordsForKey.map((chord) => `${chord.root}${chord.suffix}`);
    const item = document.createElement("li");
    item.dataset.progression = progressionChordsForKey.map((chord) => chord.symbol).join(",");
    item.dataset.displayProgression = chordLabels.join(",");

    const button = document.createElement("button");
    button.className = "play-button progression-play";
    button.type = "button";
    button.setAttribute("aria-label", `Play ${progression.roman} progression`);

    const icon = document.createElement("span");
    icon.className = "play-icon";
    icon.setAttribute("aria-hidden", "true");
    button.appendChild(icon);

    const content = document.createElement("div");
    const roman = document.createElement("span");
    roman.textContent = progression.roman;

    const chordLine = document.createElement("div");
    chordLine.className = "progression-chords";
    chordLine.textContent = chordLabels.join(" - ");

    content.append(roman, chordLine);
    item.append(button, content);
    container.appendChild(item);
  });

  initializeProgressions();
}

function renderMajorKeyPage(keyName) {
  const selectedKey = canonicalMajorKey(keyName);
  const scale = majorKeys[selectedKey];
  const chords = majorKeyDiatonicChords(selectedKey);
  const title = document.querySelector("[data-selected-key-title]");
  const scaleLine = document.querySelector("[data-major-key-scale]");

  document.title = `${selectedKey} Major - Keys & Progressions`;

  if (title) {
    title.textContent = `${selectedKey} Major`;
  }

  if (scaleLine) {
    scaleLine.textContent = `Scale: ${scale.join(" - ")}`;
  }

  renderMajorKeyMenu(selectedKey);
  renderMajorKeyChords(chords);
  renderMajorKeyProgressions(chords);
  initializeChordCards();
}

function initializeMajorKeyPage() {
  if (!document.querySelector("[data-major-key-page]")) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  renderMajorKeyPage(params.get("key") || params.get("root") || "C");
}

function createChordCard(chord, options = {}) {
  const article = document.createElement("article");
  article.className = "card";
  article.dataset.notes = chord.notes.join(",");
  article.dataset.root = chord.root;
  article.dataset.quality = chord.quality;

  if (chord.roman) {
    article.dataset.roman = chord.roman;
  }

  if (options.tonic) {
    article.dataset.tonicCard = "";
  }

  if (options.scaleNotes) {
    article.dataset.scaleNotes = options.scaleNotes.join(",");
  }

  const titleRow = document.createElement("div");
  titleRow.className = "card-title";

  const button = document.createElement("button");
  button.className = "play-button";
  button.type = "button";
  button.setAttribute("aria-label", `Play ${chordTitleForCard(article)} chord`);

  const icon = document.createElement("span");
  icon.className = "play-icon";
  icon.setAttribute("aria-hidden", "true");
  button.appendChild(icon);

  const title = document.createElement("h3");
  titleRow.append(button, title);

  const keyboard = document.createElement("div");
  keyboard.className = "keyboard";
  keyboard.setAttribute("role", "img");

  const notes = document.createElement("p");

  article.append(titleRow, keyboard, notes);

  return article;
}

function renderKeyChords(chords) {
  const container = document.querySelector("[data-key-chords]");

  if (!container) {
    return;
  }

  container.replaceChildren();

  chords.forEach((chord) => {
    container.appendChild(createChordCard(chord));
  });
}

function renderProgressionList(container, progressions, rootValue, chords) {
  if (!container) {
    return;
  }

  container.replaceChildren();

  progressions.forEach((progression) => {
    const progressionChordsForKey = progressionChords(progression, rootValue, chords);
    const item = document.createElement("li");
    item.dataset.progression = progressionChordsForKey.map((chord) => chord.symbol).join(",");
    item.dataset.roman = progression.roman;

    const button = document.createElement("button");
    button.className = "play-button progression-play";
    button.type = "button";
    button.setAttribute("aria-label", `Play ${progression.roman} progression`);

    const icon = document.createElement("span");
    icon.className = "play-icon";
    icon.setAttribute("aria-hidden", "true");
    button.appendChild(icon);

    const content = document.createElement("div");
    const roman = document.createElement("span");
    roman.textContent = progression.roman;

    const chordLine = document.createElement("div");
    chordLine.className = "progression-chords";
    chordLine.dataset.progressionChords = progressionChordsForKey.map((chord) => `${chord.root}:${chord.quality}`).join(",");

    content.append(roman, chordLine);
    item.append(button, content);
    container.appendChild(item);
  });
}

function renderProgressions(rootValue, chords, config = getKeyConfig()) {
  renderProgressionList(document.querySelector("[data-common-progressions]"), config.progressions.common, rootValue, chords);
  renderProgressionList(document.querySelector("[data-uncommon-progressions]"), config.progressions.uncommon, rootValue, chords);
}

function updateProgressionLabels() {
  document.querySelectorAll("[data-progression-chords]").forEach((line) => {
    const labels = line.dataset.progressionChords.split(",").map((entry) => {
      const [root, quality] = entry.split(":");
      return quality === "Major" ? displayNoteName(root) : `${displayNoteName(root)}${qualitySuffix(quality)}`;
    });

    line.textContent = labels.join(" - ");
  });
}

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
initializeNotationToggle();
initializeMajorChordPage();
initializeMajorKeyPage();
initializeDynamicMajorPage();
initializeChordCards();
initializeProgressions();
updateNotation();
