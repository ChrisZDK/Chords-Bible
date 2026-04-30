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
      roman: "I - V - vi - IV",
      degrees: [0, 4, 5, 3],
    },
    {
      roman: "vi - IV - I - V",
      degrees: [5, 3, 0, 4],
    },
    {
      roman: "I - vi - IV - V",
      degrees: [0, 5, 3, 4],
    },
    {
      roman: "I - IV - V",
      degrees: [0, 3, 4],
    },
    {
      roman: "ii - V - I",
      degrees: [1, 4, 0],
    },
    {
      roman: "I - IV - I - V",
      degrees: [0, 3, 0, 4],
    },
    {
      roman: "I - ii - V - I",
      degrees: [0, 1, 4, 0],
    },
    {
      roman: "I - V - IV - I",
      degrees: [0, 4, 3, 0],
    },
  ],
  uncommon: [
    {
      roman: "I - iii - IV - iv - V - I",
      degrees: [0, 2, 3, { degree: 3, quality: "Minor" }, 4, 0],
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
    {
      roman: "I - IV - iv - I",
      degrees: [0, 3, { degree: 3, quality: "Minor" }, 0],
    },
    {
      roman: "I - bII - IV - I",
      degrees: [0, { rootOffset: 1, quality: "Major" }, 3, 0],
    },
    {
      roman: "I - bIII - IV - I",
      degrees: [0, { rootOffset: 3, quality: "Major" }, 3, 0],
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
let homeProgressionSongFitFrame = 0;
const homeProgressionsPerPage = 4;
const homeProgressionState = {
  mode: "chords",
  key: "C",
  root: "C",
  scaleMode: "major",
  formulaId: "pop-axis",
  steps: [0, 4, 5, 3],
  selectedStepIndex: 0,
  chordMode: "triads",
  selectedIndex: 0,
  page: 0,
  octaveCount: 1,
  chordSnapshot: null,
};
const homeProgressionFormulas = [
  { id: "pop-axis", label: "I - V - vi - IV", degrees: [0, 4, 5, 3] },
  { id: "jazz-cadence", label: "ii - V - I", degrees: [1, 4, 0] },
  { id: "sensitive-axis", label: "vi - IV - I - V", degrees: [5, 3, 0, 4] },
  { id: "primary", label: "I - IV - V", degrees: [0, 3, 4] },
  { id: "fifties", label: "I - vi - IV - V", degrees: [0, 5, 3, 4] },
  { id: "cinematic", label: "I - iii - vi - IV", degrees: [0, 2, 5, 3] },
  { id: "lift", label: "ii - vi - I - V", degrees: [1, 5, 0, 4] },
  { id: "falling", label: "I - V - iii - vi", degrees: [0, 4, 2, 5] },
  { id: "bright-step", label: "I - ii - IV - V", degrees: [0, 1, 3, 4] },
  { id: "plagal-step", label: "I - IV - ii - V", degrees: [0, 3, 1, 4] },
  { id: "minor-fall", label: "vi - iii - IV - I", degrees: [5, 2, 3, 0] },
  { id: "cycle", label: "iii - vi - ii - V", degrees: [2, 5, 1, 4] },
];
const homeProgressionSongExamples = {
  "I - V - vi - IV": ["Let It Be", "With or Without You", "No Woman, No Cry"],
  "ii - V - I": ["Autumn Leaves", "Fly Me to the Moon", "Satin Doll"],
  "vi - IV - I - V": ["Apologize", "Counting Stars"],
  "I - vi - IV - V": ["Stand by Me", "Blue Moon", "Earth Angel"],
  "I - IV - V": ["La Bamba", "Wild Thing", "Twist and Shout"],
  "I - iii - vi - IV": ["Don't Stop Believin'", "Basket Case"],
  "I - V - iii - vi": ["Someone Like You", "A Thousand Years"],
  "iii - vi - ii - V": ["All the Things You Are", "I Got Rhythm"],
  "I - IV - I - V": ["Brown Eyed Girl", "Goodbye Earl", "American Pie"],
  "I - V - IV - I": ["Free Fallin'", "Three Little Birds", "Bad Moon Rising"],
  "I - iii - IV - iv - V - I": ["Creep", "Space Oddity"],
};
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
  const parsed = parseChordSymbol(symbol);

  if (!parsed) {
    return symbol;
  }

  return `${displayNoteName(parsed.root)}${qualitySuffix(parsed.quality)}`;
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

function parseChordSymbol(symbol) {
  const match = symbol.trim().match(/^([A-G](?:#|b)?)(.*)$/);

  if (!match) {
    return null;
  }

  const [, rawRoot, suffix] = match;
  const root = normalizeNote(rawRoot);
  const quality = Object.keys(chordQualityCatalog).find((catalogQuality) => {
    return qualitySuffix(catalogQuality) === suffix;
  });

  if (!quality || !Number.isInteger(noteValues[root])) {
    return null;
  }

  return { root, quality };
}

function chordNoteNamesFromSymbol(symbol) {
  const parsed = parseChordSymbol(symbol);

  if (!parsed) {
    return [];
  }

  const rootValue = noteValues[parsed.root];
  const midiNumbers = chordIntervalsForQuality(parsed.quality).map((interval) => 60 + rootValue + interval);

  return midiNumbers.map((midiNumber) => {
    const noteName = sharpNames[midiNumber % 12];
    const octave = Math.floor(midiNumber / 12) - 1;

    return `${noteName}${octave}`;
  });
}

function chordNotesFromSymbol(symbol) {
  const parsed = parseChordSymbol(symbol);

  if (!parsed) {
    return [];
  }

  return chordNotesFromRoot(noteValues[parsed.root], chordIntervalsForQuality(parsed.quality));
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
  animation.closest(".piano-card")?.querySelectorAll("[data-home-progression-step-label]").forEach((element) => {
    element.textContent = label.textContent;
  });
  keyboard.className = "progression-keyboard";
  keyboard.setAttribute("aria-hidden", "true");
  keyboard.replaceChildren(createKeyboard(notes, false, isPlaying, Number(animation.dataset.octaves) === 2 ? 2 : 1));
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
  const relatedChordsPerPage = relatedChordsPerPageForViewport();

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
        card.dataset.relatedPage = String((Number.isNaN(currentPage) ? 0 : currentPage) + 1);
        renderRelatedChords(card, card.dataset.root, card.dataset.quality);
      });
      nextButton.dataset.relatedCarouselReady = "true";
    }
  }
}

function relatedChordsPerPageForViewport() {
  return window.matchMedia("(max-width: 767px)").matches ? 1 : 4;
}

function refreshRelatedChordsForViewport() {
  document.querySelectorAll("[data-related-chords]").forEach((list) => {
    const card = list.closest("[data-major-chord-card], [data-dynamic-chord-card]");

    if (card?.dataset.root && card.dataset.quality) {
      renderRelatedChords(card, card.dataset.root, card.dataset.quality);
    }
  });
}

function initializeRelatedChordsViewportWatcher() {
  const phoneQuery = window.matchMedia("(max-width: 767px)");
  const handleViewportChange = () => refreshRelatedChordsForViewport();

  if (typeof phoneQuery.addEventListener === "function") {
    phoneQuery.addEventListener("change", handleViewportChange);
    return;
  }

  phoneQuery.addListener(handleViewportChange);
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
    document.title = `${displayedChordName} - Chordyssey`;
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
  button.textContent = visibleOctaves === 2 ? "-OCT" : "+OCT";
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
  document.title = `${chordName(chord.root, chord.quality)} - Chordyssey`;

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
      if (select.id === "piano-area-menu" && isHomeDashboardPage()) {
        if (select.value === "chords" || select.value === "progressions") {
          setHomepagePianoAreaMode(select.value);
          return;
        }

        select.value = homeProgressionState.mode;
        return;
      }

      if (!select.value) {
        select.selectedIndex = 0;
        return;
      }

      window.location.href = select.value;
    });
  });
}

