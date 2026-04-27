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
const chordQualityCatalog = {
  Major: {
    label: "Major",
    title: "Major",
    badge: "Major",
    suffix: "",
    intervals: [0, 4, 7],
    formula: ["1", "3", "5"],
    description: "A major triad built from a root, a major third, and a perfect fifth.",
    related: ["maj7", "7", "Sus2", "Sus4", "Augmented"],
  },
  Minor: {
    label: "Minor",
    title: "Minor",
    badge: "Minor",
    suffix: "m",
    intervals: [0, 3, 7],
    formula: ["1", "b3", "5"],
    description: "A minor triad built from a root, a minor third, and a perfect fifth.",
    related: ["m7", "Diminished", "Sus2", "Power", "Major"],
  },
  Power: {
    label: "Power",
    title: "Power",
    badge: "5",
    suffix: "5",
    intervals: [0, 7],
    formula: ["1", "5"],
    description: "A compact fifth chord using the root and perfect fifth.",
    related: ["Major", "Minor", "Sus2", "Sus4", "7"],
  },
  Sus2: {
    label: "Sus2",
    title: "Suspended 2nd",
    badge: "sus2",
    suffix: "sus2",
    intervals: [0, 2, 7],
    formula: ["1", "2", "5"],
    description: "A suspended chord replacing the third with a major second.",
    related: ["Sus4", "Major", "Minor", "Power", "maj7"],
  },
  Sus4: {
    label: "Sus4",
    title: "Suspended 4th",
    badge: "sus4",
    suffix: "sus4",
    intervals: [0, 5, 7],
    formula: ["1", "4", "5"],
    description: "A suspended chord replacing the third with a perfect fourth.",
    related: ["Sus2", "Major", "Minor", "Power", "7"],
  },
  Augmented: {
    label: "Augmented",
    title: "Augmented",
    badge: "aug",
    suffix: "aug",
    intervals: [0, 4, 8],
    formula: ["1", "3", "#5"],
    description: "An augmented triad with a raised fifth for a bright, unstable sound.",
    related: ["Major", "7", "maj7", "Power", "Sus4"],
  },
  Diminished: {
    label: "Diminished",
    title: "Diminished",
    badge: "dim",
    suffix: "dim",
    intervals: [0, 3, 6],
    formula: ["1", "b3", "b5"],
    description: "A diminished triad built from stacked minor thirds.",
    related: ["Minor", "m7", "Power", "Sus2", "7"],
  },
  maj7: {
    label: "maj7",
    title: "Major 7th",
    badge: "maj7",
    suffix: "maj7",
    intervals: [0, 4, 7, 11],
    formula: ["1", "3", "5", "7"],
    description: "A major seventh chord adding the major seventh above a major triad.",
    related: ["Major", "7", "Augmented", "Sus4", "m7"],
  },
  m7: {
    label: "m7",
    title: "Minor 7th",
    badge: "m7",
    suffix: "m7",
    intervals: [0, 3, 7, 10],
    formula: ["1", "b3", "5", "b7"],
    description: "A minor seventh chord adding a minor seventh above a minor triad.",
    related: ["Minor", "Diminished", "7", "maj7", "Power"],
  },
  7: {
    label: "7",
    title: "Dominant 7th",
    badge: "7",
    suffix: "7",
    intervals: [0, 4, 7, 10],
    formula: ["1", "3", "5", "b7"],
    description: "A dominant seventh chord adding a minor seventh above a major triad.",
    related: ["Major", "maj7", "m7", "Augmented", "Diminished"],
  },
  dim7: {
    label: "dim7",
    title: "Diminished 7th",
    badge: "dim7",
    suffix: "dim7",
    intervals: [0, 3, 6, 9],
    formula: ["1", "b3", "b5", "bb7"],
    description: "A tense diminished seventh chord built from stacked minor thirds.",
    related: ["Diminished", "m7b5", "m7", "7", "Minor"],
  },
  m7b5: {
    label: "m7b5",
    title: "Half-diminished 7th",
    badge: "m7b5",
    suffix: "m7b5",
    intervals: [0, 3, 6, 10],
    formula: ["1", "b3", "b5", "b7"],
    description: "A half-diminished seventh chord with a minor third, flat fifth, and minor seventh.",
    related: ["Diminished", "dim7", "m7", "Minor", "7b5"],
  },
  mMaj7: {
    label: "mMaj7",
    title: "Minor Major 7th",
    badge: "mMaj7",
    suffix: "mMaj7",
    intervals: [0, 3, 7, 11],
    formula: ["1", "b3", "5", "7"],
    description: "A minor triad with a major seventh for a dramatic color.",
    related: ["Minor", "m7", "maj7", "m9", "Diminished"],
  },
  aug7: {
    label: "aug7",
    title: "Augmented 7th",
    badge: "aug7",
    suffix: "aug7",
    intervals: [0, 4, 8, 10],
    formula: ["1", "3", "#5", "b7"],
    description: "An augmented dominant seventh chord with a raised fifth.",
    related: ["Augmented", "7#5", "7", "maj7", "9"],
  },
  6: {
    label: "6",
    title: "Major 6th",
    badge: "6",
    suffix: "6",
    intervals: [0, 4, 7, 9],
    formula: ["1", "3", "5", "6"],
    description: "A major triad with an added sixth for a warm, open sound.",
    related: ["Major", "maj7", "9", "add9", "m6"],
  },
  m6: {
    label: "m6",
    title: "Minor 6th",
    badge: "m6",
    suffix: "m6",
    intervals: [0, 3, 7, 9],
    formula: ["1", "b3", "5", "6"],
    description: "A minor triad with an added sixth for a smooth minor color.",
    related: ["Minor", "m7", "m9", "madd9", "6"],
  },
  9: {
    label: "9",
    title: "Dominant 9th",
    badge: "9",
    suffix: "9",
    intervals: [0, 4, 7, 10, 14],
    formula: ["1", "3", "5", "b7", "9"],
    description: "A dominant seventh chord extended with a ninth.",
    related: ["7", "13", "7b9", "7#9", "add9"],
  },
  maj9: {
    label: "maj9",
    title: "Major 9th",
    badge: "maj9",
    suffix: "maj9",
    intervals: [0, 4, 7, 11, 14],
    formula: ["1", "3", "5", "7", "9"],
    description: "A major seventh chord extended with a ninth.",
    related: ["maj7", "9", "13", "add9", "Major"],
  },
  m9: {
    label: "m9",
    title: "Minor 9th",
    badge: "m9",
    suffix: "m9",
    intervals: [0, 3, 7, 10, 14],
    formula: ["1", "b3", "5", "b7", "9"],
    description: "A minor seventh chord extended with a ninth.",
    related: ["m7", "Minor", "m6", "madd9", "mMaj7"],
  },
  11: {
    label: "11",
    title: "Dominant 11th",
    badge: "11",
    suffix: "11",
    intervals: [0, 4, 7, 10, 14, 17],
    formula: ["1", "3", "5", "b7", "9", "11"],
    description: "A dominant ninth chord extended with an eleventh.",
    related: ["9", "13", "Sus4", "9#11", "7"],
  },
  13: {
    label: "13",
    title: "Dominant 13th",
    badge: "13",
    suffix: "13",
    intervals: [0, 4, 7, 10, 14, 17, 21],
    formula: ["1", "3", "5", "b7", "9", "11", "13"],
    description: "A dominant chord extended through the thirteenth.",
    related: ["9", "11", "13b9", "7", "6"],
  },
  "7b5": {
    label: "7b5",
    title: "Dominant 7 Flat 5",
    badge: "7b5",
    suffix: "7b5",
    intervals: [0, 4, 6, 10],
    formula: ["1", "3", "b5", "b7"],
    description: "A dominant seventh chord with a lowered fifth.",
    related: ["7", "m7b5", "7#5", "9#11", "Diminished"],
  },
  "7#5": {
    label: "7#5",
    title: "Dominant 7 Sharp 5",
    badge: "7#5",
    suffix: "7#5",
    intervals: [0, 4, 8, 10],
    formula: ["1", "3", "#5", "b7"],
    description: "A dominant seventh chord with a raised fifth.",
    related: ["7", "aug7", "Augmented", "7b5", "7#9"],
  },
  "7b9": {
    label: "7b9",
    title: "Dominant 7 Flat 9",
    badge: "7b9",
    suffix: "7b9",
    intervals: [0, 4, 7, 10, 13],
    formula: ["1", "3", "5", "b7", "b9"],
    description: "A dominant seventh chord with a lowered ninth.",
    related: ["7", "9", "7#9", "13b9", "Diminished"],
  },
  "7#9": {
    label: "7#9",
    title: "Dominant 7 Sharp 9",
    badge: "7#9",
    suffix: "7#9",
    intervals: [0, 4, 7, 10, 15],
    formula: ["1", "3", "5", "b7", "#9"],
    description: "A dominant seventh chord with a raised ninth.",
    related: ["7", "9", "7b9", "7#5", "13b9"],
  },
  "9#11": {
    label: "9#11",
    title: "Dominant 9 Sharp 11",
    badge: "9#11",
    suffix: "9#11",
    intervals: [0, 4, 7, 10, 14, 18],
    formula: ["1", "3", "5", "b7", "9", "#11"],
    description: "A dominant ninth chord with a raised eleventh.",
    related: ["9", "11", "7b5", "13", "7"],
  },
  "13b9": {
    label: "13b9",
    title: "Dominant 13 Flat 9",
    badge: "13b9",
    suffix: "13b9",
    intervals: [0, 4, 7, 10, 13, 21],
    formula: ["1", "3", "5", "b7", "b9", "13"],
    description: "A dominant thirteenth chord with a lowered ninth.",
    related: ["13", "7b9", "9", "7#9", "7"],
  },
  add9: {
    label: "add9",
    title: "Add 9",
    badge: "add9",
    suffix: "add9",
    intervals: [0, 4, 7, 14],
    formula: ["1", "3", "5", "9"],
    description: "A major triad with an added ninth and no seventh.",
    related: ["Major", "9", "maj9", "6", "sus4add9"],
  },
  madd9: {
    label: "madd9",
    title: "Minor Add 9",
    badge: "madd9",
    suffix: "madd9",
    intervals: [0, 3, 7, 14],
    formula: ["1", "b3", "5", "9"],
    description: "A minor triad with an added ninth and no seventh.",
    related: ["Minor", "m9", "m6", "add9", "m7"],
  },
  sus4add9: {
    label: "sus4add9",
    title: "Sus4 Add 9",
    badge: "sus4add9",
    suffix: "sus4add9",
    intervals: [0, 5, 7, 14],
    formula: ["1", "4", "5", "9"],
    description: "A suspended fourth chord with an added ninth.",
    related: ["Sus4", "Sus2", "add9", "11", "Major"],
  },
};
const chordQualityCategories = {
  basics: {
    label: "Basics",
    qualities: ["Major", "Minor", "Power", "Sus2", "Sus4", "Augmented", "Diminished"],
  },
  seventh: {
    label: "7th",
    qualities: ["7", "maj7", "m7", "dim7", "m7b5", "mMaj7", "aug7"],
  },
  extensions: {
    label: "Extensions",
    qualities: ["6", "m6", "9", "maj9", "m9", "11", "13"],
  },
  altered: {
    label: "Altered",
    qualities: ["7b5", "7#5", "7b9", "7#9", "9#11", "13b9"],
  },
  other: {
    label: "Other",
    qualities: ["add9", "madd9", "sus4add9"],
  },
};
const defaultChordCategory = "basics";
const chordQualityAliases = {
  ...Object.fromEntries(Object.keys(chordQualityCatalog).map((quality) => [quality.toLowerCase(), quality])),
  5: "Power",
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
    page: "piano-keys-progressions.html",
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
const pianoValleyThemeStorageKey = "pianoValleyTheme";
const soundModeLabels = {
  "grand-piano": "Grand Piano",
  synth: "Synth",
  chiptune: "Chiptune",
};

let audioContext;
let activePlaybackOutput;
let pianoSampler;
let pianoReady = false;
let selectedSoundMode = "grand-piano";
let padReverbImpulse;
let chipCurve;
let activeTimers = [];
let activeLoop = null;
let preferredNotation = getStoredNotation();
const startDelay = 0.5;
const chordDuration = 1.45;
const chordNoteStartOffset = 1.63;
const chordNoteSpacing = 0.62;
const chordNoteDuration = 0.95;
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

function startNewPlayback({ keepLoop = false } = {}) {
  getAudioContext();

  if (!keepLoop) {
    stopActiveLoop();
  }

  activeTimers.forEach((timerId) => window.clearTimeout(timerId));
  activeTimers = [];
  resetChordPlaybackKeyboards();
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

function stopActiveLoop() {
  if (!activeLoop) {
    return;
  }

  window.clearTimeout(activeLoop.timerId);
  activeLoop.button?.setAttribute("aria-pressed", "false");
  activeLoop.button?.classList.remove("is-looping");
  activeLoop = null;
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

function getSelectedSoundMode() {
  if (!document.body.classList.contains("home-dashboard-page")) {
    return "grand-piano";
  }

  return soundModeLabels[selectedSoundMode] ? selectedSoundMode : "grand-piano";
}

function getSoundOptions(selector = document) {
  const button = selector.querySelector?.("[data-sound-select-button]");
  const optionsId = button?.getAttribute("aria-controls");

  return optionsId ? document.getElementById(optionsId) : document.querySelector("[data-sound-options]");
}

function closeSoundSelector(selector) {
  const button = selector.querySelector("[data-sound-select-button]");
  const options = getSoundOptions(selector);

  selector.classList.remove("is-open");
  button?.setAttribute("aria-expanded", "false");

  if (options) {
    options.hidden = true;
  }
}

function openSoundSelector(selector) {
  const button = selector.querySelector("[data-sound-select-button]");
  const options = getSoundOptions(selector);

  selector.classList.add("is-open");
  button?.setAttribute("aria-expanded", "true");

  if (options) {
    const rect = button?.getBoundingClientRect();

    if (rect) {
      const menuWidth = rect.width;
      const menuLeft = Math.min(Math.max(rect.left, 12), Math.max(window.innerWidth - menuWidth - 12, 12));
      const menuBottom = Math.max(window.innerHeight - rect.top + 6, 12);

      options.style.setProperty("--sound-menu-left", `${menuLeft}px`);
      options.style.setProperty("--sound-menu-bottom", `${menuBottom}px`);
      options.style.setProperty("--sound-menu-width", `${menuWidth}px`);
    }

    options.hidden = false;
  }
}

function setSoundMode(mode, selector = document, { stopPlayback = false } = {}) {
  const normalizedMode = soundModeLabels[mode] ? mode : "grand-piano";

  selectedSoundMode = normalizedMode;
  selector.querySelectorAll("[data-sound-select-value]").forEach((element) => {
    element.textContent = soundModeLabels[normalizedMode];
  });

  document.querySelectorAll("[data-sound-option]").forEach((option) => {
    const isSelected = option.dataset.soundValue === normalizedMode;
    option.classList.toggle("is-selected", isSelected);
    option.setAttribute("aria-selected", String(isSelected));
  });

  if (stopPlayback && audioContext) {
    startNewPlayback();
  }
}

function focusSoundOption(selector, direction = 1) {
  const options = Array.from(getSoundOptions(selector)?.querySelectorAll("[data-sound-option]") || []);

  if (!options.length) {
    return;
  }

  const selectedIndex = Math.max(0, options.findIndex((option) => option.dataset.soundValue === selectedSoundMode));
  const activeIndex = options.indexOf(document.activeElement);
  const currentIndex = activeIndex >= 0 ? activeIndex : selectedIndex;
  const nextIndex = (currentIndex + direction + options.length) % options.length;

  options[nextIndex]?.focus();
}

function initializeSoundSelector() {
  const selectors = document.querySelectorAll("[data-sound-selector]");

  selectors.forEach((selector) => {
    if (selector.dataset.soundSelectorReady) {
      return;
    }

    const button = selector.querySelector("[data-sound-select-button]");
    const options = getSoundOptions(selector);

    setSoundMode(selectedSoundMode, selector);

    button?.addEventListener("click", () => {
      if (options?.hidden) {
        openSoundSelector(selector);
        getSoundOptions(selector)?.querySelector("[data-sound-option].is-selected")?.focus();
        return;
      }

      closeSoundSelector(selector);
    });

    button?.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
        return;
      }

      event.preventDefault();
      openSoundSelector(selector);
      focusSoundOption(selector, event.key === "ArrowUp" ? -1 : 1);
    });

    options?.querySelectorAll("[data-sound-option]").forEach((option) => {
      option.addEventListener("click", () => {
        setSoundMode(option.dataset.soundValue, selector, { stopPlayback: true });
        closeSoundSelector(selector);
        button?.focus();
      });

      option.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
          event.preventDefault();
          focusSoundOption(selector, event.key === "ArrowUp" ? -1 : 1);
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          option.click();
          return;
        }

        if (event.key === "Escape") {
          closeSoundSelector(selector);
          button?.focus();
        }
      });
    });

    selector.dataset.soundSelectorReady = "true";
  });

  if (!document.body.dataset.soundSelectorDocumentReady) {
    document.addEventListener("click", (event) => {
      document.querySelectorAll("[data-sound-selector].is-open").forEach((selector) => {
        const options = getSoundOptions(selector);

        if (!selector.contains(event.target) && !options?.contains(event.target)) {
          closeSoundSelector(selector);
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") {
        return;
      }

      document.querySelectorAll("[data-sound-selector].is-open").forEach(closeSoundSelector);
    });

    document.body.dataset.soundSelectorDocumentReady = "true";
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
  return `${displayNoteName(root)} ${chordQualityInfo(quality).title}`;
}

function rootSelectorLabel(root) {
  return enharmonicRootLabels[root] || root;
}

function selectedChordRootName(root) {
  return noteNameForValue(noteValues[root]);
}

function normalizeChordQuality(quality) {
  const key = String(quality || "Major").trim();

  return chordQualityCatalog[key] ? key : chordQualityAliases[key.toLowerCase()] || "Major";
}

function chordCategoryForQuality(quality) {
  const normalizedQuality = normalizeChordQuality(quality);
  const category = Object.entries(chordQualityCategories).find(([, config]) =>
    config.qualities.includes(normalizedQuality)
  );

  return category?.[0] || defaultChordCategory;
}

function normalizeChordCategory(category) {
  return chordQualityCategories[category] ? category : defaultChordCategory;
}

function chordQualityInfo(quality) {
  return chordQualityCatalog[normalizeChordQuality(quality)];
}

function chordIntervalsForQuality(quality) {
  return chordQualityInfo(quality).intervals;
}

function getChordForRoot(root, quality = "Major") {
  const normalizedRoot = sharpNames[normalizeValue(noteValues[root] ?? 0)];
  const rootValue = noteValues[normalizedRoot];
  const displayRoot = selectedChordRootName(normalizedRoot);
  const normalizedQuality = normalizeChordQuality(quality);

  return {
    root: displayRoot,
    quality: normalizedQuality,
    notes: chordNotesFromRoot(rootValue, chordIntervalsForQuality(normalizedQuality)),
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
  const name = chordName(card.dataset.root, normalizeChordQuality(card.dataset.quality));
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
  return chordQualityInfo(quality).suffix;
}

function chordSymbol(root, quality) {
  return `${normalizeNote(root)}${qualitySuffix(quality)}`;
}

function displayChordSymbolForRoot(root, quality) {
  return `${displayNoteName(root)}${qualitySuffix(quality)}`;
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

function createKeyboard(notes, preserveLabels = false, isPlaying = false, octaveCount = 1) {
  const visibleOctaves = octaveCount === 2 ? 2 : 1;
  const octaveWidth = 294;
  const activeNotes = new Set(notes.map(normalizeNote));
  const activeLabels = new Map(
    preserveLabels
      ? notes.map((note) => [normalizeValue(noteValues[note]), note])
      : []
  );
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", `piano-svg${isPlaying ? " is-playing" : ""}`);
  svg.setAttribute("viewBox", `0 0 ${octaveWidth * visibleOctaves} 132`);
  svg.setAttribute("aria-hidden", "true");
  svg.dataset.octaves = String(visibleOctaves);

  Array.from({ length: visibleOctaves }).forEach((_, octaveIndex) => {
    const offset = octaveIndex * octaveWidth;

    whiteKeys.forEach((note, index) => {
      const x = offset + index * 42;
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
      key.setAttribute("x", offset + x);
      key.setAttribute("y", 0);
      key.setAttribute("width", 28);
      key.setAttribute("height", 82);
      key.setAttribute("rx", 2);
      svg.appendChild(key);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("class", "black-label");
      text.setAttribute("x", offset + x + 14);
      text.setAttribute("y", 72);
      text.textContent = activeLabels.get(noteValues[note]) || displayNoteName(note);
      svg.appendChild(text);
    });
  });

  return svg;
}

function chordCardNotes(card) {
  return card.dataset.notes.split(",");
}

function chordCardOctaveCount(card) {
  return card.querySelector("[data-octave-toggle]") && card.dataset.octaves === "2" ? 2 : 1;
}

function renderChordCardKeyboard(card, notes = chordCardNotes(card), isPlaying = false) {
  const keyboard = card.querySelector(".keyboard");

  if (!keyboard) {
    return;
  }

  keyboard.replaceChildren(createKeyboard(notes, card.hasAttribute("data-preserve-spelling"), isPlaying, chordCardOctaveCount(card)));
}

function resetChordPlaybackKeyboards() {
  document.querySelectorAll(".card[data-notes], [data-dynamic-chord-card][data-notes], [data-major-chord-card][data-notes]").forEach((card) => {
    renderChordCardKeyboard(card);
  });
}

function scheduleChordKeyboardPlayback(card, notes, includeNoteSequence = true) {
  if (!card) {
    return;
  }

  schedulePlayback(() => renderChordCardKeyboard(card, notes, true), startDelay);

  if (!includeNoteSequence) {
    schedulePlayback(() => renderChordCardKeyboard(card), startDelay + chordDuration);
    return;
  }

  notes.forEach((note, index) => {
    const noteStart = startDelay + chordNoteStartOffset + index * chordNoteSpacing;
    schedulePlayback(() => renderChordCardKeyboard(card, [note], true), noteStart);
  });

  schedulePlayback(() => renderChordCardKeyboard(card), chordPlaybackDuration(notes.length));
}

function chordPlaybackDuration(noteCount = 3, includeNoteSequence = true) {
  if (!includeNoteSequence) {
    return startDelay + chordDuration + 0.35;
  }

  return startDelay + chordNoteStartOffset + Math.max(noteCount - 1, 0) * chordNoteSpacing + chordNoteDuration + 0.1;
}

function shouldUsePianoSampler() {
  return getSelectedSoundMode() === "grand-piano" && pianoReady && window.Tone && pianoSampler;
}

function clampAudioValue(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getPadReverbImpulse() {
  if (padReverbImpulse?.sampleRate === audioContext.sampleRate) {
    return padReverbImpulse.buffer;
  }

  const duration = 0.54;
  const length = Math.floor(audioContext.sampleRate * duration);
  const impulse = audioContext.createBuffer(2, length, audioContext.sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const data = impulse.getChannelData(channel);

    for (let index = 0; index < length; index += 1) {
      const decay = (1 - index / length) ** 2.4;
      data[index] = (Math.random() * 2 - 1) * decay * 0.42;
    }
  }

  padReverbImpulse = {
    sampleRate: audioContext.sampleRate,
    buffer: impulse,
  };

  return impulse;
}

function createPadReverbBus(destination) {
  const input = audioContext.createGain();
  const dry = audioContext.createGain();
  const wet = audioContext.createGain();
  const convolver = audioContext.createConvolver();

  dry.gain.value = 0.78;
  wet.gain.value = 0.32;
  convolver.buffer = getPadReverbImpulse();

  input.connect(dry);
  input.connect(convolver);
  dry.connect(destination);
  convolver.connect(wet);
  wet.connect(destination);

  return input;
}

function playPadNote(frequency, startTime, duration = 1.35, destination = audioContext.destination, velocity = 1) {
  const filter = audioContext.createBiquadFilter();
  const noteGain = audioContext.createGain();
  const oscillators = [
    { type: "sine", detune: -6, gain: 0.64 },
    { type: "triangle", detune: 7, gain: 0.42 },
  ];

  filter.type = "lowpass";
  filter.Q.setValueAtTime(0.85, startTime);
  filter.frequency.setValueAtTime(920, startTime);
  filter.frequency.linearRampToValueAtTime(1650, startTime + 0.48);

  noteGain.gain.setValueAtTime(0.0001, startTime);
  noteGain.gain.linearRampToValueAtTime(0.09 * velocity, startTime + 0.22);
  noteGain.gain.setTargetAtTime(0.056 * velocity, startTime + 0.46, 0.45);
  noteGain.gain.setTargetAtTime(0.0001, startTime + duration, 0.65);

  oscillators.forEach((config) => {
    const oscillator = audioContext.createOscillator();
    const oscillatorGain = audioContext.createGain();

    oscillator.type = config.type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    oscillator.detune.setValueAtTime(config.detune, startTime);
    oscillatorGain.gain.value = config.gain;
    oscillator.connect(oscillatorGain);
    oscillatorGain.connect(filter);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 1.55);
  });

  filter.connect(noteGain);
  noteGain.connect(destination);
}

function getChipCurve() {
  if (chipCurve) {
    return chipCurve;
  }

  const samples = 256;
  chipCurve = new Float32Array(samples);

  for (let index = 0; index < samples; index += 1) {
    const x = (index * 2) / samples - 1;
    chipCurve[index] = Math.round(Math.tanh(x * 3.8) * 5) / 5;
  }

  return chipCurve;
}

function playChiptuneNote(frequency, startTime, duration = 0.75, destination = audioContext.destination, velocity = 1) {
  const oscillator = audioContext.createOscillator();
  const shaper = audioContext.createWaveShaper();
  const filter = audioContext.createBiquadFilter();
  const noteGain = audioContext.createGain();
  const peak = 0.1 * velocity;

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(frequency, startTime);

  shaper.curve = getChipCurve();
  shaper.oversample = "none";

  filter.type = "bandpass";
  filter.Q.setValueAtTime(6.5, startTime);
  filter.frequency.setValueAtTime(clampAudioValue(frequency * 2.55, 520, 3800), startTime);

  noteGain.gain.setValueAtTime(0.0001, startTime);
  noteGain.gain.exponentialRampToValueAtTime(peak, startTime + 0.012);
  noteGain.gain.exponentialRampToValueAtTime(peak * 0.36, startTime + 0.09);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(shaper);
  shaper.connect(filter);
  filter.connect(noteGain);
  noteGain.connect(destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.06);
}

function playGrandPianoFallbackChord(frequencies, startTime, duration, destination) {
  const output = audioContext.createGain();

  output.gain.setValueAtTime(0.0001, startTime);
  output.gain.exponentialRampToValueAtTime(0.12, startTime + 0.03);
  output.gain.exponentialRampToValueAtTime(0.085, startTime + 0.55);
  output.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  output.connect(destination);

  frequencies.forEach((frequency) => {
    const oscillator = audioContext.createOscillator();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    oscillator.connect(output);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.08);
  });
}

function playNativeChordSound(frequencies, startTime, duration, destination, mode = getSelectedSoundMode()) {
  if (mode === "synth") {
    const padBus = createPadReverbBus(destination);
    frequencies.forEach((frequency) => {
      playPadNote(frequency, startTime, duration, padBus, 0.88);
    });
    return;
  }

  if (mode === "chiptune") {
    frequencies.forEach((frequency) => {
      playChiptuneNote(frequency, startTime, Math.min(duration, 0.92), destination, 0.82);
    });
    return;
  }

  playGrandPianoFallbackChord(frequencies, startTime, duration, destination);
}

function playNativeSingleNote(frequency, startTime, duration, destination, mode = getSelectedSoundMode()) {
  if (mode === "synth") {
    playPadNote(frequency, startTime, duration, createPadReverbBus(destination), 0.92);
    return;
  }

  if (mode === "chiptune") {
    playChiptuneNote(frequency, startTime, Math.min(duration, 0.82), destination, 0.92);
    return;
  }

  playSynthNote(frequency, startTime, duration, destination);
}

function playChord(notes, card, { includeNoteSequence = true, keepLoop = false } = {}) {
  const playbackOutput = startNewPlayback({ keepLoop });
  const noteNames = chordNoteNames(notes);
  const soundMode = getSelectedSoundMode();
  scheduleChordKeyboardPlayback(card, notes, includeNoteSequence);

  if (shouldUsePianoSampler()) {
    Tone.start();

    schedulePlayback(() => {
      pianoSampler.triggerAttackRelease(noteNames, chordDuration, undefined, 0.75);
    }, startDelay);

    if (includeNoteSequence) {
      noteNames.forEach((noteName, index) => {
        schedulePlayback(() => {
          pianoSampler.triggerAttackRelease(noteName, chordNoteDuration, undefined, 0.78);
        }, startDelay + chordNoteStartOffset + index * chordNoteSpacing);
      });
    }

    return;
  }

  const now = audioContext.currentTime + startDelay;
  const frequencies = chordFrequencies(notes);
  const noteStart = audioContext.currentTime + startDelay + chordNoteStartOffset;
  playNativeChordSound(frequencies, now, chordDuration, playbackOutput, soundMode);

  if (includeNoteSequence) {
    frequencies.forEach((frequency, index) => {
      playNativeSingleNote(frequency, noteStart + index * chordNoteSpacing, chordNoteDuration, playbackOutput, soundMode);
    });
  }
}

function setLoopButtonState(button, isLooping) {
  button?.setAttribute("aria-pressed", String(isLooping));
  button?.classList.toggle("is-looping", isLooping);
}

function startChordLoop(notes, card, button) {
  if (activeLoop?.button === button) {
    stopActiveLoop();
    startNewPlayback();
    return;
  }

  stopActiveLoop();
  activeLoop = { button, timerId: null };
  setLoopButtonState(button, true);

  const runLoop = () => {
    if (activeLoop?.button !== button) {
      return;
    }

    playChord(notes, card, { includeNoteSequence: false, keepLoop: true });
    activeLoop.timerId = window.setTimeout(runLoop, chordPlaybackDuration(notes.length, false) * 1000);
  };

  runLoop();
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
  const content = item.querySelector(".progression-content") || item.querySelector(":scope > div") || item;

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

function setProgressionAnimationChord(animation, index, { isPlaying = false } = {}) {
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
  keyboard.replaceChildren(createKeyboard(notes, false, isPlaying));
  animation.classList.toggle("is-active", isPlaying);
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
      setProgressionAnimationChord(animation, index, { isPlaying: true });
    }, startDelay + index * progressionChordSpacing);

    schedulePlayback(() => {
      if (Number(animation.dataset.activeIndex) === index) {
        setProgressionAnimationChord(animation, index);
      }
    }, startDelay + index * progressionChordSpacing + progressionChordDuration);
  });

  schedulePlayback(() => {
    animation.classList.remove("is-active");
    setProgressionAnimationChord(animation, 0);
    item.classList.remove("is-playing");
  }, startDelay + chordSymbols.length * progressionChordSpacing + 0.2);
}