function initializeHeaderDropdownMenus() {
  document.querySelectorAll("#instrument-family-menu, #piano-area-menu, #theme-menu").forEach((select) => {
    if (select.dataset.headerDropdownReady) {
      return;
    }

    const menu = document.createElement("div");
    const button = document.createElement("button");
    const value = document.createElement("span");
    const chevron = document.createElement("span");
    const options = document.createElement("div");
    const optionsId = `${select.id}-options`;

    menu.className = "header-menu";
    menu.dataset.headerMenu = "";
    menu.dataset.headerMenuFor = select.id;

    button.className = "header-control header-select header-menu-button";

    if (select.classList.contains("instrument-family-select")) {
      button.classList.add("instrument-family-select");
    }
    button.type = "button";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", optionsId);
    button.setAttribute("aria-label", select.getAttribute("aria-label") || select.id);
    button.dataset.headerMenuButton = "";
    button.dataset.headerMenuFor = select.id;

    if (select.id === "piano-area-menu") {
      button.setAttribute("aria-label", "Piano area options");
    }

    if (select.id === "theme-menu") {
      button.setAttribute("aria-label", "Theme options");
    }

    value.dataset.headerMenuValue = "";
    chevron.className = "header-menu-chevron";
    chevron.setAttribute("aria-hidden", "true");
    button.append(value, chevron);

    options.className = "header-options";
    options.id = optionsId;
    options.role = "listbox";
    options.hidden = true;
    options.dataset.headerOptions = "";

    const optionButtons = Array.from(select.options).map((selectOption) => {
      const option = document.createElement("button");

      option.className = "header-option";
      option.type = "button";
      option.role = "option";
      option.textContent = selectOption.textContent;
      option.disabled = selectOption.disabled;
      option.dataset.headerOption = "";
      option.dataset.value = selectOption.value;
      options.appendChild(option);

      return option;
    });
    const mobileIconMenuQuery = window.matchMedia("(max-width: 767px)");
    const shouldSizeOptionsToContent = () => (
      mobileIconMenuQuery.matches && (select.id === "piano-area-menu" || select.id === "theme-menu")
    );
    const measureOptionsWidth = (fallbackWidth) => {
      if (!shouldSizeOptionsToContent()) {
        return fallbackWidth;
      }

      const viewportMargin = 12;
      const maxMenuWidth = Math.max(window.innerWidth - viewportMargin * 2, fallbackWidth);
      const measuringOptions = options.cloneNode(true);

      measuringOptions.id = "";
      measuringOptions.hidden = false;
      measuringOptions.style.position = "fixed";
      measuringOptions.style.left = "0";
      measuringOptions.style.top = "0";
      measuringOptions.style.visibility = "hidden";
      measuringOptions.style.pointerEvents = "none";
      measuringOptions.style.width = "max-content";
      measuringOptions.style.maxWidth = `${maxMenuWidth}px`;
      document.body.appendChild(measuringOptions);

      const measuredWidth = Math.ceil(measuringOptions.getBoundingClientRect().width);

      measuringOptions.remove();

      return Math.min(Math.max(fallbackWidth, measuredWidth), maxMenuWidth);
    };

    const updateMenu = () => {
      const selectedOption = select.options[select.selectedIndex] || select.options[0];

      value.textContent = selectedOption?.textContent || "";
      optionButtons.forEach((option, index) => {
        const isSelected = index === select.selectedIndex;

        option.classList.toggle("is-selected", isSelected);
        option.setAttribute("aria-selected", String(isSelected));
      });
    };

    const closeMenu = () => {
      button.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      options.hidden = true;
    };

    const focusSelectedOption = () => {
      const selectedOption = optionButtons[select.selectedIndex] || optionButtons.find((option) => !option.disabled);

      selectedOption?.focus();
    };

    const openMenu = () => {
      const rect = button.getBoundingClientRect();
      const viewportMargin = 12;
      const menuWidth = measureOptionsWidth(rect.width);
      const menuLeft = Math.min(
        Math.max(rect.left, viewportMargin),
        Math.max(window.innerWidth - menuWidth - viewportMargin, viewportMargin)
      );
      const menuTop = Math.max(rect.bottom + 6, 12);

      document.querySelectorAll("[data-header-options]").forEach((openOptions) => {
        if (openOptions === options) {
          return;
        }

        openOptions.hidden = true;
        document.querySelector(`[aria-controls="${openOptions.id}"]`)?.setAttribute("aria-expanded", "false");
      });

      document.querySelectorAll("[data-header-menu].is-open").forEach((openHeaderMenu) => {
        if (openHeaderMenu !== menu) {
          openHeaderMenu.classList.remove("is-open");
        }
      });

      document.querySelectorAll("[data-sound-selector].is-open").forEach(closeSoundSelector);

      options.style.setProperty("--header-menu-left", `${menuLeft}px`);
      options.style.setProperty("--header-menu-top", `${menuTop}px`);
      options.style.setProperty("--header-menu-width", `${menuWidth}px`);
      button.setAttribute("aria-expanded", "true");
      menu.classList.add("is-open");
      options.hidden = false;
    };

    const selectOption = (option, index) => {
      if (option.disabled) {
        return;
      }

      select.selectedIndex = index;
      updateMenu();
      closeMenu();
      button.focus();
      select.dispatchEvent(new Event("change", { bubbles: true }));
    };

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      if (options.hidden) {
        openMenu();
        return;
      }

      closeMenu();
    });

    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }

      event.preventDefault();
      openMenu();
      focusSelectedOption();
    });

    optionButtons.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        event.stopPropagation();
        selectOption(option, index);
      });

      option.addEventListener("keydown", (event) => {
        const enabledOptions = optionButtons.filter((menuOption) => !menuOption.disabled);
        const currentIndex = enabledOptions.indexOf(option);

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const direction = event.key === "ArrowDown" ? 1 : -1;
          const nextIndex = (currentIndex + direction + enabledOptions.length) % enabledOptions.length;

          enabledOptions[nextIndex]?.focus();
          return;
        }

        if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          enabledOptions[event.key === "Home" ? 0 : enabledOptions.length - 1]?.focus();
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectOption(option, index);
          return;
        }

        if (event.key === "Escape") {
          event.preventDefault();
          closeMenu();
          button.focus();
        }
      });
    });

    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !options.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    select.addEventListener("change", updateMenu);
    select.classList.add("header-native-select");
    select.hidden = true;
    select.setAttribute("aria-hidden", "true");
    select.tabIndex = -1;
    select.dataset.headerDropdownReady = "true";

    menu.append(button);
    document.body.appendChild(options);
    select.insertAdjacentElement("afterend", menu);
    updateMenu();
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