function progressionPlaybackDuration(chordSymbols) {
  return startDelay + Math.max(chordSymbols.length - 1, 0) * progressionChordSpacing + progressionChordDuration + 0.35;
}

function playProgression(chordSymbols, item, { keepLoop = false } = {}) {
  const playbackOutput = startNewPlayback({ keepLoop });
  const soundMode = getSelectedSoundMode();
  scheduleProgressionAnimation(item, chordSymbols);

  if (shouldUsePianoSampler()) {
    Tone.start();

    chordSymbols.forEach((symbol, index) => {
      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(chordNoteNamesFromSymbol(symbol), progressionChordDuration, undefined, 0.82);
      }, startDelay + index * progressionChordSpacing);
    });

    return progressionPlaybackDuration(chordSymbols);
  }

  const now = audioContext.currentTime + startDelay;

  chordSymbols.forEach((symbol, index) => {
    const startTime = now + index * progressionChordSpacing;
    const chordFrequencies = frequenciesFromChordSymbol(symbol);

    playNativeChordSound(chordFrequencies, startTime, progressionChordDuration, playbackOutput, soundMode);
  });
  return progressionPlaybackDuration(chordSymbols);
}

function startProgressionLoop(chordSymbols, item, button) {
  if (activeLoop?.button === button) {
    stopActiveLoop();
    startNewPlayback();
    return;
  }

  stopActiveLoop();
  activeLoop = { button, timerId: null };
  setLoopButtonState(button, true);

  const runLoop = () => {
    if (activeLoop?.button !== button) {
      return;
    }

    const duration = playProgression(chordSymbols, item, { keepLoop: true });
    activeLoop.timerId = window.setTimeout(runLoop, duration * 1000);
  };

  runLoop();
}