function isHomeDashboardPage() {
  return document.body.classList.contains("home-dashboard-page");
}

function homeProgressionElements() {
  const workspace = document.querySelector("[data-major-chord-page]");
  const displayCard = document.querySelector("[data-major-chord-card]");

  return {
    workspace,
    selectorPanel: workspace?.querySelector(".selector-panel"),
    summaryCard: workspace?.querySelector(".chord-summary-card, .progression-summary-card"),
    listCard: workspace?.querySelector(".related-chords-card, .progressions-list-card, .progression-customizer"),
    pianoCard: workspace?.querySelector(".piano-card"),
    infoCard: workspace?.querySelector(".chord-info-card"),
    displayCard,
    areaMenu: document.querySelector("#piano-area-menu"),
  };
}

function captureHomeChordSnapshot() {
  if (homeProgressionState.chordSnapshot) {
    return;
  }

  const elements = homeProgressionElements();

  if (!elements.selectorPanel || !elements.summaryCard || !elements.listCard || !elements.pianoCard || !elements.infoCard) {
    return;
  }

  homeProgressionState.chordSnapshot = {
    selectorPanel: {
      className: elements.selectorPanel.className,
      html: elements.selectorPanel.innerHTML,
    },
    summaryCard: {
      className: elements.summaryCard.className,
      html: elements.summaryCard.innerHTML,
    },
    listCard: {
      className: elements.listCard.className,
      html: elements.listCard.innerHTML,
    },
    pianoCard: {
      className: elements.pianoCard.className,
      html: elements.pianoCard.innerHTML,
    },
    infoCard: {
      className: elements.infoCard.className,
      html: elements.infoCard.innerHTML,
    },
  };
}

function restoreHomeChordMode() {
  const elements = homeProgressionElements();
  const snapshot = homeProgressionState.chordSnapshot;

  stopActiveLoop();
  setHomepageChordModeState(elements);

  if (!snapshot || !elements.selectorPanel || !elements.summaryCard || !elements.listCard || !elements.pianoCard || !elements.infoCard) {
    return;
  }

  elements.selectorPanel.className = snapshot.selectorPanel.className;
  elements.selectorPanel.innerHTML = snapshot.selectorPanel.html;
  elements.summaryCard.className = snapshot.summaryCard.className;
  elements.summaryCard.innerHTML = snapshot.summaryCard.html;
  elements.listCard.className = snapshot.listCard.className;
  elements.listCard.innerHTML = snapshot.listCard.html;
  elements.pianoCard.className = snapshot.pianoCard.className;
  elements.pianoCard.innerHTML = snapshot.pianoCard.html;
  elements.infoCard.className = snapshot.infoCard.className;
  elements.infoCard.innerHTML = snapshot.infoCard.html;

  setHomepageChordModeState(elements);
  initializeMajorChordPage();
  initializePianoOctaveToggle();
  initializeChordCards();
  initializeNotationToggle();
  updateNotation();
}

function homeProgressionConfig() {
  return homeProgressionState.scaleMode === "minor" ? keyModeConfigs.minor : keyModeConfigs.major;
}

function homeProgressionDegreePattern() {
  return homeProgressionConfig().chordPattern;
}

function homeProgressionRootValue() {
  return noteValues[homeProgressionState.root] ?? noteValues.C;
}

function homeProgressionScaleNotes() {
  return scaleNotes(homeProgressionRootValue(), homeProgressionConfig());
}

function homeProgressionFormulaById(id = homeProgressionState.formulaId) {
  return homeProgressionFormulas.find((formula) => formula.id === id) || homeProgressionFormulas[0];
}

function homeProgressionFormulaLabel(steps = homeProgressionState.steps) {
  const pattern = homeProgressionDegreePattern();
  return steps.map((degree) => pattern[degree]?.roman || keyChordPattern[degree]?.roman || "I").join(" - ");
}

function homeProgressionMajorFormulaLabel(steps = homeProgressionState.steps) {
  return steps.map((degree) => keyChordPattern[degree]?.roman || "I").join(" - ");
}

function homeProgressionTitle() {
  return `${displayNoteName(homeProgressionState.root)} ${homeProgressionConfig().titleQuality}`;
}

function normalizeHomeProgressionState() {
  if (!Number.isInteger(noteValues[homeProgressionState.root])) {
    homeProgressionState.root = "C";
  }

  homeProgressionState.key = homeProgressionState.root;
  homeProgressionState.scaleMode = homeProgressionState.scaleMode === "minor" ? "minor" : "major";
  homeProgressionState.chordMode = homeProgressionState.chordMode === "sevenths" ? "sevenths" : "triads";

  if (!Array.isArray(homeProgressionState.steps) || homeProgressionState.steps.length < 2) {
    homeProgressionState.steps = [...homeProgressionFormulaById("pop-axis").degrees];
  }

  homeProgressionState.steps = homeProgressionState.steps
    .map((degree) => Math.min(Math.max(Number(degree) || 0, 0), 6))
    .slice(0, 8);
  homeProgressionState.selectedStepIndex = Math.min(
    Math.max(Number(homeProgressionState.selectedStepIndex) || 0, 0),
    homeProgressionState.steps.length - 1
  );
}

function homeProgressionSeventhQuality(degree) {
  const pattern = homeProgressionDegreePattern();
  const triadQuality = pattern[degree]?.quality || "Major";
  let seventhQuality = triadQuality;

  if (homeProgressionState.scaleMode === "minor") {
    seventhQuality = ["m7", "m7b5", "maj7", "m7", "m7", "maj7", "7"][degree] || triadQuality;
  } else {
    seventhQuality = ["maj7", "m7", "m7", "maj7", "7", "m7", "m7b5"][degree] || triadQuality;
  }

  return chordQualityCatalog[seventhQuality] ? seventhQuality : triadQuality;
}

function homeProgressionChordForDegree(degree) {
  const config = homeProgressionConfig();
  const pattern = config.chordPattern[degree] || config.chordPattern[0];
  const chordRootValue = scaleValues(homeProgressionRootValue(), config)[degree] ?? homeProgressionRootValue();
  const root = sharpNames[chordRootValue];
  const quality = homeProgressionState.chordMode === "sevenths" ? homeProgressionSeventhQuality(degree) : pattern.quality;

  return {
    roman: pattern.roman,
    root,
    quality,
    notes: chordNotesFromRoot(chordRootValue, chordIntervalsForQuality(quality)),
    symbol: chordSymbol(root, quality),
  };
}

function homeProgressionChords() {
  return homeProgressionState.steps.map(homeProgressionChordForDegree);
}

function homeProgressionLabels(chords) {
  return chords.map((chord) => displayChordSymbolForRoot(chord.root, chord.quality));
}

function homeProgressionSymbols(chords) {
  return chords.map((chord) => chord.symbol);
}