function createRepeatButton(label) {
  const button = document.createElement("button");
  button.className = "repeat-button";
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.setAttribute("aria-pressed", "false");

  const icon = document.createElement("span");
  icon.className = "repeat-icon";
  icon.setAttribute("aria-hidden", "true");
  button.appendChild(icon);

  return button;
}

function ensureChordRepeatButton(card) {
  const playButton = card.querySelector(".play-button");
  const controls = card.querySelector(".card-title, .piano-card-header");

  if (!playButton || !controls) {
    return null;
  }

  let button = card.querySelector(".chord-repeat");

  if (!button) {
    button = createRepeatButton("Loop chord");
    button.classList.add("chord-repeat");
    playButton.after(button);
  }

  if (!button.dataset.loopReady) {
    button.addEventListener("click", () => startChordLoop(chordCardNotes(card), card, button));
    button.dataset.loopReady = "true";
  }

  return button;
}

function ensureProgressionRepeatButton(item, chordSymbols) {
  const playButton = item.querySelector(".progression-play");

  if (!playButton) {
    return null;
  }

  let button = item.querySelector(".progression-repeat");

  if (!button) {
    button = createRepeatButton("Loop progression");
    button.classList.add("progression-repeat");
    playButton.after(button);
  }

  if (!button.dataset.loopReady) {
    button.addEventListener("click", () => startProgressionLoop(chordSymbols, item, button));
    button.dataset.loopReady = "true";
  }

  return button;
}