function setHomeProgressionSteps(steps, formulaId = "custom") {
  homeProgressionState.steps = steps.map((degree) => Math.min(Math.max(Number(degree) || 0, 0), 6)).slice(0, 8);
  homeProgressionState.formulaId = formulaId;
  homeProgressionState.selectedStepIndex = Math.min(homeProgressionState.selectedStepIndex, homeProgressionState.steps.length - 1);
}

function resetHomeProgressionDefaults() {
  const defaultFormula = homeProgressionFormulaById("pop-axis");

  stopActiveLoop();
  homeProgressionState.root = "C";
  homeProgressionState.key = "C";
  homeProgressionState.scaleMode = "major";
  homeProgressionState.formulaId = defaultFormula.id;
  homeProgressionState.steps = [...defaultFormula.degrees];
  homeProgressionState.selectedStepIndex = 0;
  homeProgressionState.chordMode = "triads";
  homeProgressionState.octaveCount = 1;
  homeProgressionState.selectedIndex = 0;
  homeProgressionState.page = 0;
}

function handleHomeProgressionUtility(action) {
  if (action === "add") {
    if (homeProgressionState.steps.length >= 8) {
      return;
    }

    stopActiveLoop();
    homeProgressionState.steps.push(homeProgressionState.steps[homeProgressionState.selectedStepIndex] ?? 0);
    homeProgressionState.selectedStepIndex = homeProgressionState.steps.length - 1;
    homeProgressionState.formulaId = "custom";
    renderHomeProgressionsMode();
    return;
  }

  if (action === "remove") {
    if (homeProgressionState.steps.length <= 2) {
      return;
    }

    stopActiveLoop();
    homeProgressionState.steps.splice(homeProgressionState.selectedStepIndex, 1);
    homeProgressionState.selectedStepIndex = Math.min(homeProgressionState.selectedStepIndex, homeProgressionState.steps.length - 1);
    homeProgressionState.formulaId = "custom";
    renderHomeProgressionsMode();
    return;
  }

  if (action === "random") {
    const length = 3 + Math.floor(Math.random() * 4);
    const randomSteps = Array.from({ length }, (_, index) => {
      if (index === 0) {
        return Math.random() > 0.35 ? 0 : 5;
      }

      return [0, 1, 2, 3, 4, 5, 6][Math.floor(Math.random() * 7)];
    });

    stopActiveLoop();
    setHomeProgressionSteps(randomSteps, "custom");
    homeProgressionState.selectedStepIndex = 0;
    renderHomeProgressionsMode();
    return;
  }

  if (action === "reset") {
    resetHomeProgressionDefaults();
    renderHomeProgressionsMode();
  }
}

function renderHomeKeySelector() {
  const { selectorPanel } = homeProgressionElements();

  if (!selectorPanel) {
    return;
  }

  selectorPanel.className = "selector-panel key-selector-panel progression-builder";
  selectorPanel.innerHTML = `
    <div class="progression-builder-main">
      <section class="progression-builder-section" aria-labelledby="progression-root-title">
        <h2 id="progression-root-title" class="selector-label">1. Choose Root Note</h2>
        <div class="root-menu root-menu-centered progression-root-grid" role="group" aria-label="Choose progression root note" data-home-progression-root-menu></div>
      </section>
      <section class="progression-builder-section" aria-labelledby="progression-formula-title">
        <h2 id="progression-formula-title" class="selector-label">3. Choose Progression</h2>
        <div class="progression-option-grid" role="group" aria-label="Choose progression formula" data-home-progression-formula-menu></div>
      </section>
    </div>
    <div class="progression-builder-side">
      <section class="progression-builder-section" aria-labelledby="progression-scale-title">
        <h2 id="progression-scale-title" class="selector-label">2. Choose Scale</h2>
        <div class="progression-scale-toggle" role="group" aria-label="Choose progression scale" data-home-progression-scale-menu></div>
      </section>
    </div>
  `;

  const rootMenu = selectorPanel.querySelector("[data-home-progression-root-menu]");
  rootSelectorNotes.forEach((root) => {
    const button = document.createElement("button");
    const isActive = root === homeProgressionState.root;

    button.type = "button";
    button.dataset.homeProgressionRoot = root;
    button.textContent = rootSelectorLabel(root).replace("/", " / ");
    button.setAttribute("aria-label", `Choose ${displayNoteName(root)} progression root`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.root = root;
      homeProgressionState.key = root;
      renderHomeProgressionsMode();
    });
    rootMenu.appendChild(button);
  });

  const scaleMenu = selectorPanel.querySelector("[data-home-progression-scale-menu]");
  [
    ["major", "Major"],
    ["minor", "Minor"],
  ].forEach(([mode, label]) => {
    const button = document.createElement("button");
    const isActive = mode === homeProgressionState.scaleMode;

    button.type = "button";
    button.dataset.homeProgressionScaleMode = mode;
    button.textContent = label;
    button.setAttribute("aria-label", `Choose ${label.toLowerCase()} scale`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.scaleMode = mode;
      renderHomeProgressionsMode();
    });
    scaleMenu.appendChild(button);
  });

  const formulaMenu = selectorPanel.querySelector("[data-home-progression-formula-menu]");
  homeProgressionFormulas.forEach((formula) => {
    const button = document.createElement("button");
    const isActive = formula.id === homeProgressionState.formulaId;

    button.type = "button";
    button.dataset.homeProgressionFormula = formula.id;
    button.textContent = formula.label;
    button.setAttribute("aria-label", `Choose ${formula.label} progression`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.selectedStepIndex = 0;
      setHomeProgressionSteps([...formula.degrees], formula.id);
      renderHomeProgressionsMode();
    });
    formulaMenu.appendChild(button);
  });
}

function renderHomeProgressionSummary(progression, chords) {
  const { summaryCard } = homeProgressionElements();
  const labels = homeProgressionLabels(chords);
  const formulaLabel = homeProgressionFormulaLabel();
  const title = homeProgressionTitle();
  const scale = homeProgressionScaleNotes();

  if (!summaryCard) {
    return;
  }

  summaryCard.className = "card progression-summary-card";
  summaryCard.innerHTML = `
    <span class="chord-emblem" aria-hidden="true">
      <span class="chord-symbol" data-home-progression-key-symbol>${displayNoteName(homeProgressionState.root)}</span>
    </span>
    <div class="chord-heading-row">
      <h2 data-home-progression-title>${title}</h2>
      <p class="scale-line" data-home-progression-scale>${displayNotes(scale)}</p>
      <div class="notation-toggle" role="group" aria-label="Choose note naming">
        <button type="button" data-home-progression-notation="sharp" data-notation="sharp" aria-label="Use sharp note names" aria-pressed="${preferredNotation === "sharp" ? "true" : "false"}">&#9839;</button>
        <button type="button" data-home-progression-notation="flat" data-notation="flat" aria-label="Use flat note names" aria-pressed="${preferredNotation === "flat" ? "true" : "false"}">&#9837;</button>
      </div>
    </div>
  `;
  summaryCard.setAttribute("aria-label", `${title} ${formulaLabel} progression`);
  summaryCard.dataset.progression = homeProgressionSymbols(chords).join(",");
  summaryCard.dataset.displayProgression = labels.join(",");

  summaryCard.querySelectorAll("[data-home-progression-notation]").forEach((button) => {
    button.addEventListener("click", () => {
      preferredNotation = button.dataset.homeProgressionNotation === "flat" ? "flat" : "sharp";
      storeNotation(preferredNotation);
      renderHomeProgressionsMode();
    });
  });
}

function renderHomeProgressionList() {
  const { listCard } = homeProgressionElements();
  const steps = homeProgressionState.steps;
  const pattern = homeProgressionDegreePattern();

  if (!listCard) {
    return;
  }

  listCard.className = "card progression-customizer";
  listCard.innerHTML = `
    <h2>Customize Progressions</h2>
    <div class="progression-customizer-section">
      <p class="selector-label">Steps</p>
      <div class="progression-step-grid" role="group" aria-label="Customize progression steps" data-home-progression-steps></div>
    </div>
    <div class="progression-customizer-section">
      <p class="selector-label">Degree Picker</p>
      <div class="progression-degree-grid" role="group" aria-label="Choose degree for selected step" data-home-progression-degree-picker></div>
    </div>
    <div class="progression-customizer-section progression-options-row">
      <p class="selector-label">Options</p>
      <div class="progression-option-buttons" role="group" aria-label="Choose chord detail" data-home-progression-chord-mode></div>
    </div>
    <div class="progression-customizer-section">
      <p class="selector-label">Utilities</p>
      <div class="progression-utility-row" data-home-progression-utilities></div>
    </div>
  `;

  const stepGrid = listCard.querySelector("[data-home-progression-steps]");
  steps.forEach((degree, index) => {
    const button = document.createElement("button");
    const isActive = index === homeProgressionState.selectedStepIndex;

    button.type = "button";
    button.className = "progression-step-button";
    button.dataset.homeProgressionStep = String(index);
    button.setAttribute("aria-label", `Select step ${index + 1}: ${pattern[degree]?.roman || "I"}`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.innerHTML = `<span>Step ${index + 1}</span><strong>${pattern[degree]?.roman || "I"}</strong>`;
    button.addEventListener("click", () => {
      homeProgressionState.selectedStepIndex = index;
      renderHomeProgressionsMode();
    });
    stepGrid.appendChild(button);
  });

  const degreePicker = listCard.querySelector("[data-home-progression-degree-picker]");
  pattern.forEach((degree, index) => {
    const button = document.createElement("button");
    const isActive = steps[homeProgressionState.selectedStepIndex] === index;

    button.type = "button";
    button.dataset.homeProgressionDegree = String(index);
    button.textContent = degree.roman;
    button.setAttribute("aria-label", `Set selected step to ${degree.roman}`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.steps[homeProgressionState.selectedStepIndex] = index;
      homeProgressionState.formulaId = "custom";
      renderHomeProgressionsMode();
    });
    degreePicker.appendChild(button);
  });

  const modeMenu = listCard.querySelector("[data-home-progression-chord-mode]");
  [
    ["triads", "Triads"],
    ["sevenths", "7th"],
  ].forEach(([mode, label]) => {
    const button = document.createElement("button");
    const isActive = mode === homeProgressionState.chordMode;

    button.type = "button";
    button.dataset.homeProgressionChordMode = mode;
    button.textContent = label;
    button.setAttribute("aria-label", `Use ${label} chords`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.chordMode = mode;
      renderHomeProgressionsMode();
    });
    modeMenu.appendChild(button);
  });

  const utilities = listCard.querySelector("[data-home-progression-utilities]");
  const utilityButtons = [
    {
      id: "add",
      label: "+ Add Step",
      disabled: homeProgressionState.steps.length >= 8,
    },
    {
      id: "remove",
      label: "\u2212 Remove",
      disabled: homeProgressionState.steps.length <= 2,
    },
    {
      id: "random",
      label: "\ud83c\udfb2 Random",
      disabled: false,
    },
    {
      id: "reset",
      label: "\u21bb Reset",
      disabled: false,
    },
  ];

  utilityButtons.forEach(({ id, label, disabled }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.homeProgressionUtility = id;
    button.disabled = disabled;
    button.setAttribute("aria-label", label.replace(/^[^\w]+/, "").trim());
    button.textContent = label;
    button.addEventListener("click", () => handleHomeProgressionUtility(id));
    utilities.appendChild(button);
  });

}