function displayChordNotesInline(notes, separator = " - ") {
  return notes.map(displayNoteName).join(separator);
}

function chordAboutText(chordNameText, notes, quality) {
  const info = chordQualityInfo(quality);
  const noteList = displayChordNotesInline(notes, ", ");

  return `${chordNameText} uses ${noteList}. ${info.description}`;
}

function renderRelatedChords(card, root, quality) {
  const list = card.querySelector("[data-related-chords]");
  const relatedChordsPerPage = 4;

  if (!list) {
    return;
  }

  const currentQuality = normalizeChordQuality(quality);
  const priority = chordQualityInfo(currentQuality).related || [];
  const relatedQualities = [
    ...priority,
    ...Object.keys(chordQualityCatalog).filter((relatedQuality) => relatedQuality !== currentQuality),
  ].filter((relatedQuality, index, qualities) => qualities.indexOf(relatedQuality) === index);
  const relatedStateKey = `${root}:${currentQuality}`;
  const isSameRelatedChord = card.dataset.relatedStateKey === relatedStateKey;
  const pageCount = Math.max(Math.ceil(relatedQualities.length / relatedChordsPerPage), 1);
  const requestedPage = isSameRelatedChord ? Number.parseInt(card.dataset.relatedPage || "0", 10) : 0;
  const relatedPage = Math.min(Math.max(Number.isNaN(requestedPage) ? 0 : requestedPage, 0), pageCount - 1);
  const visibleRelatedQualities = relatedQualities.slice(
    relatedPage * relatedChordsPerPage,
    relatedPage * relatedChordsPerPage + relatedChordsPerPage
  );
  const previousButton = card.querySelector("[data-related-prev]");
  const nextButton = card.querySelector("[data-related-next]");
  const pageCounter = card.querySelector("[data-related-page-counter]");

  card.dataset.relatedStateKey = relatedStateKey;
  card.dataset.relatedPage = String(relatedPage);
  list.replaceChildren();

  visibleRelatedQualities.forEach((relatedQuality) => {
    const info = chordQualityInfo(relatedQuality);
    const item = document.createElement("li");
    const content = document.createElement("div");
    const title = document.createElement("span");
    const formula = document.createElement("span");
    const button = document.createElement("button");

    title.textContent = chordName(root, relatedQuality);
    formula.textContent = info.formula.join(" \u2022 ");
    button.type = "button";
    button.textContent = "";
    button.dataset.relatedChordType = relatedQuality;
    button.setAttribute("aria-label", `Open ${title.textContent}`);
    button.addEventListener("click", () => {
      const page = dynamicChordPageForElement(card);
      const url = new URL(window.location.href);

      url.searchParams.set("root", selectedChordRootName(root));
      url.searchParams.set("type", relatedQuality);
      window.history.replaceState({}, "", url);
      setDynamicChordQuality(relatedQuality, page);
    });

    content.append(title, formula);
    item.append(content, button);
    list.appendChild(item);
  });

  if (pageCounter) {
    pageCounter.textContent = `${relatedPage + 1}/${pageCount}`;
  }

  if (previousButton) {
    previousButton.disabled = pageCount <= 1 || relatedPage === 0;
    previousButton.hidden = pageCount <= 1;

    if (!previousButton.dataset.relatedCarouselReady) {
      previousButton.addEventListener("click", () => {
        const currentPage = Number.parseInt(card.dataset.relatedPage || "0", 10);
        card.dataset.relatedPage = String(Math.max((Number.isNaN(currentPage) ? 0 : currentPage) - 1, 0));
        renderRelatedChords(card, card.dataset.root, card.dataset.quality);
      });
      previousButton.dataset.relatedCarouselReady = "true";
    }
  }

  if (nextButton) {
    nextButton.disabled = pageCount <= 1 || relatedPage >= pageCount - 1;
    nextButton.hidden = pageCount <= 1;

    if (!nextButton.dataset.relatedCarouselReady) {
      nextButton.addEventListener("click", () => {
        const currentPage = Number.parseInt(card.dataset.relatedPage || "0", 10);
        card.dataset.relatedPage = String(Math.min((Number.isNaN(currentPage) ? 0 : currentPage) + 1, pageCount - 1));
        renderRelatedChords(card, card.dataset.root, card.dataset.quality);
      });
      nextButton.dataset.relatedCarouselReady = "true";
    }
  }
}