function ensureHomeProgressionStage(chordSymbols, labels) {
  const { pianoCard } = homeProgressionElements();
  const keyboard = pianoCard?.querySelector(".keyboard");
  const title = homeProgressionTitle();
  const formula = homeProgressionFormulaLabel();

  if (!keyboard) {
    return null;
  }

  let animation = keyboard.querySelector("[data-home-progression-animation]");

  if (!animation) {
    animation = document.createElement("div");
    animation.className = "progression-animation homepage-progression-animation";
    animation.dataset.homeProgressionAnimation = "";
    animation.dataset.progressionAnimation = "";
    animation.setAttribute("aria-label", "Selected progression sequence");
    keyboard.replaceChildren(animation);
  }

  animation.dataset.symbols = chordSymbols.join(",");
  animation.dataset.displaySymbols = labels.join(",");
  animation.dataset.octaves = String(homeProgressionState.octaveCount);
  keyboard.setAttribute("aria-label", `${title} ${labels.join(" - ")} progression`);
  updateProgressionAnimation(animation);

  return animation;
}

function renderHomePianoCard(progression, chords) {
  const { pianoCard } = homeProgressionElements();
  const labels = homeProgressionLabels(chords);
  const chordSymbols = homeProgressionSymbols(chords);
  const formula = homeProgressionFormulaLabel();

  if (!pianoCard) {
    return;
  }

  pianoCard.innerHTML = `
    <div class="piano-card-header">
      <button class="play-button" type="button" aria-label="Play ${formula} progression" data-home-progression-play>
        <img
          src="assets/piano-valley/themes/dark/play-button.webp"
          alt=""
          width="256"
          height="256"
          loading="lazy"
          decoding="async"
        >
        <span class="play-icon" aria-hidden="true"></span>
      </button>
      <button class="repeat-button progression-repeat" type="button" aria-label="Loop ${formula} progression" aria-pressed="false" data-home-progression-repeat>
        <span class="repeat-icon" aria-hidden="true"></span>
      </button>
      <div class="piano-metrics">
        <div class="piano-metric-row">
          <p class="stat-label">Formula</p>
          <p class="formula-line" data-progression-formula>${formula}</p>
        </div>
        <div class="note-line">
          <span class="stat-label">Chords</span>
          <p data-progression-chords>${labels.join(" - ")}</p>
        </div>
      </div>
      <button class="octave-toggle" type="button" data-home-progression-octave-toggle aria-pressed="${homeProgressionState.octaveCount === 2 ? "true" : "false"}">${homeProgressionState.octaveCount === 2 ? "-OCT" : "+OCT"}</button>
    </div>
    <p class="keyboard-legend">STEPS: <span data-home-progression-step-label></span></p>
    <div class="keyboard" role="img" aria-label="Piano keys for ${formula} progression"></div>
  `;

  pianoCard.querySelector("[data-home-progression-play]")?.addEventListener("click", playHomeSelectedProgression);
  pianoCard.querySelector("[data-home-progression-repeat]")?.addEventListener("click", startHomeProgressionLoop);
  pianoCard.querySelector("[data-home-progression-octave-toggle]")?.addEventListener("click", () => {
    homeProgressionState.octaveCount = homeProgressionState.octaveCount === 2 ? 1 : 2;
    renderHomeProgressionsMode();
  });
  ensureHomeProgressionStage(chordSymbols, labels);
}

function renderHomeProgressionScaleLine() {
  const { infoCard } = homeProgressionElements();
  const songs = homeProgressionSongExamples[homeProgressionMajorFormulaLabel()] || [];

  if (!infoCard) {
    return;
  }

  infoCard.className = "card chord-info-card progression-songs-card";
  infoCard.innerHTML = `
    <div class="future-illustration-slot" aria-hidden="true">
      <img
        class="info-card-robot"
        src="assets/piano-valley/themes/dark/robot-floating.webp"
        alt=""
        width="320"
        height="320"
        loading="lazy"
        decoding="async"
      >
    </div>
    <div class="progression-songs-fields">
      <p class="progression-songs-label">SONGS:</p>
      <p class="progression-songs-list" data-home-progression-songs></p>
    </div>
  `;
  fitHomeProgressionSongLine(infoCard, songs);
}

function renderHomeProgressionSongLine(line, songs, count = 3) {
  const visibleSongs = songs.slice(0, count);

  if (!visibleSongs.length) {
    line.textContent = "Nothing found ...";
    return;
  }

  line.replaceChildren();
  visibleSongs.forEach((song, index) => {
    const songText = document.createElement("span");
    songText.textContent = song;
    line.appendChild(songText);

    if (index < visibleSongs.length - 1) {
      const separator = document.createElement("span");
      separator.className = "progression-songs-separator";
      separator.textContent = " | ";
      line.appendChild(separator);
    }
  });
}