function updateChordCardText(card) {
  const notes = card.dataset.notes.split(",");
  const quality = normalizeChordQuality(card.dataset.quality);
  const info = chordQualityInfo(quality);
  const title = card.querySelector("[data-dynamic-chord-title]") || card.querySelector("h2, h3");
  const noteText = card.querySelector("[data-dynamic-chord-notes]") || card.querySelector("p");
  const keyboard = card.querySelector(".keyboard");
  const button = card.querySelector(".play-button");
  const loopButton = ensureChordRepeatButton(card);
  const displayedChordName = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayTitle
    : card.dataset.root && card.dataset.quality
      ? chordTitleForCard(card)
      : displayNotes(notes);
  const displayedNotes = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayNotes
    : displayNotes(notes);
  const displayedNotesInline = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayNotes
    : displayChordNotesInline(notes, " \u2022 ");
  const formulaText = info.formula.join(" \u2022 ");
  const symbolText = card.dataset.root ? displayChordSymbolForRoot(card.dataset.root, quality) : "";

  if (title && card.dataset.root && card.dataset.quality) {
    title.textContent = displayedChordName;
  }

  card.querySelectorAll("[data-dynamic-chord-symbol]").forEach((element) => {
    element.textContent = symbolText;
  });

  card.querySelectorAll("[data-dynamic-chord-formula]").forEach((element) => {
    element.textContent = formulaText;
  });

  card.querySelectorAll("[data-dynamic-chord-notes-inline]").forEach((element) => {
    element.textContent = displayedNotesInline;
  });

  card.querySelectorAll("[data-dynamic-chord-about-title]").forEach((element) => {
    element.textContent = `About ${displayedChordName}`;
  });

  card.querySelectorAll("[data-dynamic-chord-about]").forEach((element) => {
    element.textContent = chordAboutText(displayedChordName, notes, quality);
  });

  if (noteText && !noteText.hasAttribute("data-dynamic-chord-notes-inline")) {
    noteText.textContent = `${card.hasAttribute("data-dynamic-major-card") ? "Chord" : "Notes"}: ${displayedNotes}`;
  }

  if (button && card.dataset.root && card.dataset.quality) {
    button.setAttribute("aria-label", `Play ${displayedChordName} chord`);
  }

  if (loopButton && card.dataset.root && card.dataset.quality) {
    loopButton.setAttribute("aria-label", `Loop ${displayedChordName} chord`);
  }

  if (card.closest("[data-dynamic-chord-page], [data-major-chord-page]") && card.dataset.root && card.dataset.quality) {
    document.title = `${displayedChordName} - Chords Bible`;
  }

  if (keyboard) {
    keyboard.setAttribute("aria-label", `Piano keys for ${displayedChordName}`);
    renderChordCardKeyboard(card, notes);
  }

  if (card.dataset.root) {
    renderRelatedChords(card, card.dataset.root, quality);
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
    button.addEventListener("click", () => playChord(chordCardNotes(card), card));
    card.dataset.playReady = "true";
  }

  updateChordCardText(card);
}