function fitHomeProgressionSongLine(container, songs) {
  const line = container.querySelector("[data-home-progression-songs]");

  if (homeProgressionSongFitFrame) {
    window.cancelAnimationFrame(homeProgressionSongFitFrame);
    homeProgressionSongFitFrame = 0;
  }

  if (!line) {
    return;
  }

  if (!songs.length) {
    line.textContent = "Nothing found ...";
    return;
  }

  let visibleCount = Math.min(3, songs.length);
  renderHomeProgressionSongLine(line, songs, visibleCount);

  homeProgressionSongFitFrame = window.requestAnimationFrame(() => {
    homeProgressionSongFitFrame = 0;

    if (!line.isConnected || line.clientWidth <= 0) {
      return;
    }

    while (visibleCount > 1 && line.scrollWidth > line.clientWidth) {
      visibleCount -= 1;
      renderHomeProgressionSongLine(line, songs, visibleCount);
    }
  });
}

function renderHomeProgressionsMode() {
  normalizeHomeProgressionState();

  const progression = { roman: homeProgressionFormulaLabel(), degrees: [...homeProgressionState.steps] };
  const chords = homeProgressionChords();

  homeProgressionState.mode = "progressions";
  document.body.classList.add("is-home-progressions-mode");
  homeProgressionElements().workspace?.classList.add("is-progressions-mode");
  document.title = `${homeProgressionTitle()} Progressions - Chordyssey`;
  renderHomeKeySelector();
  renderHomeProgressionSummary(progression, chords);
  renderHomeProgressionList();
  renderHomePianoCard(progression, chords);
  renderHomeProgressionScaleLine();
}

function scheduleHomeProgressionAnimation(chordSymbols, labels) {
  const animation = ensureHomeProgressionStage(chordSymbols, labels);

  if (!animation) {
    return;
  }

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
  }, startDelay + chordSymbols.length * progressionChordSpacing + 0.2);
}

function playHomeSelectedProgression() {
  const chords = homeProgressionChords();
  const chordSymbols = homeProgressionSymbols(chords);
  const labels = homeProgressionLabels(chords);

  playHomeProgression(chordSymbols, labels);
}

function startHomeProgressionLoop(event) {
  const button = event?.currentTarget;

  if (!button) {
    return;
  }

  if (activeLoop?.button === button) {
    stopActiveLoop();
    startNewPlayback();
    return;
  }

  const chords = homeProgressionChords();
  const chordSymbols = homeProgressionSymbols(chords);
  const labels = homeProgressionLabels(chords);

  stopActiveLoop();
  activeLoop = { button, timerId: null };
  setLoopButtonState(button, true);

  const runLoop = () => {
    if (activeLoop?.button !== button) {
      return;
    }

    playHomeProgression(chordSymbols, labels, { keepLoop: true });
    activeLoop.timerId = window.setTimeout(runLoop, progressionPlaybackDuration(chordSymbols) * 1000);
  };

  runLoop();
}

function playHomeProgression(chordSymbols, labels, { keepLoop = false } = {}) {
  const playbackOutput = startNewPlayback({ keepLoop });
  const soundMode = getSelectedSoundMode();

  scheduleHomeProgressionAnimation(chordSymbols, labels);

  if (shouldUsePianoSampler()) {
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
    const startTime = now + index * progressionChordSpacing;
    playNativeChordSound(frequenciesFromChordSymbol(symbol), startTime, progressionChordDuration, playbackOutput, soundMode);
  });
}

function setHomepagePianoAreaMode(mode) {
  if (!isHomeDashboardPage()) {
    return;
  }

  const elements = homeProgressionElements();
  const nextMode = mode === "progressions" ? "progressions" : "chords";

  captureHomeChordSnapshot();

  if (elements.areaMenu) {
    elements.areaMenu.value = nextMode;
  }

  if (nextMode === homeProgressionState.mode && nextMode === "progressions") {
    renderHomeProgressionsMode();
    return;
  }

  if (nextMode === "chords") {
    restoreHomeChordMode();
    return;
  }

  homeProgressionState.mode = "progressions";
  resetHomeProgressionDefaults();
  renderHomeProgressionsMode();
}

function setHomepageChordModeState(elements = homeProgressionElements()) {
  if (!isHomeDashboardPage()) {
    return;
  }

  document.body.classList.remove("is-home-progressions-mode");
  elements.workspace?.classList.remove("is-progressions-mode");
  homeProgressionState.mode = "chords";

  if (elements.areaMenu) {
    elements.areaMenu.value = "chords";
  }
}

function initializeHomepagePianoAreaMode() {
  const { areaMenu } = homeProgressionElements();

  if (!isHomeDashboardPage() || !areaMenu) {
    return;
  }

  captureHomeChordSnapshot();
  setHomepageChordModeState();
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
initializeHeaderDropdownMenus();
initializeNotationToggle();
initializeMajorChordPage();
initializeHomepagePianoAreaMode();
initializeMajorKeyPage();
initializeDynamicMajorPage();
initializePianoOctaveToggle();
initializeChordCards();
initializeProgressions();
initializeRelatedChordsViewportWatcher();
updateNotation();