function setPianoOctaveMode(card, button, octaveCount) {
  const visibleOctaves = octaveCount === 2 ? 2 : 1;

  card.dataset.octaves = String(visibleOctaves);
  card.classList.toggle("is-two-octaves", visibleOctaves === 2);
  button.textContent = visibleOctaves === 2 ? "-" : "+";
  button.setAttribute("aria-pressed", String(visibleOctaves === 2));
  button.setAttribute(
    "aria-label",
    visibleOctaves === 2 ? "Show one octave piano" : "Show two octave piano"
  );
  renderChordCardKeyboard(card);
}

function initializePianoOctaveToggle() {
  document.querySelectorAll("[data-octave-toggle]").forEach((button) => {
    const card = button.closest("[data-dynamic-chord-card], [data-major-chord-card]");

    if (!card || button.dataset.octaveToggleReady) {
      return;
    }

    setPianoOctaveMode(card, button, card.dataset.octaves === "2" ? 2 : 1);
    button.addEventListener("click", () => {
      setPianoOctaveMode(card, button, card.dataset.octaves === "2" ? 1 : 2);
    });
    button.dataset.octaveToggleReady = "true";
  });
}

function initializeChordCards() {
  document.querySelectorAll(".card[data-notes], [data-dynamic-chord-card][data-notes], [data-major-chord-card][data-notes]").forEach(initializeChordCard);
}

function initializeProgressions() {
  document.querySelectorAll(".progressions li[data-progression]").forEach((item) => {
    const button = item.querySelector(".progression-play");
    const chordSymbols = item.dataset.progression.split(",");
    const loopButton = ensureProgressionRepeatButton(item, chordSymbols);
    ensureProgressionAnimation(item, chordSymbols);

    if (loopButton) {
      loopButton.setAttribute("aria-label", `Loop ${item.dataset.roman || "progression"} progression`);
    }

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
  return normalizeChordQuality(page?.dataset.chordQuality || "Major");
}

function getDynamicChordCard(page = dynamicChordPageForElement()) {
  return page?.querySelector("[data-dynamic-chord-card], [data-major-chord-card]");
}

function getChordPageCategory(page) {
  return normalizeChordCategory(page?.dataset.chordCategory || chordCategoryForQuality(getChordPageQuality(page)));
}

function updateChordCategoryButtons(page = dynamicChordPageForElement()) {
  if (!page) {
    return;
  }

  const activeCategory = getChordPageCategory(page);

  page.querySelectorAll("[data-chord-category]").forEach((button) => {
    const category = normalizeChordCategory(button.dataset.chordCategory);
    const isActive = category === activeCategory;

    button.dataset.chordCategory = category;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });
}

function renderChordTypeOptions(page = dynamicChordPageForElement()) {
  const menu = page?.querySelector("[data-chord-quality-menu]");

  if (!menu) {
    return;
  }

  const activeCategory = getChordPageCategory(page);

  if (menu.dataset.renderedChordCategory === activeCategory && menu.children.length) {
    return;
  }

  menu.dataset.renderedChordCategory = activeCategory;
  menu.replaceChildren();

  chordQualityCategories[activeCategory].qualities.forEach((quality) => {
    const info = chordQualityInfo(quality);
    const button = document.createElement("button");

    button.type = "button";
    button.dataset.chordQualityOption = normalizeChordQuality(quality);
    button.setAttribute("aria-pressed", "false");
    button.textContent = info.label;
    button.addEventListener("click", () => {
      const nextQuality = normalizeChordQuality(button.dataset.chordQualityOption);
      const url = new URL(window.location.href);

      url.searchParams.set("type", nextQuality);
      window.history.replaceState({}, "", url);
      setDynamicChordQuality(nextQuality, page);
    });

    menu.appendChild(button);
  });
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

function updateChordTypeButtons(page = dynamicChordPageForElement()) {
  if (!page) {
    return;
  }

  renderChordTypeOptions(page);
  const activeQuality = getChordPageQuality(page);

  page.querySelectorAll("[data-chord-quality-option]").forEach((button) => {
    const quality = normalizeChordQuality(button.dataset.chordQualityOption);
    const isActive = quality === activeQuality;

    button.dataset.chordQualityOption = quality;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });

  updateChordCategoryButtons(page);
}

function setDynamicChordRoot(root, page = dynamicChordPageForElement()) {
  const card = getDynamicChordCard(page);

  if (!card) {
    return;
  }

  stopActiveLoop();
  const quality = getChordPageQuality(page);
  const chord = getChordForRoot(root, quality);
  card.dataset.root = chord.root;
  card.dataset.quality = chord.quality;
  card.dataset.notes = chord.notes.join(",");
  page.dataset.chordQuality = chord.quality;
  document.title = `${chordName(chord.root, chord.quality)} - Chords Bible`;

  page.querySelectorAll("[data-chord-root]").forEach((button) => {
    const isActive = normalizeValue(noteValues[button.dataset.chordRoot]) === normalizeValue(noteValues[root]);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });

  updateChordTypeButtons(page);
  updateChordCardText(card);
}

function setMajorChordRoot(root) {
  setDynamicChordRoot(root);
}

function setDynamicChordCategory(category, page = dynamicChordPageForElement()) {
  if (!page) {
    return;
  }

  const normalizedCategory = normalizeChordCategory(category);
  const categoryQualities = chordQualityCategories[normalizedCategory].qualities;
  const currentQuality = getChordPageQuality(page);
  const nextQuality = categoryQualities.includes(currentQuality) ? currentQuality : categoryQualities[0];
  const url = new URL(window.location.href);

  page.dataset.chordCategory = normalizedCategory;
  renderChordTypeOptions(page);
  updateChordCategoryButtons(page);
  url.searchParams.set("type", nextQuality);
  window.history.replaceState({}, "", url);
  setDynamicChordQuality(nextQuality, page);
}

function setDynamicChordQuality(quality, page = dynamicChordPageForElement()) {
  const card = getDynamicChordCard(page);
  const normalizedQuality = normalizeChordQuality(quality);
  const root = card?.dataset.root || page?.dataset.fallbackRoot || "C";

  if (!page) {
    return;
  }

  page.dataset.chordCategory = chordCategoryForQuality(normalizedQuality);
  page.dataset.chordQuality = normalizedQuality;
  renderChordTypeOptions(page);
  updateChordCategoryButtons(page);
  setDynamicChordRoot(root, page);
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
  const hasChordTypeSelector = Boolean(page.querySelector("[data-chord-quality-menu]"));
  const initialQuality = normalizeChordQuality(
    (hasChordTypeSelector ? params.get("type") : null) || page.dataset.chordQuality || "Major"
  );

  page.dataset.chordQuality = initialQuality;
  page.dataset.chordCategory = chordCategoryForQuality(initialQuality);

  page.querySelectorAll("[data-chord-root]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextRoot = button.dataset.chordRoot;
      const url = new URL(window.location.href);
      url.searchParams.set("root", selectedChordRootName(nextRoot));
      window.history.replaceState({}, "", url);
      setDynamicChordRoot(nextRoot, page);
    });
  });

  page.querySelectorAll("[data-chord-category]").forEach((button) => {
    button.addEventListener("click", () => {
      setDynamicChordCategory(button.dataset.chordCategory, page);
    });
  });

  updateChordRootButtons();
  renderChordTypeOptions(page);
  updateChordTypeButtons(page);
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
  updateChordTypeButtons();
  document.querySelectorAll(".card[data-notes]").forEach(updateChordCardText);
  document.querySelectorAll("[data-dynamic-chord-card][data-notes], [data-major-chord-card][data-notes]").forEach(updateChordCardText);
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

function initializeHeaderMenus() {
  document.querySelectorAll("[data-header-nav]").forEach((select) => {
    select.addEventListener("change", () => {
      if (!select.value) {
        select.selectedIndex = 0;
        return;
      }

      window.location.href = select.value;
    });
  });
}

function initializeInstrumentSwitchers() {
  document.querySelectorAll("[data-instrument-switcher]").forEach((switcher) => {
    const toggle = switcher.querySelector("[data-instrument-toggle]");
    const menu = switcher.querySelector("[data-instrument-menu]");

    if (!toggle || !menu) {
      return;
    }

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      menu.hidden = !isOpen;
    };

    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(menu.hidden);
    });

    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
      if (!switcher.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  });
}

function initializePianoValleyTheme() {
  const page = document.querySelector('[data-page="piano-valley"]');
  const themeMenu = page?.querySelector("#theme-menu");

  if (!page || !themeMenu) {
    return;
  }

  const themeOptions = Array.from(themeMenu.options);
  const availableThemes = themeOptions
    .filter((option) => !option.disabled && option.value)
    .map((option) => option.value);

  const isAvailableTheme = (theme) => availableThemes.includes(theme);
  let storedTheme = "";

  try {
    storedTheme = localStorage.getItem(pianoValleyThemeStorageKey) || "";
  } catch (error) {
    storedTheme = "";
  }

  const initialTheme = isAvailableTheme(storedTheme) ? storedTheme : "dark";

  page.dataset.theme = initialTheme;
  themeMenu.value = initialTheme;

  themeMenu.addEventListener("change", () => {
    const nextTheme = isAvailableTheme(themeMenu.value) ? themeMenu.value : "dark";

    page.dataset.theme = nextTheme;
    themeMenu.value = nextTheme;

    try {
      localStorage.setItem(pianoValleyThemeStorageKey, nextTheme);
    } catch (error) {
      // Theme selection still works for this session if storage is unavailable.
    }
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
    content.className = "progression-content";
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
    content.className = "progression-content";
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
initializeHeaderMenus();
initializeInstrumentSwitchers();
initializeSoundSelector();
initializePianoValleyTheme();
initializeNotationToggle();
initializeMajorChordPage();
initializeMajorKeyPage();
initializeDynamicMajorPage();
initializePianoOctaveToggle();
initializeChordCards();
initializeProgressions();
updateNotation();
