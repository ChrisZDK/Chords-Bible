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
const solfegeSharpNames = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];
const solfegeFlatNames = ["Do", "Reb", "Re", "Mib", "Mi", "Fa", "Solb", "Sol", "Lab", "La", "Sib", "Si"];
const rootSelectorNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
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
const chordQualityOptionButtons = new WeakSet();
const chordPlayButtons = new WeakSet();
const chordRepeatButtons = new WeakSet();
const progressionPlayButtons = new WeakSet();
const progressionRepeatButtons = new WeakSet();
const relatedCarouselButtons = new WeakSet();
const pianoOctaveToggleButtons = new WeakSet();
const pianoPlayStyleToggleButtons = new WeakSet();
const guitarNextVoicingButtons = new WeakSet();
const notationToggleButtons = new WeakSet();
const noteNameToggleButtons = new WeakSet();
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
    page: "index.html?mode=progressions",
    scaleIntervals: majorScaleIntervals,
    chordPattern: keyChordPattern,
    progressions: progressionSets,
  },
  minor: {
    titleQuality: "Minor",
    subtitle: "Natural minor scale and diatonic triads",
    fallbackRoot: "A",
    page: "index.html?mode=progressions&scale=minor",
    scaleIntervals: minorScaleIntervals,
    chordPattern: minorKeyChordPattern,
    progressions: minorProgressionSets,
  },
};
const notationStorageKey = "chordysseyAccidentalMode";
const legacyNotationStorageKey = "preferredNotation";
const noteNameModeStorageKey = "chordysseyNoteNameMode";
const selectedModeStorageKey = "chordyssey:selectedMode";
const pianoThemeStorageKey = "chordyssey:pianoTheme";
const legacyPianoThemeStorageKey = "pianoValleyTheme";
const instrumentFamilyStorageKey = "chordyssey:instrumentFamily";
const smartphoneViewportQuery = "(max-width: 767px), (max-width: 932px) and (max-height: 430px) and (orientation: landscape) and (hover: none) and (pointer: coarse)";
const instrumentFamilies = new Set(["keyboards", "guitars", "ukulele"]);
const soundModePresets = {
  keyboards: {
    "grand-piano": "Grand Piano",
    synth: "Synth",
    chiptune: "Chiptune",
  },
  guitars: {
    acoustic: "Acoustic",
    electric: "Electric",
    psyche: "Psyche",
  },
  ukulele: {
    hawaii: "Hawaii",
    banjo: "Banjo",
  },
};
const defaultSoundModes = {
  keyboards: "grand-piano",
  guitars: "acoustic",
  ukulele: "hawaii",
};
const instrumentThemeVisuals = {
  dark: {
    keyboards: {
      banner: {
        src: "assets/themes/dark/dark-banner.webp",
        alt: "Pixel-art Piano scene with floating islands, robots, and a piano path.",
      },
      "sound-robot": {
        src: "assets/themes/dark/dark-robot-keyboard.webp",
        alt: "",
      },
    },
    guitars: {
      banner: {
        src: "assets/themes/dark/dark-banner-guitar.webp",
        alt: "Pixel-art guitar scene with floating islands, robots, and a guitar path.",
      },
      "sound-robot": {
        src: "assets/themes/dark/dark-robot-guitar.webp",
        alt: "",
      },
    },
    ukulele: {
      banner: {
        src: "assets/themes/dark/dark-banner-ukulele.webp",
        alt: "Pixel-art ukulele scene with floating islands, robots, and a ukulele path.",
      },
      "sound-robot": {
        src: "assets/themes/dark/dark-robot-ukulele.webp",
        alt: "",
      },
    },
  },
};
const guitarStringTunings = [
  { label: "E", value: 4, octave: 2 },
  { label: "A", value: 9, octave: 2 },
  { label: "D", value: 2, octave: 3 },
  { label: "G", value: 7, octave: 3 },
  { label: "B", value: 11, octave: 3 },
  { label: "E", value: 4, octave: 4 },
];
const ukuleleStringTunings = [
  { label: "G", value: 7, octave: 4 },
  { label: "C", value: 0, octave: 4 },
  { label: "E", value: 4, octave: 4 },
  { label: "A", value: 9, octave: 4 },
];
const guitarFretRanges = {
  compact: 5,
  extended: 12,
};
const guitarVoicingCatalog = {
  "C:Major": [
    { label: "Open C", frets: [null, 3, 2, 0, 1, 0], fingers: [null, 3, 2, null, 1, null] },
    { label: "C A-shape Barre", frets: [null, 3, 5, 5, 5, 3], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 3, strings: [1, 2, 3, 4, 5] } },
  ],
  "D:Major": [
    { label: "Open D", frets: [null, null, 0, 2, 3, 2], fingers: [null, null, null, 1, 3, 2] },
  ],
  "E:Major": [
    { label: "Open E", frets: [0, 2, 2, 1, 0, 0], fingers: [null, 2, 3, 1, null, null] },
  ],
  "F:Major": [
    { label: "F E-shape Barre", frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 1, strings: [0, 1, 2, 3, 4, 5] } },
    { label: "Small F", frets: [null, null, 3, 2, 1, 1], fingers: [null, null, 3, 2, 1, 1], barre: { fret: 1, strings: [4, 5] } },
  ],
  "G:Major": [
    { label: "Open G", frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, null, null, null, 3] },
    { label: "Open G Alt", frets: [3, 2, 0, 0, 3, 3], fingers: [2, 1, null, null, 3, 4] },
  ],
  "A:Major": [
    { label: "Open A", frets: [null, 0, 2, 2, 2, 0], fingers: [null, null, 1, 2, 3, null] },
  ],
  "B:Major": [
    { label: "B A-shape Barre", frets: [null, 2, 4, 4, 4, 2], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 2, strings: [1, 2, 3, 4, 5] } },
  ],
  "A:Minor": [
    { label: "Open Am", frets: [null, 0, 2, 2, 1, 0], fingers: [null, null, 2, 3, 1, null] },
    { label: "A E-minor Barre", frets: [5, 7, 7, 5, 5, 5], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 5, strings: [0, 1, 2, 3, 4, 5] } },
  ],
  "B:Minor": [
    { label: "B A-minor Barre", frets: [null, 2, 4, 4, 3, 2], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 2, strings: [1, 2, 3, 4, 5] } },
  ],
  "C:Minor": [
    { label: "C A-minor Barre", frets: [null, 3, 5, 5, 4, 3], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 3, strings: [1, 2, 3, 4, 5] } },
  ],
  "D:Minor": [
    { label: "Open Dm", frets: [null, null, 0, 2, 3, 1], fingers: [null, null, null, 2, 3, 1] },
  ],
  "E:Minor": [
    { label: "Open Em", frets: [0, 2, 2, 0, 0, 0], fingers: [null, 2, 3, null, null, null] },
  ],
  "G:Minor": [
    { label: "G E-minor Barre", frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 3, strings: [0, 1, 2, 3, 4, 5] } },
  ],
};
const ukuleleVoicingCatalog = {
  "C:Major": [
    { label: "Open C", frets: [0, 0, 0, 3], fingers: [null, null, null, 3] },
    { label: "Compact C", frets: [5, 4, 3, 3], fingers: [4, 3, 1, 1], barre: { fret: 3, strings: [2, 3] } },
  ],
  "D:Major": [
    { label: "Open D", frets: [2, 2, 2, 0], fingers: [1, 2, 3, null] },
  ],
  "E:Major": [
    { label: "Compact E", frets: [4, 4, 4, 2], fingers: [2, 3, 4, 1] },
  ],
  "F:Major": [
    { label: "Open F", frets: [2, 0, 1, 0], fingers: [2, null, 1, null] },
  ],
  "G:Major": [
    { label: "Open G", frets: [0, 2, 3, 2], fingers: [null, 1, 3, 2] },
    { label: "Compact G", frets: [4, 2, 3, 2], fingers: [3, 1, 2, 1], barre: { fret: 2, strings: [1, 2, 3] } },
  ],
  "A:Major": [
    { label: "Open A", frets: [2, 1, 0, 0], fingers: [2, 1, null, null] },
  ],
  "B:Major": [
    { label: "Compact B", frets: [4, 3, 2, 2], fingers: [3, 2, 1, 1], barre: { fret: 2, strings: [2, 3] } },
  ],
  "C:Minor": [
    { label: "Open Cm", frets: [0, 3, 3, 3], fingers: [null, 1, 2, 3] },
  ],
  "D:Minor": [
    { label: "Open Dm", frets: [2, 2, 1, 0], fingers: [2, 3, 1, null] },
  ],
  "E:Minor": [
    { label: "Open Em", frets: [0, 4, 3, 2], fingers: [null, 3, 2, 1] },
  ],
  "F:Minor": [
    { label: "Compact Fm", frets: [1, 0, 1, 3], fingers: [1, null, 2, 4] },
  ],
  "G:Minor": [
    { label: "Open Gm", frets: [0, 2, 3, 1], fingers: [null, 2, 3, 1] },
  ],
  "A:Minor": [
    { label: "Open Am", frets: [2, 0, 0, 0], fingers: [2, null, null, null] },
    { label: "Compact Am", frets: [2, 4, 5, 3], fingers: [1, 3, 4, 2] },
  ],
  "B:Minor": [
    { label: "Compact Bm", frets: [4, 2, 2, 2], fingers: [3, 1, 1, 1], barre: { fret: 2, strings: [1, 2, 3] } },
  ],
  "C:7": [
    { label: "Open C7", frets: [0, 0, 0, 1], fingers: [null, null, null, 1] },
  ],
  "D:7": [
    { label: "Beginner D7", frets: [2, 2, 2, 3], fingers: [1, 1, 1, 2], barre: { fret: 2, strings: [0, 1, 2] } },
    { label: "Compact D7", frets: [5, 6, 5, 5], fingers: [1, 2, 1, 1], barre: { fret: 5, strings: [0, 2, 3] } },
  ],
  "E:7": [
    { label: "Open E7", frets: [1, 2, 0, 2], fingers: [1, 2, null, 3] },
  ],
  "F:7": [
    { label: "Compact F7", frets: [2, 3, 1, 3], fingers: [2, 3, 1, 4] },
  ],
  "G:7": [
    { label: "Beginner G7", frets: [0, 2, 1, 2], fingers: [null, 2, 1, 3] },
  ],
  "A:7": [
    { label: "Open A7", frets: [0, 1, 0, 0], fingers: [null, 1, null, null] },
  ],
  "B:7": [
    { label: "Compact B7", frets: [4, 3, 2, 0], fingers: [3, 2, 1, null] },
  ],
};
const guitarMovableVoicingTemplates = [
  { qualities: ["Major"], label: "E-shape Barre", rootString: 0, offsets: [0, 2, 2, 1, 0, 0], fingers: [1, 3, 4, 2, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["Major"], label: "A-shape Barre", rootString: 1, offsets: [null, 0, 2, 2, 2, 0], fingers: [null, 1, 3, 3, 3, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["Minor"], label: "E-minor Barre", rootString: 0, offsets: [0, 2, 2, 0, 0, 0], fingers: [1, 3, 4, 1, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["Minor"], label: "A-minor Barre", rootString: 1, offsets: [null, 0, 2, 2, 1, 0], fingers: [null, 1, 3, 4, 2, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["Power"], label: "E-string Power", rootString: 0, offsets: [0, 2, 2, null, null, null] },
  { qualities: ["Power"], label: "A-string Power", rootString: 1, offsets: [null, 0, 2, 2, null, null] },
  { qualities: ["Sus2"], label: "A-shape Sus2", rootString: 1, offsets: [null, 0, 2, 2, 0, 0], fingers: [null, 1, 3, 4, 1, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["Sus4"], label: "E-shape Sus4", rootString: 0, offsets: [0, 2, 2, 2, 0, 0], fingers: [1, 2, 3, 4, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["Sus4"], label: "A-shape Sus4", rootString: 1, offsets: [null, 0, 2, 2, 3, 0], fingers: [null, 1, 2, 3, 4, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["7"], label: "E-shape 7", rootString: 0, offsets: [0, 2, 0, 1, 0, 0], fingers: [1, 3, 1, 2, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["7"], label: "A-shape 7", rootString: 1, offsets: [null, 0, 2, 0, 2, 0], fingers: [null, 1, 3, 1, 4, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["maj7"], label: "E-shape maj7", rootString: 0, offsets: [0, 2, 1, 1, 0, 0], fingers: [1, 4, 2, 3, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["maj7"], label: "A-shape maj7", rootString: 1, offsets: [null, 0, 2, 1, 2, 0], fingers: [null, 1, 3, 2, 4, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["m7"], label: "E-shape m7", rootString: 0, offsets: [0, 2, 0, 0, 0, 0], fingers: [1, 3, 1, 1, 1, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["m7"], label: "A-shape m7", rootString: 1, offsets: [null, 0, 2, 0, 1, 0], fingers: [null, 1, 3, 1, 2, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["6"], label: "E-shape 6", rootString: 0, offsets: [0, 2, 2, 1, 2, 0], fingers: [1, 3, 3, 2, 4, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["6"], label: "A-shape 6", rootString: 1, offsets: [null, 0, 2, 2, 2, 2], fingers: [null, 1, 3, 3, 3, 3], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["m6"], label: "E-shape m6", rootString: 0, offsets: [0, 2, 2, 0, 2, 0], fingers: [1, 2, 3, 1, 4, 1], barre: { offset: 0, strings: [0, 1, 2, 3, 4, 5] } },
  { qualities: ["m6"], label: "A-shape m6", rootString: 1, offsets: [null, 0, 2, 2, 1, 2], fingers: [null, 1, 3, 4, 2, 3], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["add9"], label: "A-shape add9", rootString: 1, offsets: [null, 0, 2, 2, 0, 0], fingers: [null, 1, 3, 4, 1, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
  { qualities: ["madd9"], label: "A-shape madd9", rootString: 1, offsets: [null, 0, 2, 4, 1, 0], fingers: [null, 1, 2, 4, 1, 1], barre: { offset: 0, strings: [1, 2, 3, 4, 5] } },
];
const guitarEssentialIntervalsByQuality = {
  Major: [0, 4, 7],
  Minor: [0, 3, 7],
  Power: [0, 7],
  Sus2: [0, 2, 7],
  Sus4: [0, 5, 7],
  Augmented: [0, 4, 8],
  Diminished: [0, 3, 6],
  maj7: [0, 4, 11],
  m7: [0, 3, 10],
  7: [0, 4, 10],
  dim7: [0, 3, 6, 9],
  m7b5: [0, 3, 6, 10],
  mMaj7: [0, 3, 11],
  aug7: [0, 4, 8, 10],
  6: [0, 4, 9],
  m6: [0, 3, 9],
  9: [0, 4, 10, 14],
  maj9: [0, 4, 11, 14],
  m9: [0, 3, 10, 14],
  11: [0, 4, 10, 17],
  13: [0, 4, 10, 21],
  "7b5": [0, 4, 6, 10],
  "7#5": [0, 4, 8, 10],
  "7b9": [0, 4, 10, 13],
  "7#9": [0, 4, 10, 15],
  "9#11": [0, 4, 10, 14, 18],
  "13b9": [0, 4, 10, 13, 21],
  add9: [0, 4, 7, 14],
  madd9: [0, 3, 7, 14],
  sus4add9: [0, 5, 7, 14],
};
const guitarGeneratedVoicingLimit = 5;
const stringedInstrumentConfigs = {
  guitars: {
    name: "Guitar",
    article: "guitar",
    strings: guitarStringTunings,
    fretRanges: guitarFretRanges,
    voicingCatalog: guitarVoicingCatalog,
    movableVoicingTemplates: guitarMovableVoicingTemplates,
    generatedVoicingLimit: guitarGeneratedVoicingLimit,
    generatedSearchMaxPosition: 8,
  },
  ukulele: {
    name: "Ukulele",
    article: "ukulele",
    strings: ukuleleStringTunings,
    fretRanges: guitarFretRanges,
    voicingCatalog: ukuleleVoicingCatalog,
    movableVoicingTemplates: [],
    generatedVoicingLimit: guitarGeneratedVoicingLimit,
    generatedSearchMaxPosition: 8,
  },
};

let audioContext;
let activePlaybackOutput;
let pianoSampler;
let pianoReady = false;
let selectedInstrumentFamily = "keyboards";
let pianoPlayStyleArpeggio = false;
let selectedSoundMode = "grand-piano";
const guitarState = {
  fretRange: guitarFretRanges.extended,
  chordVoicingIndex: 0,
};
const guitarVoicingCache = new Map();
const selectedSoundModesByInstrument = {
  keyboards: "grand-piano",
  guitars: "acoustic",
  ukulele: "hawaii",
};
let padReverbImpulse;
let chipCurve;
let guitarDriveCurve;
let activeTimers = [];
let activeLoop = null;
let preferredNotation = getStoredNotation();
let preferredNoteNameMode = getStoredNoteNameMode();
let homeProgressionSongFitFrame = 0;
let homeProgressionMobileFormulaMenuOpen = false;
const homeProgressionsPerPage = 4;
const homeProgressionState = {
  mode: "chords",
  key: "C",
  root: "C",
  scaleMode: "major",
  formulaId: "pop-axis",
  steps: [0, 4, 5, 3],
  stepModes: ["triads", "triads", "triads", "triads"],
  selectedStepIndex: 0,
  chordMode: "triads",
  selectedIndex: 0,
  page: 0,
  octaveCount: 1,
  arpeggio: false,
  guitarVoicingIndexes: [],
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
const guitarProgressionDifficultyLevels = [
  { level: 1, label: "Beginner-friendly progression" },
  { level: 2, label: "No worries it's easy" },
  { level: 3, label: "Smooth practice" },
  { level: 4, label: "Getting serious" },
  { level: 5, label: "Strum it until you make it" },
  { level: 6, label: "No pain, no gain" },
  { level: 7, label: "Barre chord alert" },
  { level: 8, label: "You\u2019re a Ninja" },
  { level: 9, label: "Hardcore mode activated" },
  { level: 10, label: "Practice at least 40 hours a day" },
];
const guitarProgressionBaseDifficultyByFormulaId = {
  "pop-axis": 2,
  "jazz-cadence": 4,
  "sensitive-axis": 3,
  primary: 1,
  fifties: 3,
  cinematic: 4,
  lift: 4,
  falling: 4,
  "bright-step": 4,
  "plagal-step": 4,
  "minor-fall": 4,
  cycle: 5,
};
const guitarProgressionBaseDifficultyByFormulaLabel = {
  "I - IV - V": 1,
  "I - V - vi - IV": 2,
  "vi - IV - I - V": 3,
  "I - vi - IV - V": 3,
  "ii - V - I": 4,
  "I - ii - V - I": 4,
  "I - bVII - IV - I": 5,
  "I - bVI - bVII - I": 6,
  "I - V - bVII - IV": 5,
  "I - #iv\u00b0 - V - I": 6,
  "I - IV - iv - I": 5,
  "I - bII - IV - I": 7,
  "I - bIII - IV - I": 6,
  "I - iii - IV - iv - V - I": 7,
  "i - iv - v": 2,
  "i - VI - III - VII": 4,
  "i - VII - VI - VII": 4,
  "i - iv - VII - III": 4,
  "i - VI - iv - V": 5,
  "i - v - VI - iv": 4,
  "i - III - VII - iv": 4,
  "i - bII - VII - i": 7,
  "i - iv - bVII - VI": 5,
  "i - ii\u00b0 - V - i": 6,
};
const guitarChordQualityDifficultyScores = {
  Major: 0,
  Minor: 0,
  Power: 0,
  Sus2: 0.55,
  Sus4: 0.55,
  6: 0.8,
  m6: 1,
  add9: 0.85,
  madd9: 1,
  Augmented: 1.15,
  7: 1.35,
  maj7: 1.35,
  m7: 1.35,
  mMaj7: 1.75,
  aug7: 1.75,
  Diminished: 2.1,
  dim7: 2.45,
  m7b5: 2.45,
  9: 2.45,
  maj9: 2.25,
  m9: 2.3,
  11: 2.8,
  13: 3,
  "7b5": 3,
  "7#5": 3,
  "7b9": 3.25,
  "7#9": 3.25,
  "9#11": 3.45,
  "13b9": 3.65,
  sus4add9: 2,
};
const homePianoAreaModes = new Set(["chords", "progressions"]);
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
const progressionArpeggioNoteSpacing = 0.24;
const progressionArpeggioNoteDuration = 0.26;
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

function normalizeAccidentalMode(mode) {
  return mode === "flat" || mode === "flats" ? "flat" : "sharp";
}

function storedAccidentalMode(notation) {
  return normalizeAccidentalMode(notation) === "flat" ? "flats" : "sharps";
}

function normalizeNoteNameMode(mode) {
  return mode === "solfege" ? "solfege" : "letters";
}

function getStoredNotation() {
  try {
    const storedNotation = window.localStorage?.getItem(notationStorageKey);
    const legacyNotation = window.localStorage?.getItem(legacyNotationStorageKey);
    return normalizeAccidentalMode(storedNotation || legacyNotation);
  } catch {
    return "sharp";
  }
}

function storeNotation(notation) {
  try {
    window.localStorage?.setItem(notationStorageKey, storedAccidentalMode(notation));
  } catch {
    // The toggle still works when storage is blocked.
  }
}

function getStoredNoteNameMode() {
  try {
    return normalizeNoteNameMode(window.localStorage?.getItem(noteNameModeStorageKey));
  } catch {
    return "letters";
  }
}

function storeNoteNameMode(mode) {
  try {
    window.localStorage?.setItem(noteNameModeStorageKey, normalizeNoteNameMode(mode));
  } catch {
    // The toggle still works when storage is blocked.
  }
}

function normalizeInstrumentFamily(family) {
  return instrumentFamilies.has(family) ? family : "keyboards";
}

function getSelectedInstrumentFamily() {
  return normalizeInstrumentFamily(selectedInstrumentFamily);
}

function isGuitarMode() {
  return getSelectedInstrumentFamily() === "guitars";
}

function getStringedInstrumentConfig(family = getSelectedInstrumentFamily()) {
  return stringedInstrumentConfigs[normalizeInstrumentFamily(family)] || null;
}

function isStringedInstrumentMode() {
  return Boolean(getStringedInstrumentConfig());
}

function getStringedInstrumentName() {
  return getStringedInstrumentConfig()?.name || "Guitar";
}

function getStringedInstrumentArticle() {
  return getStringedInstrumentConfig()?.article || "guitar";
}

function getStringedInstrumentTunings() {
  return getStringedInstrumentConfig()?.strings || guitarStringTunings;
}

function getStringedInstrumentVoicingCatalog() {
  return getStringedInstrumentConfig()?.voicingCatalog || guitarVoicingCatalog;
}

function getStringedInstrumentMovableTemplates() {
  return getStringedInstrumentConfig()?.movableVoicingTemplates || guitarMovableVoicingTemplates;
}

function getStringedInstrumentFretRanges() {
  return getStringedInstrumentConfig()?.fretRanges || guitarFretRanges;
}

function getStringedGeneratedVoicingLimit() {
  return getStringedInstrumentConfig()?.generatedVoicingLimit || guitarGeneratedVoicingLimit;
}

function getStringedGeneratedSearchMaxPosition() {
  return getStringedInstrumentConfig()?.generatedSearchMaxPosition || 8;
}

function isStringedSoundMode(mode) {
  return Boolean(soundModePresets.guitars[mode] || soundModePresets.ukulele[mode]);
}

function getStoredInstrumentFamily() {
  try {
    const storedFamily = window.localStorage?.getItem(instrumentFamilyStorageKey);

    return instrumentFamilies.has(storedFamily) ? storedFamily : "";
  } catch {
    return "";
  }
}

function storeInstrumentFamily(family) {
  try {
    window.localStorage?.setItem(instrumentFamilyStorageKey, normalizeInstrumentFamily(family));
  } catch {
    // Instrument switching still works when storage is blocked.
  }
}

function getSoundModeLabels(family = getSelectedInstrumentFamily()) {
  return soundModePresets[normalizeInstrumentFamily(family)] || soundModePresets.keyboards;
}

function getDefaultSoundMode(family = getSelectedInstrumentFamily()) {
  return defaultSoundModes[normalizeInstrumentFamily(family)] || defaultSoundModes.keyboards;
}

function getSelectedSoundMode() {
  if (!document.body.classList.contains("home-dashboard-page")) {
    return "grand-piano";
  }

  const labels = getSoundModeLabels();

  return labels[selectedSoundMode] ? selectedSoundMode : getDefaultSoundMode();
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

function renderSoundOptions(family = getSelectedInstrumentFamily()) {
  const options = document.querySelector("[data-sound-options]");

  if (!options) {
    return;
  }

  const labels = getSoundModeLabels(family);
  const selectedMode = selectedSoundModesByInstrument[normalizeInstrumentFamily(family)] || getDefaultSoundMode(family);
  const buttons = Object.entries(labels).map(([value, label]) => {
    const button = document.createElement("button");
    const isSelected = value === selectedMode;

    button.className = `sound-option${isSelected ? " is-selected" : ""}`;
    button.type = "button";
    button.role = "option";
    button.setAttribute("aria-selected", String(isSelected));
    button.dataset.soundOption = "";
    button.dataset.soundValue = value;
    button.textContent = label;

    return button;
  });

  options.replaceChildren(...buttons);
  options.setAttribute("aria-label", getStringedInstrumentConfig(family) ? `${getStringedInstrumentConfig(family).name} sound options` : "Sound options");
}

function setSoundMode(mode, selector = document, { stopPlayback = false } = {}) {
  const labels = getSoundModeLabels();
  const normalizedMode = labels[mode] ? mode : getDefaultSoundMode();

  selectedSoundMode = normalizedMode;
  selectedSoundModesByInstrument[getSelectedInstrumentFamily()] = normalizedMode;
  selector.querySelectorAll("[data-sound-select-value]").forEach((element) => {
    element.textContent = labels[normalizedMode];
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

function bindSoundOptionButtons(selector, options, button) {
  options?.querySelectorAll("[data-sound-option]").forEach((option) => {
    if (option.dataset.soundOptionReady) {
      return;
    }

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

    option.dataset.soundOptionReady = "true";
  });
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
    const button = selector.querySelector("[data-sound-select-button]");
    const options = getSoundOptions(selector);

    if (selector.dataset.soundSelectorReady) {
      bindSoundOptionButtons(selector, options, button);
      setSoundMode(selectedSoundMode, selector);
      return;
    }

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

    bindSoundOptionButtons(selector, options, button);

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

function noteNamesForMode(notation = preferredNotation, noteNameMode = preferredNoteNameMode) {
  if (normalizeNoteNameMode(noteNameMode) === "solfege") {
    return normalizeAccidentalMode(notation) === "flat" ? solfegeFlatNames : solfegeSharpNames;
  }

  return normalizeAccidentalMode(notation) === "flat" ? flatNames : sharpNames;
}

function noteNameForValue(value, notation = preferredNotation, noteNameMode = preferredNoteNameMode) {
  const names = noteNamesForMode(notation, noteNameMode);
  return names[normalizeValue(value)];
}

function normalizeEnharmonicNote(note) {
  return sharpNames[normalizeValue(noteValues[String(note).trim()])];
}

function getDisplayNoteName(note, accidentalMode = preferredNotation, noteNameMode = preferredNoteNameMode) {
  return noteNameForValue(noteValues[String(note).trim()], accidentalMode, noteNameMode);
}

function getDisplayNoteList(accidentalMode = preferredNotation, noteNameMode = preferredNoteNameMode) {
  return rootSelectorNotes.map((note) => getDisplayNoteName(note, accidentalMode, noteNameMode));
}

function displayNoteName(note) {
  return getDisplayNoteName(note);
}

function displayNotes(notes) {
  return notes.map(displayNoteName).join(" - ");
}

function displayAccidentalSymbols(label) {
  return String(label).replaceAll("#", "♯").replaceAll("b", "♭");
}

function displaySelectorNoteName(note) {
  return displayAccidentalSymbols(displayNoteName(note));
}

function selectorNoteAccessibleName(note) {
  return displaySelectorNoteName(note).replaceAll("♯", " sharp").replaceAll("♭", " flat");
}

function displaySelectorChordSymbol(symbol) {
  const parsed = parseChordSymbol(symbol);

  if (!parsed) {
    return displayAccidentalSymbols(symbol);
  }

  return `${displaySelectorNoteName(parsed.root)}${qualitySuffix(parsed.quality)}`;
}

function getRootValue(root) {
  return noteValues[root?.trim()];
}

function chordName(root, quality) {
  return `${displayNoteName(root)} ${chordQualityInfo(quality).title}`;
}

function rootSelectorLabel(root) {
  return displaySelectorNoteName(root);
}

function selectedChordRootName(root) {
  return noteNameForValue(noteValues[root], preferredNotation, "letters");
}

function selectorModeRailMarkup() {
  return `
    <div class="selector-mode-rail notation-toggle" role="group" aria-label="Note display controls">
      <button class="selector-rail-button" type="button" data-notation="sharp" aria-label="Use sharp note names" title="Use sharp note names" aria-pressed="${preferredNotation === "sharp" ? "true" : "false"}">&#9839;</button>
      <button class="selector-rail-button" type="button" data-notation="flat" aria-label="Use flat note names" title="Use flat note names" aria-pressed="${preferredNotation === "flat" ? "true" : "false"}">&#9837;</button>
      <button class="selector-rail-button selector-rail-button-wide" type="button" data-note-name-toggle aria-label="Toggle Solfège note names" title="Toggle Solfège note names" aria-pressed="${preferredNoteNameMode === "solfege" ? "true" : "false"}">${preferredNoteNameMode === "solfege" ? "♪" : "ABC"}</button>
    </div>
  `;
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
  const normalizedQuality = normalizeChordQuality(quality);

  return {
    root: normalizedRoot,
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

function frequencyFromNoteValueOctave(value, octave) {
  if (!Number.isFinite(value) || !Number.isFinite(octave)) {
    return null;
  }

  const midiNumber = 12 * (octave + 1) + value;

  return 440 * 2 ** ((midiNumber - 69) / 12);
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
      label.textContent = activeLabels.get(noteValues[note]) || displayNoteName(note);
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

function guitarVoicingKey(root, quality) {
  if (!root || !Number.isInteger(noteValues[String(root).trim()])) {
    return "";
  }

  return `${normalizeNote(root)}:${normalizeChordQuality(quality)}`;
}

function guitarChordValueSet(root, quality) {
  const rootValue = normalizeValue(noteValues[normalizeNote(root)] ?? 0);

  return new Set(chordIntervalsForQuality(quality).map((interval) => normalizeValue(rootValue + interval)));
}

function guitarEssentialValueSet(root, quality) {
  const rootValue = normalizeValue(noteValues[normalizeNote(root)] ?? 0);
  const normalizedQuality = normalizeChordQuality(quality);
  const intervals = guitarEssentialIntervalsByQuality[normalizedQuality] || chordIntervalsForQuality(normalizedQuality);

  return new Set(intervals.map((interval) => normalizeValue(rootValue + interval)));
}

function guitarPatternForFrets(frets = []) {
  return frets.map((fret) => fret === null ? "x" : String(fret)).join("");
}

function formatGuitarVoicingLabel(label) {
  return String(label || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^([A-G](?:#|b)?)(?=(?:[EA]-shape|[EA]-minor|Compact|Barre))/i, "$1 ")
    .replace(/\b([A-G])\s*-\s*shape\b/gi, "$1-shape")
    .replace(/\b([EA])\s*-\s*minor\b/gi, "$1-minor");
}

function guitarVoicingLabelForSentence(label) {
  return formatGuitarVoicingLabel(label)
    .replace(/\bBarre\b/g, "barre")
    .replace(/\bShape\b/g, "shape");
}

function normalizeGuitarBarre(barre, frets) {
  if (!barre || typeof barre !== "object") {
    return null;
  }

  const stringsConfig = getStringedInstrumentTunings();
  const fret = Number.parseInt(barre.fret, 10);
  const strings = Array.isArray(barre.strings)
    ? barre.strings
        .map((stringIndex) => Number.parseInt(stringIndex, 10))
        .filter((stringIndex, index, all) => {
          return stringIndex >= 0
            && stringIndex < stringsConfig.length
            && all.indexOf(stringIndex) === index;
        })
    : [];

  if (!Number.isFinite(fret) || fret <= 0 || strings.length < 2) {
    return null;
  }

  const hasPlayedBarreNote = strings.some((stringIndex) => frets[stringIndex] === fret);

  if (!hasPlayedBarreNote) {
    return null;
  }

  return {
    fret,
    strings: strings.sort((a, b) => a - b),
  };
}

function inferGuitarFingers(frets, barre = null) {
  const fretted = [...new Set(frets.filter((fret) => Number.isFinite(fret) && fret > 0))].sort((a, b) => a - b);
  const fingerByFret = new Map();
  const nonBarreFrets = barre ? fretted.filter((fret) => fret !== barre.fret) : fretted;

  if (barre) {
    fingerByFret.set(barre.fret, 1);
  }

  nonBarreFrets.forEach((fret, index) => {
    fingerByFret.set(fret, Math.min(index + (barre ? 2 : 1), 4));
  });

  return frets.map((fret) => {
    if (!Number.isFinite(fret) || fret <= 0) {
      return null;
    }

    return fingerByFret.get(fret) || null;
  });
}

function normalizeGuitarFingers(fingers, frets, barre = null) {
  if (!Array.isArray(fingers) || fingers.length !== getStringedInstrumentTunings().length) {
    return inferGuitarFingers(frets, barre);
  }

  return fingers.map((finger, index) => {
    if (!Number.isFinite(frets[index]) || frets[index] <= 0) {
      return null;
    }

    const parsed = Number.parseInt(finger, 10);

    return parsed >= 1 && parsed <= 4 ? parsed : null;
  });
}

function guitarStringNote(string, fret) {
  if (fret === null || !Number.isFinite(fret)) {
    return {
      fret: null,
      note: "",
      value: null,
      octave: string.octave,
      state: "muted",
    };
  }

  const value = normalizeValue(string.value + fret);
  const octave = string.octave + Math.floor((string.value + fret) / 12);

  return {
    fret,
    note: sharpNames[value],
    value,
    octave,
    state: fret === 0 ? "open" : "fretted",
  };
}

function guitarVoicingValues(frets) {
  const stringsConfig = getStringedInstrumentTunings();

  return frets
    .map((fret, index) => {
      if (fret === null || !Number.isFinite(fret)) {
        return null;
      }

      return normalizeValue(stringsConfig[index].value + fret);
    })
    .filter((value) => value !== null);
}

function guitarVoicingFrettedSpan(frets) {
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);

  if (!fretted.length) {
    return 0;
  }

  return Math.max(...fretted) - Math.min(...fretted);
}

function guitarPlayedStringIndexes(frets) {
  return frets
    .map((fret, index) => fret === null ? null : index)
    .filter((index) => index !== null);
}

function guitarFrettedNotes(frets) {
  const stringsConfig = getStringedInstrumentTunings();

  return frets
    .map((fret, stringIndex) => {
      if (!Number.isFinite(fret) || fret <= 0) {
        return null;
      }

      return {
        stringIndex,
        fret,
        value: normalizeValue(stringsConfig[stringIndex].value + fret),
      };
    })
    .filter(Boolean);
}

function guitarFrettedSpan(frets) {
  return guitarVoicingFrettedSpan(frets);
}

function guitarMutedGapCount(frets) {
  const firstPlayed = frets.findIndex((fret) => fret !== null);
  const lastPlayed = frets.length - 1 - [...frets].reverse().findIndex((fret) => fret !== null);

  if (firstPlayed < 0 || lastPlayed < firstPlayed) {
    return 0;
  }

  return frets.slice(firstPlayed, lastPlayed + 1).filter((fret) => fret === null).length;
}

function guitarStringIndexesAreAdjacent(indexes) {
  if (indexes.length < 2) {
    return true;
  }

  const sorted = [...indexes].sort((a, b) => a - b);

  return sorted.every((stringIndex, index) => {
    return index === 0 || stringIndex === sorted[index - 1] + 1;
  });
}

function guitarInferGeneratedBarre(frets) {
  const fretted = guitarFrettedNotes(frets);

  if (fretted.length < 2) {
    return null;
  }

  const lowestFret = Math.min(...fretted.map((note) => note.fret));
  const lowestFretStrings = fretted
    .filter((note) => note.fret === lowestFret)
    .map((note) => note.stringIndex)
    .sort((a, b) => a - b);

  if (lowestFretStrings.length < 2) {
    return null;
  }

  const firstString = lowestFretStrings[0];
  const lastString = lowestFretStrings[lowestFretStrings.length - 1];
  const barreStrings = [];

  for (let stringIndex = firstString; stringIndex <= lastString; stringIndex += 1) {
    const fret = frets[stringIndex];

    if (fret === null || !Number.isFinite(fret) || fret < lowestFret) {
      return null;
    }

    barreStrings.push(stringIndex);
  }

  const isAdjacentPartial = guitarStringIndexesAreAdjacent(lowestFretStrings);
  const spansContinuousShape = barreStrings.length > lowestFretStrings.length;

  if (!isAdjacentPartial && !spansContinuousShape) {
    return null;
  }

  return {
    fret: lowestFret,
    strings: barreStrings,
  };
}

function guitarHasPlayableBarre(frets, barre) {
  const normalizedBarre = normalizeGuitarBarre(barre, frets);

  if (!normalizedBarre) {
    return false;
  }

  const touchedStrings = normalizedBarre.strings.filter((stringIndex) => frets[stringIndex] === normalizedBarre.fret);

  if (touchedStrings.length < 2) {
    return false;
  }

  const isAdjacentPartial = guitarStringIndexesAreAdjacent(touchedStrings);
  const firstString = normalizedBarre.strings[0];
  const lastString = normalizedBarre.strings[normalizedBarre.strings.length - 1];
  const coversPlayedGroupEdges = touchedStrings.includes(firstString) && touchedStrings.includes(lastString);
  const coversContinuousPlayedGroup = normalizedBarre.strings.every((stringIndex) => {
    const fret = frets[stringIndex];

    return fret !== null && Number.isFinite(fret) && fret >= normalizedBarre.fret;
  });

  return coversContinuousPlayedGroup && (isAdjacentPartial || coversPlayedGroupEdges);
}

function guitarIndependentFingerCount(frets, barre = null) {
  const hasBarre = guitarHasPlayableBarre(frets, barre);
  const barreStringSet = hasBarre ? new Set(barre.strings) : new Set();
  let count = hasBarre ? 1 : 0;

  guitarFrettedNotes(frets).forEach((note) => {
    if (hasBarre && note.fret === barre.fret && barreStringSet.has(note.stringIndex)) {
      return;
    }

    count += 1;
  });

  return count;
}

function guitarHasImpossibleFingerReuse(frets, barre = null) {
  const hasBarre = guitarHasPlayableBarre(frets, barre);
  const barreStringSet = hasBarre ? new Set(barre.strings) : new Set();
  const stringsByFret = new Map();

  guitarFrettedNotes(frets).forEach((note) => {
    if (hasBarre && note.fret === barre.fret && barreStringSet.has(note.stringIndex)) {
      return;
    }

    stringsByFret.set(note.fret, [...(stringsByFret.get(note.fret) || []), note.stringIndex]);
  });

  return [...stringsByFret.values()].some((stringIndexes) => {
    return stringIndexes.length > 1 && !guitarStringIndexesAreAdjacent(stringIndexes);
  });
}

function guitarOpenHighPositionConflict(frets) {
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);

  if (!fretted.length || !frets.includes(0)) {
    return false;
  }

  return Math.max(...fretted) > 5 && Math.min(...fretted) > 3;
}

function guitarBassInterval(frets, root) {
  const stringsConfig = getStringedInstrumentTunings();
  const rootValue = normalizeValue(noteValues[normalizeNote(root)]);
  const firstPlayedIndex = guitarPlayedStringIndexes(frets)[0];

  if (firstPlayedIndex === undefined) {
    return 0;
  }

  return normalizeValue(stringsConfig[firstPlayedIndex].value + frets[firstPlayedIndex] - rootValue);
}

function guitarStringSkipPenalty(frets) {
  const playedIndexes = guitarPlayedStringIndexes(frets);

  if (playedIndexes.length < 2) {
    return 0;
  }

  const firstPlayedIndex = playedIndexes[0];
  const lastPlayedIndex = playedIndexes[playedIndexes.length - 1];
  const mutedGapCount = guitarMutedGapCount(frets);
  const outerMutedPenalty = firstPlayedIndex > 1 ? 0.8 : 0;

  return mutedGapCount * 1.6 + outerMutedPenalty + Math.max(0, lastPlayedIndex - firstPlayedIndex + 1 - playedIndexes.length) * 0.45;
}

function guitarPlayabilityPenalty(frets, root, quality) {
  const normalizedQuality = normalizeChordQuality(quality);
  const inferredBarre = guitarInferGeneratedBarre(frets);
  const hasBarre = guitarHasPlayableBarre(frets, inferredBarre);
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);
  const maxFret = Math.max(...fretted, 0);
  const span = guitarFrettedSpan(frets);
  const independentFingerCount = guitarIndependentFingerCount(frets, inferredBarre);
  const openHighPenalty = guitarOpenHighPositionConflict(frets) ? 4.5 : 0;
  const fingerPenalty = Math.max(0, independentFingerCount - 3) * 1.15 + Math.max(0, independentFingerCount - 4) * 5;
  const bassInterval = guitarBassInterval(frets, root);
  const simpleTriads = new Set(["Major", "Minor", "Power", "Sus2", "Sus4"]);
  const bassPenalty = bassInterval === 0
    ? 0
    : simpleTriads.has(normalizedQuality)
      ? (bassInterval === 7 ? 1.8 : 4.2)
      : 2.4;
  const barreCredit = hasBarre ? -1.2 : 0;

  return maxFret * 0.45
    + span * (hasBarre ? 1.05 : 1.75)
    + guitarStringSkipPenalty(frets)
    + bassPenalty
    + fingerPenalty
    + openHighPenalty
    + barreCredit;
}

function isPlayableGeneratedGuitarVoicing(frets, root, quality) {
  const inferredBarre = guitarInferGeneratedBarre(frets);
  const hasBarre = guitarHasPlayableBarre(frets, inferredBarre);
  const span = guitarFrettedSpan(frets);
  const independentFingerCount = guitarIndependentFingerCount(frets, inferredBarre);
  const mutedGapCount = guitarMutedGapCount(frets);
  const playedCount = guitarPlayedStringIndexes(frets).length;
  const bassInterval = guitarBassInterval(frets, root);
  const simpleTriads = new Set(["Major", "Minor", "Power", "Sus2", "Sus4"]);

  if (playedCount < 3) {
    return false;
  }

  if (span > 4 && !hasBarre) {
    return false;
  }

  if (independentFingerCount > 4) {
    return false;
  }

  if (mutedGapCount > 1) {
    return false;
  }

  if (guitarOpenHighPositionConflict(frets)) {
    return false;
  }

  if (guitarHasImpossibleFingerReuse(frets, inferredBarre)) {
    return false;
  }

  if (simpleTriads.has(normalizeChordQuality(quality)) && playedCount <= 4 && bassInterval !== 0 && bassInterval !== 7) {
    return false;
  }

  return true;
}

function isValidGuitarVoicing(frets, root, quality) {
  const stringsConfig = getStringedInstrumentTunings();
  const fretRanges = getStringedInstrumentFretRanges();

  if (!Array.isArray(frets) || frets.length !== stringsConfig.length) {
    return false;
  }

  const normalizedRoot = normalizeNote(root);
  const rootValue = normalizeValue(noteValues[normalizedRoot]);
  const chordValues = guitarChordValueSet(normalizedRoot, quality);
  const essentialValues = guitarEssentialValueSet(normalizedRoot, quality);
  const playedValues = guitarVoicingValues(frets);
  const uniqueValues = new Set(playedValues);
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);
  const playedCount = playedValues.length;

  if (!playedCount || !uniqueValues.has(rootValue)) {
    return false;
  }

  if (Math.max(...fretted, 0) > fretRanges.extended) {
    return false;
  }

  if (guitarVoicingFrettedSpan(frets) > 5) {
    return false;
  }

  if (playedValues.some((value) => !chordValues.has(value))) {
    return false;
  }

  if ([...essentialValues].some((value) => !uniqueValues.has(value))) {
    return false;
  }

  return playedCount >= Math.min(essentialValues.size, stringsConfig.length);
}

function guitarVoicingLabel(root, quality, sourceLabel, index = 0) {
  const rootLabel = displayNoteName(normalizeNote(root));
  const qualityLabel = chordQualityInfo(quality).label;

  if (sourceLabel) {
    if (/^([A-G](?:#|b)?)(?=\s|$)/.test(sourceLabel)) {
      return formatGuitarVoicingLabel(sourceLabel.replace(/^([A-G](?:#|b)?)(?=\s|$)/, rootLabel));
    }

    return formatGuitarVoicingLabel(`${rootLabel} ${sourceLabel}`);
  }

  return formatGuitarVoicingLabel(`${rootLabel} ${qualityLabel} Voicing ${index + 1}`);
}

function normalizeGuitarVoicing(root, quality, voicing, index = 0) {
  const frets = Array.isArray(voicing?.frets) ? voicing.frets.map((fret) => fret === null ? null : Number(fret)) : [];

  if (!isValidGuitarVoicing(frets, root, quality)) {
    return null;
  }

  const barre = normalizeGuitarBarre(voicing.barre, frets);
  const fingers = normalizeGuitarFingers(voicing.fingers, frets, barre);

  return {
    label: formatGuitarVoicingLabel(voicing.label || guitarVoicingLabel(root, quality, "", index)),
    frets,
    fingers,
    barre,
    source: voicing.source || "curated",
  };
}

function guitarRootFretCandidates(root, stringIndex) {
  const stringsConfig = getStringedInstrumentTunings();
  const fretRanges = getStringedInstrumentFretRanges();
  const rootValue = normalizeValue(noteValues[normalizeNote(root)]);
  const stringValue = stringsConfig[stringIndex]?.value ?? stringsConfig[0].value;

  return Array.from({ length: fretRanges.extended + 1 }, (_, fret) => fret)
    .filter((fret) => normalizeValue(stringValue + fret) === rootValue);
}

function buildMovableGuitarVoicings(root, quality) {
  const normalizedQuality = normalizeChordQuality(quality);
  const fretRanges = getStringedInstrumentFretRanges();
  const templates = getStringedInstrumentMovableTemplates().filter((template) => template.qualities.includes(normalizedQuality));

  return templates.flatMap((template) => {
    return guitarRootFretCandidates(root, template.rootString)
      .map((rootFret) => {
        const frets = template.offsets.map((offset) => {
          if (offset === null) {
            return null;
          }

          const fret = rootFret + offset;

          return fret >= 0 && fret <= fretRanges.extended ? fret : Number.NaN;
        });

        if (frets.some((fret) => Number.isNaN(fret))) {
          return null;
        }

        const barre = template.barre
          ? {
              fret: rootFret + (Number.parseInt(template.barre.offset, 10) || 0),
              strings: template.barre.strings,
            }
          : null;

        return {
          label: guitarVoicingLabel(root, normalizedQuality, template.label),
          frets,
          fingers: template.fingers,
          barre,
          source: "movable",
        };
      })
      .filter(Boolean);
  });
}

function guitarCandidateFretsForString(stringIndex, chordValues, position) {
  const frets = [];
  const stringsConfig = getStringedInstrumentTunings();
  const fretRanges = getStringedInstrumentFretRanges();

  for (let fret = 0; fret <= fretRanges.extended; fret += 1) {
    const inPosition = fret === 0 || (fret >= position && fret <= position + 4);

    if (inPosition && chordValues.has(normalizeValue(stringsConfig[stringIndex].value + fret))) {
      frets.push(fret);
    }
  }

  return [null, ...frets];
}

function scoreGuitarVoicing(frets, root, quality = "Major") {
  const stringsConfig = getStringedInstrumentTunings();
  const rootValue = normalizeValue(noteValues[normalizeNote(root)]);
  const playedIndexes = guitarPlayedStringIndexes(frets);
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);
  const openCount = frets.filter((fret) => fret === 0).length;
  const playedCount = playedIndexes.length;
  const distinctFrets = new Set(fretted).size;
  const firstPlayedIndex = playedIndexes[0] ?? 0;
  const bassValue = frets[firstPlayedIndex] === null
    ? rootValue
    : normalizeValue(stringsConfig[firstPlayedIndex].value + frets[firstPlayedIndex]);
  const bassRootPenalty = bassValue === rootValue ? 0 : 2.6;
  const maxFret = Math.max(...fretted, 0);
  const span = guitarVoicingFrettedSpan(frets);
  const mutedGapPenalty = guitarMutedGapCount(frets) * 1.4;
  const playabilityPenalty = guitarPlayabilityPenalty(frets, root, quality);

  return maxFret * 0.34
    + span * 1.05
    + distinctFrets * 0.42
    + mutedGapPenalty
    + bassRootPenalty
    + playabilityPenalty
    - openCount * 0.18
    - playedCount * 0.06;
}

function findGeneratedGuitarVoicings(root, quality) {
  const normalizedQuality = normalizeChordQuality(quality);
  const chordValues = guitarChordValueSet(root, normalizedQuality);
  const stringsConfig = getStringedInstrumentTunings();
  const candidates = [];
  const seen = new Set();

  for (let position = 1; position <= getStringedGeneratedSearchMaxPosition(); position += 1) {
    const stringCandidates = stringsConfig.map((_, index) => {
      return guitarCandidateFretsForString(index, chordValues, position);
    });

    const walk = (stringIndex, frets) => {
      if (candidates.length > 180) {
        return;
      }

      if (stringIndex >= stringsConfig.length) {
        if (!isValidGuitarVoicing(frets, root, normalizedQuality)) {
          return;
        }

        if (!isPlayableGeneratedGuitarVoicing(frets, root, normalizedQuality)) {
          return;
        }

        const pattern = guitarPatternForFrets(frets);

        if (seen.has(pattern)) {
          return;
        }

        const barre = guitarInferGeneratedBarre(frets);

        seen.add(pattern);
        candidates.push({
          label: guitarVoicingLabel(root, normalizedQuality, "Compact Voicing", candidates.length),
          frets: [...frets],
          barre,
          source: "generated",
          score: scoreGuitarVoicing(frets, root, normalizedQuality),
        });
        return;
      }

      stringCandidates[stringIndex].forEach((fret) => {
        frets.push(fret);
        walk(stringIndex + 1, frets);
        frets.pop();
      });
    };

    walk(0, []);
  }

  return candidates
    .sort((a, b) => a.score - b.score)
    .slice(0, getStringedGeneratedVoicingLimit())
    .map((voicing, index) => ({
      label: guitarVoicingLabel(root, normalizedQuality, "", index),
      frets: voicing.frets,
      barre: voicing.barre,
      source: "generated",
    }));
}

function uniqueGuitarVoicings(voicings) {
  const seen = new Set();

  return voicings.filter((voicing) => {
    const pattern = guitarPatternForFrets(voicing.frets);

    if (seen.has(pattern)) {
      return false;
    }

    seen.add(pattern);
    return true;
  });
}

function getGuitarVoicings(root, quality) {
  const key = guitarVoicingKey(root, quality);
  const normalizedRoot = key.split(":")[0] || normalizeNote(root || "C");
  const normalizedQuality = normalizeChordQuality(quality);
  const family = getSelectedInstrumentFamily();
  const cacheKey = `${family}:${normalizedRoot}:${normalizedQuality}:${preferredNotation}`;

  if (guitarVoicingCache.has(cacheKey)) {
    return guitarVoicingCache.get(cacheKey);
  }

  const curated = (getStringedInstrumentVoicingCatalog()[key] || [])
    .map((voicing, index) => normalizeGuitarVoicing(normalizedRoot, normalizedQuality, voicing, index))
    .filter(Boolean);
  const movable = buildMovableGuitarVoicings(normalizedRoot, normalizedQuality)
    .map((voicing, index) => normalizeGuitarVoicing(normalizedRoot, normalizedQuality, voicing, curated.length + index))
    .filter(Boolean);
  const generated = findGeneratedGuitarVoicings(normalizedRoot, normalizedQuality)
    .map((voicing, index) => normalizeGuitarVoicing(normalizedRoot, normalizedQuality, voicing, curated.length + movable.length + index))
    .filter(Boolean);

  const voicings = uniqueGuitarVoicings([...curated, ...movable, ...generated]);

  guitarVoicingCache.set(cacheKey, voicings);

  return voicings;
}

function normalizeGuitarVoicingIndex(index, voicingCount) {
  if (!voicingCount) {
    return 0;
  }

  const parsedIndex = Number.parseInt(index, 10);
  const safeIndex = Number.isNaN(parsedIndex) ? 0 : parsedIndex;

  return ((safeIndex % voicingCount) + voicingCount) % voicingCount;
}

function getAvailableGuitarVoicings(root, quality) {
  return getGuitarVoicings(root, quality);
}

function syncCurrentGuitarVoicing(root, quality, requestedIndex = guitarState.chordVoicingIndex) {
  const voicings = getAvailableGuitarVoicings(root, quality);
  const voicingIndex = normalizeGuitarVoicingIndex(requestedIndex, voicings.length);
  const currentGuitarVoicing = voicings[voicingIndex] || null;

  guitarState.chordVoicingIndex = voicingIndex;

  return {
    voicings,
    voicingIndex,
    currentGuitarVoicing,
  };
}

function getGuitarFretRange() {
  return getStringedInstrumentFretRanges().extended;
}

function setGuitarFretRange(range) {
  guitarState.fretRange = getStringedInstrumentFretRanges().extended;
}

function guitarRenderContext(notes, options = {}) {
  const stringsConfig = getStringedInstrumentTunings();
  const parsed = options.symbol ? parseChordSymbol(options.symbol) : null;
  const root = parsed?.root || options.root || notes[0] || "C";
  const quality = parsed?.quality || options.quality || "Major";
  const normalizedQuality = normalizeChordQuality(quality);
  const voicings = getGuitarVoicings(root, quality);
  const voicingIndex = normalizeGuitarVoicingIndex(options.voicingIndex, voicings.length);
  const voicing = voicings[voicingIndex] || null;
  const normalizedNotes = notes.map((note) => normalizeNote(note));

  if (!voicing) {
    return {
      supported: false,
      label: "Voicing coming soon",
      pattern: "",
      root,
      quality: normalizedQuality,
      notes: normalizedNotes,
      strings: stringsConfig.map((string) => ({
        ...string,
        ...guitarStringNote(string, null),
        finger: null,
      })),
      barre: null,
      compact: false,
      voicingCount: 0,
      voicingIndex: 0,
    };
  }

  const strings = stringsConfig.map((string, index) => ({
    ...string,
    ...guitarStringNote(string, voicing.frets[index]),
    finger: voicing.fingers?.[index] || null,
  }));
  const playedValues = new Set(strings.map((string) => string.value).filter((value) => value !== null));
  const compact = [...guitarChordValueSet(root, normalizedQuality)].some((value) => !playedValues.has(value));

  return {
    supported: true,
    label: voicing.label,
    pattern: guitarPatternForFrets(voicing.frets),
    root,
    quality: normalizedQuality,
    notes: normalizedNotes,
    strings,
    fingers: voicing.fingers || [],
    barre: voicing.barre || null,
    compact,
    voicingCount: voicings.length,
    voicingIndex,
  };
}

function guitarVisibleFretWindow() {
  const fretRanges = getStringedInstrumentFretRanges();

  return {
    startFret: 1,
    fretCount: fretRanges.extended,
    showNut: true,
  };
}

function shouldShowGuitarFretLabel(fret, fretCount) {
  return fretCount <= getStringedInstrumentFretRanges().compact || [3, 5, 7, 9, 12].includes(fret);
}

function guitarActiveFretRange(strings) {
  const fretted = strings
    .map((string) => string.fret)
    .filter((fret) => Number.isFinite(fret) && fret > 0);

  if (!fretted.length) {
    return null;
  }

  return {
    min: Math.min(...fretted),
    max: Math.max(...fretted),
  };
}

function guitarBarreGeometry(voicing, fretWindow, left, top, stringGap, fretWidth) {
  const barre = voicing.barre;
  const stringCount = getStringedInstrumentTunings().length;

  if (!barre) {
    return null;
  }

  const visibleFretIndex = barre.fret - fretWindow.startFret;

  if (visibleFretIndex < 0 || visibleFretIndex >= fretWindow.fretCount) {
    return null;
  }

  const strings = barre.strings.filter((stringIndex) => stringIndex >= 0 && stringIndex < stringCount);

  if (strings.length < 2) {
    return null;
  }

  return {
    x: left + (visibleFretIndex + 0.5) * fretWidth,
    y1: top + Math.min(...strings) * stringGap,
    y2: top + Math.max(...strings) * stringGap,
    label: `BARRE ${barre.fret}F`,
  };
}

function createSvgText(className, x, y, textContent) {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");

  text.setAttribute("class", className);
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.textContent = textContent;

  return text;
}

function createGuitarChordDiagram(notes, preserveLabels = false, isPlaying = false, currentNotes = null, options = {}) {
  const voicing = guitarRenderContext(notes, options);
  const stringCount = getStringedInstrumentTunings().length;
  const fretRanges = getStringedInstrumentFretRanges();
  const currentValues = currentNotes
    ? new Set(currentNotes.map((note) => normalizeValue(noteValues[normalizeNote(note)])))
    : null;
  const activeLabels = new Map(
    preserveLabels
      ? notes.map((note) => [normalizeValue(noteValues[note]), note])
      : []
  );
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const fretWindow = guitarVisibleFretWindow(voicing.strings);
  const left = 78;
  const right = 510;
  const top = 44;
  const stringGap = 26;
  const fretWidth = (right - left) / fretWindow.fretCount;
  const bottom = top + stringGap * (stringCount - 1);
  const showFingering = Boolean(options.showFingering);
  const activeFretRange = showFingering ? guitarActiveFretRange(voicing.strings) : null;
  const noteMarkers = [];

  svg.setAttribute("class", `guitar-svg${isPlaying ? " is-playing" : ""}${currentValues ? " has-current-note" : ""}${voicing.supported ? "" : " is-fallback"}${fretWindow.fretCount === fretRanges.extended ? " is-extended" : ""}`);
  svg.setAttribute("viewBox", "0 0 560 232");
  svg.setAttribute("aria-hidden", "true");
  svg.dataset.voicing = voicing.pattern;
  svg.dataset.voicingLabel = voicing.label;

  if (activeFretRange) {
    const highlightStart = Math.max(activeFretRange.min, fretWindow.startFret);
    const highlightEnd = Math.min(activeFretRange.max, fretWindow.startFret + fretWindow.fretCount - 1);

    if (highlightEnd >= highlightStart) {
      const highlight = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      highlight.setAttribute("class", "guitar-active-fret-range");
      highlight.setAttribute("x", left + (highlightStart - fretWindow.startFret) * fretWidth + 3);
      highlight.setAttribute("y", top - 12);
      highlight.setAttribute("width", (highlightEnd - highlightStart + 1) * fretWidth - 6);
      highlight.setAttribute("height", bottom - top + 24);
      highlight.setAttribute("rx", 8);
      svg.appendChild(highlight);
    }
  }

  Array.from({ length: fretWindow.fretCount + 1 }).forEach((_, fretIndex) => {
    const x = left + fretIndex * fretWidth;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const actualFret = fretWindow.startFret + fretIndex - 1;
    const isNut = fretWindow.showNut && fretIndex === 0;
    const fretLineNumber = fretWindow.startFret + fretIndex - 1;
    const isActiveFretLine = activeFretRange
      && fretIndex > 0
      && fretLineNumber >= activeFretRange.min
      && fretLineNumber <= activeFretRange.max;

    line.setAttribute("class", `${isNut ? "guitar-nut" : "guitar-fret"}${isActiveFretLine ? " is-active-fret" : ""}`);
    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", top - 10);
    line.setAttribute("y2", bottom + 10);
    svg.appendChild(line);

    if (fretIndex > 0) {
      const fretNumber = fretWindow.startFret + fretIndex - 1;

      if ([3, 5, 7, 9, 12].includes(fretNumber)) {
        const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        marker.setAttribute("class", "guitar-fret-marker");
        marker.setAttribute("cx", x - fretWidth / 2);
        marker.setAttribute("cy", bottom + 25);
        marker.setAttribute("r", fretNumber === 12 ? 4.5 : 3.2);
        svg.appendChild(marker);
      }

      if (shouldShowGuitarFretLabel(fretNumber, fretWindow.fretCount)) {
        svg.appendChild(createSvgText("guitar-fret-label", x - fretWidth / 2, top - 22, String(fretNumber)));
      }
    } else if (!fretWindow.showNut) {
      svg.appendChild(createSvgText("guitar-base-fret-label", left - 28, top - 22, `${actualFret + 1}fr`));
    }
  });

  voicing.strings.forEach((string, index) => {
    const y = top + index * stringGap;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("class", "guitar-string");
    line.setAttribute("x1", left);
    line.setAttribute("x2", right);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    svg.appendChild(line);

    svg.appendChild(createSvgText("guitar-string-label", left - 54, y + 5, string.label));

    if (string.fret === null) {
      if (voicing.supported) {
        svg.appendChild(createSvgText("guitar-string-indicator guitar-muted", left - 24, y + 6, "X"));
      }
      return;
    }

    const isOpen = string.fret === 0;
    const visibleFretIndex = string.fret - fretWindow.startFret;
    const x = isOpen ? left + 15 : left + (visibleFretIndex + 0.5) * fretWidth;

    if (isOpen) {
      svg.appendChild(createSvgText("guitar-string-indicator guitar-open-indicator", left - 24, y + 6, "O"));
    }

    if (!voicing.supported || (!isOpen && (visibleFretIndex < 0 || visibleFretIndex >= fretWindow.fretCount))) {
      return;
    }

    const isCurrentNote = currentValues?.has(string.value);
    const finger = showFingering && !isOpen ? string.finger : null;

    noteMarkers.push({
      x,
      y,
      isOpen,
      isCurrentNote,
      value: string.value,
      finger,
    });
  });

  if (showFingering && voicing.supported) {
    const barre = guitarBarreGeometry(voicing, fretWindow, left, top, stringGap, fretWidth);

    if (barre) {
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      const labelWidth = Math.max(58, barre.label.length * 6.2);
      const labelBackground = document.createElementNS("http://www.w3.org/2000/svg", "rect");

      line.setAttribute("class", "guitar-barre-line");
      line.setAttribute("x1", barre.x);
      line.setAttribute("x2", barre.x);
      line.setAttribute("y1", barre.y1 - 11);
      line.setAttribute("y2", barre.y2 + 11);
      svg.appendChild(line);

      labelBackground.setAttribute("class", "guitar-barre-label-bg");
      labelBackground.setAttribute("x", barre.x - labelWidth / 2);
      labelBackground.setAttribute("y", top - 18);
      labelBackground.setAttribute("width", labelWidth);
      labelBackground.setAttribute("height", 16);
      labelBackground.setAttribute("rx", 4);
      svg.appendChild(labelBackground);
      svg.appendChild(createSvgText("guitar-barre-label", barre.x, top - 6, barre.label));
    }
  }

  noteMarkers.forEach((markerData) => {
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const markerClasses = [
      "guitar-note",
      markerData.isOpen ? "guitar-open-note" : "",
      markerData.finger ? "has-finger-number" : "",
      currentValues ? (markerData.isCurrentNote ? "is-current-note" : "is-held-note") : "",
    ].filter(Boolean);
    const labelClasses = [
      "guitar-note-label",
      markerData.finger ? "guitar-finger-label" : "",
      currentValues ? (markerData.isCurrentNote ? "is-current-note-label" : "is-held-note-label") : "",
    ].filter(Boolean);

    marker.setAttribute("class", markerClasses.join(" "));
    marker.setAttribute("cx", markerData.x);
    marker.setAttribute("cy", markerData.y);
    marker.setAttribute("r", markerData.isOpen ? 9 : fretWindow.fretCount === fretRanges.extended ? 10.5 : 13);
    svg.appendChild(marker);

    svg.appendChild(createSvgText(
      labelClasses.join(" "),
      markerData.x,
      markerData.y + 5,
      markerData.finger ? String(markerData.finger) : activeLabels.get(markerData.value) || noteLabelForValue(markerData.value)
    ));
  });

  if (!voicing.supported) {
    svg.appendChild(createSvgText("guitar-fallback-title", (left + right) / 2, bottom + 33, `${getStringedInstrumentName()} voicing coming soon`));
    svg.appendChild(createSvgText("guitar-fallback-notes", (left + right) / 2, bottom + 53, displayChordNotesInline(notes, " - ")));
  }

  return svg;
}

function noteLabelForValue(value) {
  return displayNoteName(sharpNames[normalizeValue(value)]);
}

function createInstrumentDiagram(notes, preserveLabels = false, isPlaying = false, octaveCount = 1, currentNotes = null, options = {}) {
  if (isStringedInstrumentMode()) {
    return createGuitarChordDiagram(notes, preserveLabels, isPlaying, currentNotes, options);
  }

  return createKeyboard(notes, preserveLabels, isPlaying, octaveCount);
}

function chordCardNotes(card) {
  return card.dataset.notes.split(",");
}

function chordCardOctaveCount(card) {
  return card.dataset.octaves === "2" ? 2 : 1;
}

function guitarReadableNoteList(notes) {
  const labels = notes.map(displayNoteName);

  if (labels.length <= 2) {
    return labels.join(" and ");
  }

  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

function guitarChordRenderOptions(card) {
  const { voicingIndex } = syncCurrentGuitarVoicing(card.dataset.root, card.dataset.quality);

  return {
    root: card.dataset.root,
    quality: card.dataset.quality,
    voicingIndex,
    showFingering: true,
  };
}

function currentGuitarChordVoicing(card) {
  return guitarRenderContext(chordCardNotes(card), guitarChordRenderOptions(card));
}

function guitarVoicingPlayedStrings(context) {
  if (!context?.supported || !Array.isArray(context.strings)) {
    return [];
  }

  return context.strings.filter((string) => {
    return string.state !== "muted"
      && string.fret !== null
      && Number.isFinite(string.value)
      && Number.isFinite(string.octave);
  });
}

function guitarVoicingFrequenciesFromContext(context) {
  return guitarVoicingPlayedStrings(context)
    .map((string) => frequencyFromNoteValueOctave(string.value, string.octave))
    .filter((frequency) => Number.isFinite(frequency));
}

function guitarVoicingNoteNamesFromContext(context) {
  return guitarVoicingPlayedStrings(context).map((string) => string.note);
}

function guitarVoicingPlaybackFromContext(context) {
  const frequencies = guitarVoicingFrequenciesFromContext(context);
  const notes = guitarVoicingNoteNamesFromContext(context);

  return frequencies.length ? { frequencies, notes } : null;
}

function guitarVoicingPlaybackFromCard(card) {
  return card ? guitarVoicingPlaybackFromContext(currentGuitarChordVoicing(card)) : null;
}

function guitarVoicingPlaybackFromSymbol(symbol, voicingIndex = 0) {
  const notes = chordNotesFromSymbol(symbol);

  if (!notes.length) {
    return null;
  }

  return guitarVoicingPlaybackFromContext(guitarRenderContext(notes, { symbol, voicingIndex }));
}

function pianoPlayStyleLabel() {
  return pianoPlayStyleArpeggio ? "ARP" : "BLOCK";
}

function pianoPlayStyleModeName() {
  return pianoPlayStyleArpeggio ? "Arpeggio" : "Block";
}

function pianoPlayStyleAriaLabel() {
  return `Toggle piano play style. Current mode: ${pianoPlayStyleModeName()}`;
}

function syncPianoPlayStyleToggle(button) {
  if (!button) {
    return;
  }

  button.textContent = pianoPlayStyleLabel();
  button.setAttribute("aria-pressed", String(pianoPlayStyleArpeggio));
  button.setAttribute("aria-label", pianoPlayStyleAriaLabel());
}

function syncPianoPlayStyleToggles() {
  if (isStringedInstrumentMode()) {
    return;
  }

  document.querySelectorAll("[data-piano-play-style-toggle], [data-home-progression-play-style-toggle]").forEach(syncPianoPlayStyleToggle);
}

function togglePianoPlayStyle() {
  pianoPlayStyleArpeggio = !pianoPlayStyleArpeggio;
  syncPianoPlayStyleToggles();
}

function guitarStrumPickingLabel() {
  return homeProgressionState.arpeggio ? "PICK" : "STRUM";
}

function guitarStrumPickingModeName() {
  return homeProgressionState.arpeggio ? "Picking" : "Strum";
}

function guitarStrumPickingAriaLabel() {
  return `Toggle ${getStringedInstrumentArticle()} play mode. Current mode: ${guitarStrumPickingModeName()}`;
}

function syncGuitarStrumPickingToggle(button) {
  if (!button) {
    return;
  }

  button.textContent = guitarStrumPickingLabel();
  button.setAttribute("aria-pressed", String(homeProgressionState.arpeggio));
  button.setAttribute("aria-label", guitarStrumPickingAriaLabel());
}

function syncGuitarStrumPickingToggles() {
  if (!isStringedInstrumentMode()) {
    return;
  }

  document.querySelectorAll("[data-piano-play-style-toggle], [data-home-progression-play-style-toggle]").forEach(syncGuitarStrumPickingToggle);
}

function toggleGuitarStrumPickingMode() {
  homeProgressionState.arpeggio = !homeProgressionState.arpeggio;
  syncGuitarStrumPickingToggles();
}

function syncGuitarFretToggleButton(card, button) {
  if (!button) {
    return;
  }

  const fretRange = getGuitarFretRange();
  const fretRanges = getStringedInstrumentFretRanges();

  card.dataset.guitarFretRange = String(fretRange);
  card.classList.toggle("is-twelve-frets", fretRange === fretRanges.extended);
  syncGuitarStrumPickingToggle(button);
}

function setGuitarFretRangeMode(card, button, fretRange) {
  setGuitarFretRange(fretRange);
  syncGuitarFretToggleButton(card, button);
  renderChordCardKeyboard(card);
  updateProgressionAnimationLabels();
}

function removeGuitarChordControls(card) {
  card.querySelectorAll("[data-guitar-voicing-control]").forEach((control) => control.remove());
}

function isHomeProgressionsCard(card) {
  return Boolean(
    card?.matches?.("[data-major-chord-card]")
    && homeProgressionState.mode === "progressions"
    && card.closest("[data-major-chord-page]")?.classList.contains("is-progressions-mode")
  );
}

function syncGuitarChordControls(card) {
  if (isHomeProgressionsCard(card)) {
    removeGuitarChordControls(card);
    return;
  }

  const instrumentCard = card.querySelector(".guitar-card");

  if (!instrumentCard) {
    removeGuitarChordControls(card);
    return;
  }

  const { voicings, currentGuitarVoicing } = syncCurrentGuitarVoicing(card.dataset.root, card.dataset.quality);
  const voicingLabel = currentGuitarVoicing?.label || "Voicing coming soon";
  let control = instrumentCard.querySelector("[data-guitar-voicing-control]");
  const legendRow = instrumentCard.querySelector(".keyboard-legend-row");
  const legend = instrumentCard.querySelector(".keyboard-legend");

  syncGuitarFretToggleButton(card, card.querySelector("[data-piano-play-style-toggle]"));

  if (!control) {
    control = document.createElement("div");
    control.className = "guitar-voicing-control";
    control.dataset.guitarVoicingControl = "";
    control.innerHTML = `
      <span class="guitar-voicing-kicker">VOICING</span>
      <strong data-guitar-voicing-name></strong>
      <button class="guitar-next-voicing" type="button" data-guitar-next-voicing>NEXT VOICING</button>
    `;
    if (legendRow) {
      legendRow.insertAdjacentElement("afterend", control);
    } else if (legend) {
      legend.insertAdjacentElement("afterend", control);
    } else {
      instrumentCard.appendChild(control);
    }
  }

  control.querySelector("[data-guitar-voicing-name]").textContent = voicingLabel;

  const button = control.querySelector("[data-guitar-next-voicing]");
  const canCycle = voicings.length > 1;

  button.disabled = !canCycle;
  button.setAttribute("aria-disabled", String(!canCycle));
  button.setAttribute("aria-label", canCycle ? `Next voicing after ${voicingLabel}` : `${voicingLabel} is the only voicing`);

  if (!guitarNextVoicingButtons.has(button)) {
    button.addEventListener("click", (event) => {
      const currentCard = event.currentTarget.closest("[data-dynamic-chord-card], [data-major-chord-card]");

      if (!currentCard) {
        return;
      }

      const { voicings: currentVoicings, voicingIndex } = syncCurrentGuitarVoicing(
        currentCard.dataset.root,
        currentCard.dataset.quality
      );

      if (currentVoicings.length <= 1) {
        return;
      }

      guitarState.chordVoicingIndex = normalizeGuitarVoicingIndex(voicingIndex + 1, currentVoicings.length);
      renderChordCardKeyboard(currentCard);
      syncGuitarChordAboutElements(currentCard);
    });
    guitarNextVoicingButtons.add(button);
  }
}

function renderChordCardKeyboard(card, notes = chordCardNotes(card), isPlaying = false, currentNotes = null) {
  const keyboard = card.querySelector(".keyboard");

  if (!keyboard) {
    return;
  }

  if (isHomeProgressionsCard(card)) {
    removeGuitarChordControls(card);
    updateProgressionAnimationLabels();
    return;
  }

  if (isStringedInstrumentMode()) {
    syncGuitarChordControls(card);
    keyboard.replaceChildren(createInstrumentDiagram(
      notes,
      card.hasAttribute("data-preserve-spelling"),
      isPlaying,
      chordCardOctaveCount(card),
      currentNotes,
      guitarChordRenderOptions(card)
    ));
    return;
  }

  removeGuitarChordControls(card);
  keyboard.replaceChildren(createInstrumentDiagram(notes, card.hasAttribute("data-preserve-spelling"), isPlaying, chordCardOctaveCount(card), currentNotes));
}

function resetChordPlaybackKeyboards() {
  document.querySelectorAll(".card[data-notes], [data-dynamic-chord-card][data-notes], [data-major-chord-card][data-notes]").forEach((card) => {
    renderChordCardKeyboard(card);
  });
}

function chordNoteSequenceStartOffset(includeNoteSequence = true) {
  return includeNoteSequence ? 0 : chordNoteStartOffset;
}

function chordStartOffset() {
  return isStringedInstrumentMode() ? startDelay : 0;
}

function scheduleChordKeyboardPlayback(card, notes, includeNoteSequence = true, noteSequence = notes, { playbackStartOffset = startDelay, noteSequenceStartOffset = chordNoteStartOffset } = {}) {
  if (!card) {
    return;
  }

  if (!includeNoteSequence) {
    schedulePlayback(() => renderChordCardKeyboard(card, notes, true), playbackStartOffset);
    schedulePlayback(() => renderChordCardKeyboard(card), playbackStartOffset + chordDuration);
    return;
  }

  if (isStringedInstrumentMode()) {
    schedulePlayback(() => renderChordCardKeyboard(card, notes, true), playbackStartOffset);
  } else {
    schedulePlayback(() => renderChordCardKeyboard(card, [], true), playbackStartOffset);
  }

  noteSequence.forEach((note, index) => {
    const noteStart = playbackStartOffset + noteSequenceStartOffset + index * chordNoteSpacing;
    schedulePlayback(() => {
      if (isStringedInstrumentMode()) {
        renderChordCardKeyboard(card, notes, true, [note]);
        return;
      }

      renderChordCardKeyboard(card, [note], true);
    }, noteStart);
  });

  schedulePlayback(() => renderChordCardKeyboard(card), chordPlaybackDuration(noteSequence.length, includeNoteSequence, {
    playbackStartOffset,
    noteSequenceStartOffset,
  }));
}

function chordPlaybackDuration(noteCount = 3, includeNoteSequence = true, { playbackStartOffset = startDelay, noteSequenceStartOffset = chordNoteStartOffset } = {}) {
  if (!includeNoteSequence) {
    return playbackStartOffset + chordDuration + 0.35;
  }

  return playbackStartOffset + noteSequenceStartOffset + Math.max(noteCount - 1, 0) * chordNoteSpacing + chordNoteDuration + 0.1;
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

function getGuitarDriveCurve() {
  if (guitarDriveCurve) {
    return guitarDriveCurve;
  }

  const samples = 512;
  guitarDriveCurve = new Float32Array(samples);

  for (let index = 0; index < samples; index += 1) {
    const x = (index * 2) / samples - 1;
    guitarDriveCurve[index] = Math.tanh(x * 2.4);
  }

  return guitarDriveCurve;
}

function createPsycheEchoBus(destination) {
  const input = audioContext.createGain();
  const dry = audioContext.createGain();
  const wet = audioContext.createGain();
  const delay = audioContext.createDelay(0.5);
  const feedback = audioContext.createGain();
  const tone = audioContext.createBiquadFilter();

  dry.gain.value = 0.84;
  wet.gain.value = 0.24;
  delay.delayTime.value = 0.18;
  feedback.gain.value = 0.22;
  tone.type = "lowpass";
  tone.frequency.value = 2600;

  input.connect(dry);
  input.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(tone);
  tone.connect(wet);
  dry.connect(destination);
  wet.connect(destination);

  return input;
}

function createGuitarPlaybackOutput(destination, mode = "acoustic") {
  return mode === "psyche" || mode === "hawaii" ? createPsycheEchoBus(destination) : destination;
}

function playGuitarPluck(frequency, startTime, duration = 1.1, destination = audioContext.destination, mode = "acoustic", velocity = 1) {
  const filter = audioContext.createBiquadFilter();
  const noteGain = audioContext.createGain();
  const peak = mode === "electric"
    ? 0.14 * velocity
    : mode === "psyche"
      ? 0.105 * velocity
      : mode === "banjo"
        ? 0.115 * velocity
        : mode === "hawaii"
          ? 0.12 * velocity
          : 0.13 * velocity;
  const releaseDuration = mode === "psyche"
    ? Math.min(duration, 0.72)
    : mode === "banjo"
      ? Math.min(duration, 0.55)
      : mode === "hawaii"
        ? Math.min(duration, 0.96)
        : Math.min(duration, 1.08);
  const oscillatorConfigs = mode === "psyche"
    ? [
        { type: "triangle", ratio: 2, detune: -5, gain: 0.7 },
        { type: "triangle", ratio: 2, detune: 8, gain: 0.58 },
        { type: "sine", ratio: 4, detune: 0, gain: 0.22 },
      ]
    : mode === "electric"
      ? [
          { type: "sawtooth", ratio: 1, detune: -4, gain: 0.42 },
          { type: "triangle", ratio: 1, detune: 5, gain: 0.74 },
          { type: "sine", ratio: 2, detune: 0, gain: 0.24 },
        ]
      : mode === "banjo"
        ? [
            { type: "square", ratio: 1, detune: -2, gain: 0.28 },
            { type: "triangle", ratio: 2, detune: 4, gain: 0.78 },
            { type: "sine", ratio: 3, detune: 0, gain: 0.18 },
          ]
        : mode === "hawaii"
          ? [
              { type: "triangle", ratio: 1, detune: -5, gain: 0.86 },
              { type: "sine", ratio: 1, detune: 6, gain: 0.56 },
              { type: "sine", ratio: 2, detune: 0, gain: 0.17 },
            ]
          : [
              { type: "triangle", ratio: 1, detune: -7, gain: 0.8 },
              { type: "sine", ratio: 1, detune: 7, gain: 0.52 },
              { type: "sine", ratio: 2, detune: 0, gain: 0.2 },
            ];

  filter.type = mode === "electric" || mode === "banjo" ? "bandpass" : "lowpass";
  filter.Q.setValueAtTime(mode === "electric" ? 4.2 : mode === "banjo" ? 5.4 : mode === "hawaii" ? 0.9 : 1.1, startTime);
  filter.frequency.setValueAtTime(
    mode === "electric"
      ? clampAudioValue(frequency * 5.5, 760, 4200)
      : mode === "banjo"
        ? clampAudioValue(frequency * 7.5, 1100, 5600)
        : mode === "hawaii"
          ? 3000
          : 3400,
    startTime
  );
  filter.frequency.exponentialRampToValueAtTime(
    mode === "electric" ? 1320 : mode === "banjo" ? 2100 : mode === "hawaii" ? 1250 : 1450,
    startTime + (mode === "banjo" ? 0.09 : 0.18)
  );

  noteGain.gain.setValueAtTime(0.0001, startTime);
  noteGain.gain.exponentialRampToValueAtTime(peak, startTime + 0.012);
  noteGain.gain.exponentialRampToValueAtTime(peak * (mode === "electric" ? 0.5 : mode === "banjo" ? 0.22 : mode === "hawaii" ? 0.38 : 0.34), startTime + 0.09);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + releaseDuration);

  oscillatorConfigs.forEach((config) => {
    const oscillator = audioContext.createOscillator();
    const oscillatorGain = audioContext.createGain();

    oscillator.type = config.type;
    oscillator.frequency.setValueAtTime(frequency * config.ratio, startTime);
    oscillator.detune.setValueAtTime(config.detune, startTime);
    oscillatorGain.gain.value = config.gain;
    oscillator.connect(oscillatorGain);
    oscillatorGain.connect(filter);
    oscillator.start(startTime);
    oscillator.stop(startTime + releaseDuration + 0.08);
  });

  if (mode === "electric") {
    const drive = audioContext.createWaveShaper();

    drive.curve = getGuitarDriveCurve();
    drive.oversample = "2x";
    filter.connect(drive);
    drive.connect(noteGain);
  } else {
    filter.connect(noteGain);
  }

  noteGain.connect(destination);
}

function playGuitarChordSound(frequencies, startTime, duration, destination, mode = "acoustic", { preserveOrder = false } = {}) {
  const output = createGuitarPlaybackOutput(destination, mode);
  const playableFrequencies = preserveOrder ? [...frequencies] : [...frequencies].sort((a, b) => a - b);
  const strumSpacing = mode === "electric" || mode === "banjo" ? 0.012 : mode === "hawaii" ? 0.02 : 0.024;

  playableFrequencies.forEach((frequency, index) => {
    playGuitarPluck(frequency, startTime + index * strumSpacing, duration, output, mode, 0.9);
  });
}

function playGuitarSingleNoteSound(frequency, startTime, duration, destination, mode = "acoustic") {
  playGuitarPluck(frequency, startTime, duration, destination, mode, 0.9);
}

function playGuitarPickedNoteSequence(frequencies, startTime, spacing, duration, destination, mode = "acoustic") {
  const output = createGuitarPlaybackOutput(destination, mode);

  frequencies.forEach((frequency, index) => {
    playGuitarSingleNoteSound(frequency, startTime + index * spacing, duration, output, mode);
  });
}

function playNativeChordSound(frequencies, startTime, duration, destination, mode = getSelectedSoundMode(), options = {}) {
  if (isStringedSoundMode(mode)) {
    playGuitarChordSound(frequencies, startTime, duration, destination, mode, options);
    return;
  }

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
  if (isStringedSoundMode(mode)) {
    const output = createGuitarPlaybackOutput(destination, mode);
    playGuitarSingleNoteSound(frequency, startTime, duration, output, mode);
    return;
  }

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

function playChord(notes, card, { includeNoteSequence, keepLoop = false } = {}) {
  const playbackOutput = startNewPlayback({ keepLoop });
  const noteNames = chordNoteNames(notes);
  const soundMode = getSelectedSoundMode();
  const guitarVoicingPlayback = isStringedInstrumentMode() ? guitarVoicingPlaybackFromCard(card) : null;
  const frequencies = guitarVoicingPlayback?.frequencies || chordFrequencies(notes);
  const noteSequence = guitarVoicingPlayback?.notes || notes;
  const playNoteSequence = typeof includeNoteSequence === "boolean"
    ? includeNoteSequence
    : isStringedInstrumentMode() ? homeProgressionState.arpeggio : pianoPlayStyleArpeggio;
  const playbackStartOffset = chordStartOffset(playNoteSequence);
  const noteSequenceStartOffset = chordNoteSequenceStartOffset(playNoteSequence);

  scheduleChordKeyboardPlayback(card, notes, playNoteSequence, noteSequence, {
    playbackStartOffset,
    noteSequenceStartOffset,
  });

  if (shouldUsePianoSampler()) {
    Tone.start();

    if (playNoteSequence) {
      noteNames.forEach((noteName, index) => {
        schedulePlayback(() => {
          pianoSampler.triggerAttackRelease(noteName, chordNoteDuration, undefined, 0.78);
        }, playbackStartOffset + noteSequenceStartOffset + index * chordNoteSpacing);
      });
    } else {
      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(noteNames, chordDuration, undefined, 0.75);
      }, playbackStartOffset);
    }

    return;
  }

  const now = audioContext.currentTime + playbackStartOffset;
  const noteStart = audioContext.currentTime + playbackStartOffset + noteSequenceStartOffset;
  if (playNoteSequence && !isStringedInstrumentMode()) {
    frequencies.forEach((frequency, index) => {
      playNativeSingleNote(frequency, noteStart + index * chordNoteSpacing, chordNoteDuration, playbackOutput, soundMode);
    });
    return;
  }

  if (playNoteSequence && isStringedInstrumentMode()) {
    playGuitarPickedNoteSequence(frequencies, noteStart, chordNoteSpacing, chordNoteDuration, playbackOutput, soundMode);
    return;
  }

  playNativeChordSound(frequencies, now, chordDuration, playbackOutput, soundMode, {
    preserveOrder: Boolean(guitarVoicingPlayback),
  });

  if (playNoteSequence) {
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

    const includeNoteSequence = isStringedInstrumentMode() ? homeProgressionState.arpeggio : pianoPlayStyleArpeggio;
    const noteCount = isStringedInstrumentMode()
      ? guitarVoicingPlaybackFromCard(card)?.frequencies.length || notes.length
      : notes.length;

    playChord(notes, card, { includeNoteSequence, keepLoop: true });
    activeLoop.timerId = window.setTimeout(runLoop, chordPlaybackDuration(noteCount, includeNoteSequence, {
      playbackStartOffset: chordStartOffset(includeNoteSequence),
      noteSequenceStartOffset: chordNoteSequenceStartOffset(includeNoteSequence),
    }) * 1000);
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

function upDownArpeggioSequence(values) {
  if (values.length <= 1) {
    return values;
  }

  return [...values, ...values.slice(0, -1).reverse()];
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

function setProgressionAnimationChord(animation, index, { isPlaying = false, activeNotes = null } = {}) {
  const symbols = animation.dataset.symbols?.split(",").filter(Boolean) || [];
  const symbol = symbols[index] || symbols[0];
  const step = animation.querySelector(".progression-step");
  const isHomeGuitarProgression = isStringedInstrumentMode() && animation.hasAttribute("data-home-progression-animation");

  if (!symbol || !step) {
    return;
  }

  const label = step.querySelector("span");
  const keyboard = step.querySelector("div");
  const notes = chordNotesFromSymbol(symbol);
  const displaySymbols = animation.dataset.displaySymbols?.split(",").filter(Boolean) || [];
  const labelText = isHomeGuitarProgression
    ? guitarProgressionStepLabel(index, symbol)
    : displaySymbols[index] || displayChordSymbol(symbol);
  const guitarVoicing = isHomeGuitarProgression
    ? homeProgressionGuitarVoicingContext(index, symbol)
    : null;

  animation.dataset.activeIndex = String(index);
  label.textContent = labelText;
  animation.closest(".piano-card, .guitar-card")?.querySelectorAll("[data-home-progression-step-label]").forEach((element) => {
    element.textContent = labelText;
  });
  keyboard.className = "progression-keyboard";
  keyboard.setAttribute("aria-hidden", "true");
  keyboard.replaceChildren(createInstrumentDiagram(
    isStringedInstrumentMode() ? notes : activeNotes || notes,
    false,
    isPlaying,
    Number(animation.dataset.octaves) === 2 ? 2 : 1,
    isStringedInstrumentMode() ? activeNotes : null,
    isStringedInstrumentMode()
      ? {
          symbol,
          voicingIndex: guitarVoicing ? guitarVoicing.voicingIndex : 0,
          showFingering: true,
        }
      : {}
  ));
  animation.classList.toggle("is-active", isPlaying);
}

function updateProgressionAnimationLabels() {
  document.querySelectorAll("[data-progression-animation]").forEach(updateProgressionAnimation);
}

function scheduleProgressionAnimation(item, chordSymbols, { arpeggio = false } = {}) {
  if (!item) {
    return;
  }

  const animation = ensureProgressionAnimation(item, chordSymbols);
  item.classList.add("is-playing");

  chordSymbols.forEach((_, index) => {
    const chordStart = startDelay + index * progressionChordSpacing;

    if (arpeggio) {
      const guitarVoicingPlayback = isStringedInstrumentMode() ? guitarVoicingPlaybackFromSymbol(chordSymbols[index], 0) : null;
      const sourceNotes = guitarVoicingPlayback?.notes || chordNotesFromSymbol(chordSymbols[index]);
      const notes = guitarVoicingPlayback ? sourceNotes : upDownArpeggioSequence(sourceNotes);

      notes.forEach((note, noteIndex) => {
        schedulePlayback(() => {
          setProgressionAnimationChord(animation, index, { isPlaying: true, activeNotes: [note] });
        }, chordStart + noteIndex * progressionArpeggioNoteSpacing);
      });

      schedulePlayback(() => {
        if (Number(animation.dataset.activeIndex) === index) {
          setProgressionAnimationChord(animation, index);
        }
      }, chordStart + Math.max(notes.length - 1, 0) * progressionArpeggioNoteSpacing + progressionArpeggioNoteDuration);
      return;
    }

    schedulePlayback(() => {
      setProgressionAnimationChord(animation, index, { isPlaying: true });
    }, chordStart);

    schedulePlayback(() => {
      if (Number(animation.dataset.activeIndex) === index) {
        setProgressionAnimationChord(animation, index);
      }
    }, chordStart + progressionChordDuration);
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

function playProgression(chordSymbols, item, { keepLoop = false, arpeggio = false } = {}) {
  const playbackOutput = startNewPlayback({ keepLoop });
  const soundMode = getSelectedSoundMode();
  scheduleProgressionAnimation(item, chordSymbols, { arpeggio });

  if (shouldUsePianoSampler()) {
    Tone.start();

    chordSymbols.forEach((symbol, index) => {
      if (arpeggio) {
        upDownArpeggioSequence(chordNoteNamesFromSymbol(symbol)).forEach((noteName, noteIndex) => {
          schedulePlayback(() => {
            pianoSampler.triggerAttackRelease(noteName, progressionArpeggioNoteDuration, undefined, 0.82);
          }, startDelay + index * progressionChordSpacing + noteIndex * progressionArpeggioNoteSpacing);
        });
        return;
      }

      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(chordNoteNamesFromSymbol(symbol), progressionChordDuration, undefined, 0.82);
      }, startDelay + index * progressionChordSpacing);
    });

    return progressionPlaybackDuration(chordSymbols);
  }

  const now = audioContext.currentTime + startDelay;

  chordSymbols.forEach((symbol, index) => {
    const startTime = now + index * progressionChordSpacing;
    const guitarVoicingPlayback = isStringedInstrumentMode() ? guitarVoicingPlaybackFromSymbol(symbol, 0) : null;
    const chordFrequencies = guitarVoicingPlayback?.frequencies || frequenciesFromChordSymbol(symbol);

    if (arpeggio) {
      const noteFrequencies = guitarVoicingPlayback ? chordFrequencies : upDownArpeggioSequence(chordFrequencies);

      noteFrequencies.forEach((frequency, noteIndex) => {
        playNativeSingleNote(
          frequency,
          startTime + noteIndex * progressionArpeggioNoteSpacing,
          progressionArpeggioNoteDuration,
          playbackOutput,
          soundMode
        );
      });
      return;
    }

    playNativeChordSound(chordFrequencies, startTime, progressionChordDuration, playbackOutput, soundMode, {
      preserveOrder: Boolean(guitarVoicingPlayback),
    });
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

  if (!chordRepeatButtons.has(button)) {
    button.addEventListener("click", () => startChordLoop(chordCardNotes(card), card, button));
    chordRepeatButtons.add(button);
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

  if (!progressionRepeatButtons.has(button)) {
    button.addEventListener("click", () => startProgressionLoop(chordSymbols, item, button));
    progressionRepeatButtons.add(button);
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

function guitarChordAboutText(chordNameText, notes, quality, card) {
  const voicing = card ? currentGuitarChordVoicing(card) : guitarRenderContext(notes, { quality });
  const noteList = guitarReadableNoteList(notes);
  const instrumentArticle = getStringedInstrumentArticle();

  if (!voicing.supported) {
    return `${chordNameText} uses ${noteList}. ${getStringedInstrumentName()} voicing coming soon; use these notes while this shape is added.`;
  }

  const voicingName = guitarVoicingLabelForSentence(voicing.label);
  const usesOpenStrings = voicing.strings.some((string) => string.state === "open");
  const usesMutedStrings = voicing.strings.some((string) => string.state === "muted");
  const markerText = [
    usesOpenStrings ? "Open strings are marked with O." : "",
    usesMutedStrings ? "Muted strings are marked with X." : "",
  ].filter(Boolean).join(" ");
  const fingeringText = voicing.barre
    ? `This voicing is a ${voicingName} chord with an index barre at fret ${voicing.barre.fret}. Finger numbers show suggested fingering across the fretboard.`
    : voicing.compact
      ? `This ${voicingName} voicing keeps the essential chord tones in a playable ${instrumentArticle} shape. Finger numbers show suggested fingering.`
      : `This ${voicingName} voicing shows a playable ${instrumentArticle} shape across the fretboard. Finger numbers show suggested fingering.`;

  return `${chordNameText} uses ${noteList}. ${fingeringText}${markerText ? ` ${markerText}` : ""}`;
}

function syncGuitarChordAboutElements(card) {
  if (!card || !isStringedInstrumentMode()) {
    return;
  }

  const notes = chordCardNotes(card);
  const quality = normalizeChordQuality(card.dataset.quality);
  const displayedChordName = card.hasAttribute("data-preserve-spelling")
    ? card.dataset.displayTitle
    : card.dataset.root && card.dataset.quality
      ? chordTitleForCard(card)
      : displayNotes(notes);

  card.querySelectorAll("[data-dynamic-chord-about]").forEach((element) => {
    element.textContent = guitarChordAboutText(displayedChordName, notes, quality, card);
  });
}

function changeRelatedChordPage(card, direction) {
  const currentPage = Number.parseInt(card.dataset.relatedPage || "0", 10);
  const nextPage = (Number.isNaN(currentPage) ? 0 : currentPage) + direction;
  card.dataset.relatedPage = String(Math.max(nextPage, 0));
  renderRelatedChords(card, card.dataset.root, card.dataset.quality);
}

function bindRelatedCarouselButton(button, card, direction) {
  if (!button || relatedCarouselButtons.has(button)) {
    return;
  }

  button.addEventListener("click", () => changeRelatedChordPage(card, direction));
  relatedCarouselButtons.add(button);
}

function initializeRelatedCarouselButtons(card) {
  bindRelatedCarouselButton(card.querySelector("[data-related-prev]"), card, -1);
  bindRelatedCarouselButton(card.querySelector("[data-related-next]"), card, 1);
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
    bindRelatedCarouselButton(previousButton, card, -1);
  }

  if (nextButton) {
    nextButton.disabled = pageCount <= 1 || relatedPage >= pageCount - 1;
    nextButton.hidden = pageCount <= 1;
    bindRelatedCarouselButton(nextButton, card, 1);
  }
}

function relatedChordsPerPageForViewport() {
  return window.matchMedia(smartphoneViewportQuery).matches ? 1 : 4;
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
  const phoneQuery = window.matchMedia(smartphoneViewportQuery);
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
    element.textContent = isStringedInstrumentMode()
      ? guitarChordAboutText(displayedChordName, notes, quality, card)
      : chordAboutText(displayedChordName, notes, quality);
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
    keyboard.setAttribute("aria-label", `${isStringedInstrumentMode() ? `${getStringedInstrumentName()} chord diagram` : "Piano keys"} for ${displayedChordName}`);
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
    keyboard.appendChild(createInstrumentDiagram(notes));
  }

  if (button && !chordPlayButtons.has(button)) {
    button.addEventListener("click", () => playChord(chordCardNotes(card), card));
    chordPlayButtons.add(button);
  }

  initializeRelatedCarouselButtons(card);
  updateChordCardText(card);
}

function pianoOctaveToggleLabel(octaveCount) {
  return octaveCount === 2 ? "-OCT" : "+OCT";
}

function pianoOctaveToggleAriaLabel(octaveCount) {
  return octaveCount === 2 ? "Show one octave piano" : "Show two octave piano";
}

function syncPianoOctaveToggleButton(button, octaveCount) {
  if (!button) {
    return;
  }

  button.hidden = isStringedInstrumentMode();
  button.textContent = pianoOctaveToggleLabel(octaveCount);
  button.setAttribute("aria-pressed", String(octaveCount === 2));
  button.setAttribute("aria-label", pianoOctaveToggleAriaLabel(octaveCount));
}

function syncPianoOctaveToggleButtons(card, octaveCount) {
  card.querySelectorAll("[data-piano-octave-toggle]").forEach((button) => {
    syncPianoOctaveToggleButton(button, octaveCount);
  });
}

function setPianoOctaveMode(card, octaveCount) {
  const visibleOctaves = octaveCount === 2 ? 2 : 1;

  card.dataset.octaves = String(visibleOctaves);
  card.classList.toggle("is-two-octaves", visibleOctaves === 2);
  syncPianoOctaveToggleButtons(card, visibleOctaves);
  renderChordCardKeyboard(card);
}

function initializePianoOctaveToggle() {
  document.querySelectorAll("[data-piano-play-style-toggle]").forEach((button) => {
    const card = button.closest("[data-dynamic-chord-card], [data-major-chord-card]");

    if (!card) {
      return;
    }

    if (isStringedInstrumentMode()) {
      syncGuitarFretToggleButton(card, button);
    } else {
      syncPianoPlayStyleToggle(button);
    }

    if (!pianoPlayStyleToggleButtons.has(button)) {
      button.addEventListener("click", () => {
        if (isStringedInstrumentMode()) {
          toggleGuitarStrumPickingMode();
          return;
        }

        togglePianoPlayStyle();
      });
      pianoPlayStyleToggleButtons.add(button);
    }
  });

  document.querySelectorAll("[data-piano-octave-toggle]").forEach((button) => {
    const card = button.closest("[data-dynamic-chord-card], [data-major-chord-card]");

    if (!card) {
      return;
    }

    syncPianoOctaveToggleButton(button, card.dataset.octaves === "2" ? 2 : 1);

    if (!pianoOctaveToggleButtons.has(button)) {
      button.addEventListener("click", () => {
        if (isStringedInstrumentMode()) {
          return;
        }

        setPianoOctaveMode(card, card.dataset.octaves === "2" ? 1 : 2);
      });
      pianoOctaveToggleButtons.add(button);
    }
  });
}

function syncInstrumentRangeToggleButtons() {
  document.querySelectorAll("[data-piano-play-style-toggle]").forEach((button) => {
    const card = button.closest("[data-dynamic-chord-card], [data-major-chord-card]");

    if (!card) {
      return;
    }

    if (isStringedInstrumentMode()) {
      syncGuitarFretToggleButton(card, button);
      return;
    }

    syncPianoPlayStyleToggle(button);
  });

  document.querySelectorAll("[data-piano-octave-toggle]").forEach((button) => {
    const card = button.closest("[data-dynamic-chord-card], [data-major-chord-card]");

    if (!card) {
      return;
    }

    syncPianoOctaveToggleButton(button, card.dataset.octaves === "2" ? 2 : 1);
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

    if (button && !progressionPlayButtons.has(button)) {
      button.addEventListener("click", () => playProgression(chordSymbols, item));
      progressionPlayButtons.add(button);
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

function isChordTypeMenuMobileViewport() {
  return window.matchMedia(smartphoneViewportQuery).matches;
}

function syncChordTypeMenuAccessibility(page = dynamicChordPageForElement()) {
  const menu = page?.querySelector("[data-chord-quality-menu]");

  if (!menu) {
    return;
  }

  const isExpanded = page.dataset.chordTypeMenuExpanded === "true";
  menu.setAttribute("aria-hidden", String(isChordTypeMenuMobileViewport() && !isExpanded));
}

function setChordTypeMenuExpanded(expanded, page = dynamicChordPageForElement()) {
  if (!page) {
    return;
  }

  page.dataset.chordTypeMenuExpanded = expanded ? "true" : "false";
  syncChordTypeMenuAccessibility(page);
}

function initializeChordTypeMenuViewportWatcher(page = dynamicChordPageForElement()) {
  if (!page || page.dataset.chordTypeMenuViewportWatcher === "true") {
    return;
  }

  const phoneQuery = window.matchMedia(smartphoneViewportQuery);
  const handleViewportChange = () => syncChordTypeMenuAccessibility(page);

  if (typeof phoneQuery.addEventListener === "function") {
    phoneQuery.addEventListener("change", handleViewportChange);
  } else {
    phoneQuery.addListener(handleViewportChange);
  }

  page.dataset.chordTypeMenuViewportWatcher = "true";
  syncChordTypeMenuAccessibility(page);
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
    bindChordQualityOptionButtons(menu, page);
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
    bindChordQualityOptionButton(button, page);

    menu.appendChild(button);
  });
}

function bindChordQualityOptionButtons(menu, page) {
  menu.querySelectorAll("[data-chord-quality-option]").forEach((button) => {
    bindChordQualityOptionButton(button, page);
  });
}

function bindChordQualityOptionButton(button, page) {
  if (chordQualityOptionButtons.has(button)) {
    return;
  }

  button.addEventListener("click", () => {
    const nextQuality = normalizeChordQuality(button.dataset.chordQualityOption);
    const url = new URL(window.location.href);

    url.searchParams.set("type", nextQuality);
    window.history.replaceState({}, "", url);
    setDynamicChordQuality(nextQuality, page);
    setChordTypeMenuExpanded(false, page);
  });
  chordQualityOptionButtons.add(button);
}

function updateChordRootButtons() {
  document.querySelectorAll("[data-chord-root]").forEach((button) => {
    const root = button.dataset.chordRoot;
    const label = rootSelectorLabel(root);
    const accessibleRoot = selectorNoteAccessibleName(root);
    const page = dynamicChordPageForElement(button);
    const quality = getChordPageQuality(page).toLowerCase();

    button.textContent = label;
    button.setAttribute("aria-label", `Choose ${accessibleRoot} ${quality} chord root`);
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
  guitarState.chordVoicingIndex = 0;
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
      setChordTypeMenuExpanded(true, page);
    });
  });

  updateChordRootButtons();
  renderChordTypeOptions(page);
  updateChordTypeButtons(page);
  setChordTypeMenuExpanded(false, page);
  initializeChordTypeMenuViewportWatcher(page);
  setDynamicChordRoot(initialRoot, page);
}

function updateRootMenu() {
  document.querySelectorAll("[data-root-link]").forEach((link) => {
    const rootValue = Number(link.dataset.rootLink);
    const rootName = noteNameForValue(rootValue);
    const rootParamName = noteNameForValue(rootValue, preferredNotation, "letters");
    const rootMenu = link.closest("[data-root-menu]");
    const page = rootMenu?.dataset.keyPage || getKeyConfig().page;
    link.textContent = rootName;
    const separator = page.includes("?") ? "&" : "?";
    link.setAttribute("href", `${page}${separator}root=${encodeURIComponent(rootParamName)}`);
  });
}

function updateNotationButtons() {
  document.querySelectorAll("[data-notation]").forEach((button) => {
    const isActive = normalizeAccidentalMode(button.dataset.notation) === preferredNotation;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
  });

  document.querySelectorAll("[data-note-name-toggle]").forEach((button) => {
    const isSolfege = preferredNoteNameMode === "solfege";
    button.textContent = isSolfege ? "♪" : "ABC";
    button.setAttribute("aria-pressed", String(isSolfege));
    button.classList.toggle("is-active", isSolfege);
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

function refreshAfterNoteDisplayChange() {
  if (homeProgressionState.mode === "progressions" && document.querySelector(".is-progressions-mode")) {
    renderHomeProgressionsMode();
    updateNotationButtons();
    return;
  }

  updateNotation();
}

function initializeNotationToggle() {
  document.querySelectorAll("[data-notation]").forEach((button) => {
    if (notationToggleButtons.has(button)) {
      return;
    }

    button.addEventListener("click", () => {
      preferredNotation = normalizeAccidentalMode(button.dataset.notation);
      storeNotation(preferredNotation);
      refreshAfterNoteDisplayChange();
    });
    notationToggleButtons.add(button);
  });

  document.querySelectorAll("[data-note-name-toggle]").forEach((button) => {
    if (noteNameToggleButtons.has(button)) {
      return;
    }

    button.addEventListener("click", () => {
      preferredNoteNameMode = preferredNoteNameMode === "solfege" ? "letters" : "solfege";
      storeNoteNameMode(preferredNoteNameMode);
      refreshAfterNoteDisplayChange();
    });
    noteNameToggleButtons.add(button);
  });

  updateNotationButtons();
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
    const mobileIconMenuQuery = window.matchMedia(smartphoneViewportQuery);
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
    select.addEventListener("header-menu-sync", updateMenu);
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

function setInstrumentCardClass(card) {
  card.classList.toggle("piano-card", !isStringedInstrumentMode());
  card.classList.toggle("guitar-card", isStringedInstrumentMode());
}

function syncInstrumentCardClasses() {
  document.querySelectorAll(".piano-card, .guitar-card").forEach(setInstrumentCardClass);
}

function updateInstrumentLegendText() {
  document.querySelectorAll(".keyboard-legend").forEach((legend) => {
    if (legend.querySelector("[data-home-progression-step-label]")) {
      return;
    }

    legend.textContent = isStringedInstrumentMode() ? `${getStringedInstrumentName()} voicing` : "Chord notes";
  });
}

function updateInstrumentWelcomeText() {
  const title = document.querySelector("#selector-welcome-title");
  const body = document.querySelector(".selector-welcome p");

  if (!title || !body) {
    return;
  }

  title.textContent = isStringedInstrumentMode()
    ? "WELCOME MUSICIAN!"
    : "WELCOME MUSICIAN!";
  body.textContent = isStringedInstrumentMode()
    ? `Pick a root and chord type, then explore playable ${getStringedInstrumentArticle()} voicings across the fretboard.`
    : "Chord Mode lets you explore harmony fast. Pick a root note, chord type and explore related chords.";
}

function updateInstrumentThemeVisuals() {
  const theme = document.body.dataset.theme || "dark";
  const family = getSelectedInstrumentFamily();
  const visuals = instrumentThemeVisuals[theme]?.[family];

  if (!visuals) {
    return;
  }

  document.querySelectorAll("[data-instrument-theme-visual]").forEach((image) => {
    const visual = visuals[image.dataset.instrumentThemeVisual];

    if (!visual) {
      return;
    }

    image.src = visual.src;
    image.alt = visual.alt;
  });
}

function refreshInstrumentDiagrams() {
  if (homeProgressionState.mode === "progressions" && document.querySelector(".is-progressions-mode")) {
    renderHomeProgressionsMode();
    updateInstrumentWelcomeText();
    return;
  }

  document.querySelectorAll(".card[data-notes], [data-dynamic-chord-card][data-notes], [data-major-chord-card][data-notes]").forEach((card) => {
    const keyboard = card.querySelector(".keyboard");

    if (!keyboard) {
      return;
    }

    if (card.dataset.root && card.dataset.quality) {
      keyboard.setAttribute("aria-label", `${isStringedInstrumentMode() ? `${getStringedInstrumentName()} chord diagram` : "Piano keys"} for ${chordTitleForCard(card)}`);
    }

    renderChordCardKeyboard(card);
  });
  updateProgressionAnimationLabels();
  updateInstrumentLegendText();
  updateInstrumentWelcomeText();
}

function syncInstrumentFamilyMenu(mode = getSelectedInstrumentFamily()) {
  const menu = document.querySelector("#instrument-family-menu");

  if (!menu) {
    return;
  }

  menu.value = normalizeInstrumentFamily(mode);
  menu.dispatchEvent(new Event("header-menu-sync"));
}

function applyInstrumentFamilyMode(family, { stopPlayback = true, persist = true } = {}) {
  const normalizedFamily = normalizeInstrumentFamily(family);
  const familyChanged = normalizedFamily !== getSelectedInstrumentFamily();

  selectedInstrumentFamily = normalizedFamily;
  if (persist) {
    storeInstrumentFamily(normalizedFamily);
  }
  if (familyChanged) {
    selectedSoundModesByInstrument[normalizedFamily] = getDefaultSoundMode(normalizedFamily);
  }
  selectedSoundMode = selectedSoundModesByInstrument[normalizedFamily] || getDefaultSoundMode(normalizedFamily);
  document.body.classList.toggle("is-guitar-mode", Boolean(getStringedInstrumentConfig(normalizedFamily)));
  document.body.dataset.instrumentFamily = normalizedFamily;
  syncInstrumentFamilyMenu(normalizedFamily);
  syncInstrumentCardClasses();
  syncInstrumentRangeToggleButtons();
  renderSoundOptions(normalizedFamily);
  initializeSoundSelector();
  setSoundMode(selectedSoundMode, document, { stopPlayback });
  updateInstrumentThemeVisuals();
  refreshInstrumentDiagrams();
}

function initializeInstrumentFamilyMenu() {
  const menu = document.querySelector("#instrument-family-menu");

  if (!menu) {
    return;
  }

  menu.addEventListener("change", () => {
    if (!instrumentFamilies.has(menu.value)) {
      syncInstrumentFamilyMenu();
      return;
    }

    applyInstrumentFamilyMode(menu.value);
  });

  applyInstrumentFamilyMode(getStoredInstrumentFamily() || menu.value || "keyboards", {
    stopPlayback: false,
    persist: false,
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

function initializePianoTheme() {
  const page = document.querySelector('[data-page="piano"]');
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
    storedTheme = localStorage.getItem(pianoThemeStorageKey) || "";

    if (!storedTheme) {
      const legacyStoredTheme = localStorage.getItem(legacyPianoThemeStorageKey) || "";

      if (legacyStoredTheme) {
        storedTheme = isAvailableTheme(legacyStoredTheme) ? legacyStoredTheme : "dark";
        localStorage.setItem(pianoThemeStorageKey, storedTheme);
        localStorage.removeItem(legacyPianoThemeStorageKey);
      }
    }
  } catch (error) {
    storedTheme = "";
  }

  const initialTheme = isAvailableTheme(storedTheme) ? storedTheme : "dark";

  page.dataset.theme = initialTheme;
  themeMenu.value = initialTheme;
  updateInstrumentThemeVisuals();

  themeMenu.addEventListener("change", () => {
    const nextTheme = isAvailableTheme(themeMenu.value) ? themeMenu.value : "dark";

    page.dataset.theme = nextTheme;
    themeMenu.value = nextTheme;
    updateInstrumentThemeVisuals();

    try {
      localStorage.setItem(pianoThemeStorageKey, nextTheme);
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

function normalizeHomepagePianoAreaMode(mode) {
  return homePianoAreaModes.has(mode) ? mode : "chords";
}

function getHomepagePianoAreaModeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const requestedMode = params.get("mode") || params.get("area");

  return homePianoAreaModes.has(requestedMode) ? requestedMode : "";
}

function getStoredHomepagePianoAreaMode() {
  try {
    return normalizeHomepagePianoAreaMode(window.localStorage?.getItem(selectedModeStorageKey));
  } catch (error) {
    return "chords";
  }
}

function storeHomepagePianoAreaMode(mode) {
  try {
    window.localStorage?.setItem(selectedModeStorageKey, normalizeHomepagePianoAreaMode(mode));
  } catch (error) {
    // Mode switching still works for this session if storage is unavailable.
  }
}

function applyHomepageProgressionUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const requestedRoot = params.get("root") || params.get("key");
  const rootValue = getRootValue(requestedRoot);
  const requestedScale = params.get("scale") || params.get("keyMode");

  if (Number.isInteger(rootValue)) {
    homeProgressionState.root = sharpNames[normalizeValue(rootValue)];
    homeProgressionState.key = homeProgressionState.root;
  }

  if (requestedScale === "major" || requestedScale === "minor") {
    homeProgressionState.scaleMode = requestedScale;
  }
}

function setHomepageAreaMenuValue(elements, mode) {
  if (!elements.areaMenu) {
    return;
  }

  elements.areaMenu.value = normalizeHomepagePianoAreaMode(mode);
  elements.areaMenu.dispatchEvent(new Event("header-menu-sync"));
}

function homeProgressionElements() {
  const workspace = document.querySelector("[data-major-chord-page]");
  const displayCard = document.querySelector("[data-major-chord-card]");

  return {
    workspace,
    selectorPanel: workspace?.querySelector(".selector-panel"),
    summaryCard: workspace?.querySelector(".chord-summary-card, .progression-summary-card"),
    listCard: workspace?.querySelector(".related-chords-card, .progressions-list-card, .progression-customizer"),
    pianoCard: workspace?.querySelector(".piano-card, .guitar-card"),
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
  applyInstrumentFamilyMode(getSelectedInstrumentFamily(), { stopPlayback: false });
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

function normalizeHomeProgressionChordMode(mode) {
  return mode === "sevenths" ? "sevenths" : "triads";
}

function homeProgressionSelectedStepMode(index = homeProgressionState.selectedStepIndex) {
  return normalizeHomeProgressionChordMode(homeProgressionState.stepModes?.[index]);
}

function homeProgressionStepLabel(degree, mode = "triads", pattern = homeProgressionDegreePattern()) {
  if (normalizeHomeProgressionChordMode(mode) !== "sevenths") {
    return pattern[degree]?.roman || keyChordPattern[degree]?.roman || "I";
  }

  const seventhLabels = homeProgressionState.scaleMode === "minor"
    ? ["i7", "ii\u00f87", "IIImaj7", "iv7", "v7", "VImaj7", "VII7"]
    : ["Imaj7", "ii7", "iii7", "IVmaj7", "V7", "vi7", "vii\u00f87"];

  return seventhLabels[degree] || `${pattern[degree]?.roman || keyChordPattern[degree]?.roman || "I"}7`;
}

function homeProgressionFormulaLabel(
  steps = homeProgressionState.steps,
  stepModes = steps === homeProgressionState.steps ? homeProgressionState.stepModes : []
) {
  const pattern = homeProgressionDegreePattern();
  return steps
    .map((degree, index) => homeProgressionStepLabel(degree, stepModes[index], pattern))
    .join(" - ");
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

  const fallbackMode = normalizeHomeProgressionChordMode(homeProgressionState.chordMode);
  const currentStepModes = Array.isArray(homeProgressionState.stepModes) ? homeProgressionState.stepModes : [];
  homeProgressionState.stepModes = homeProgressionState.steps.map((_, index) => {
    return normalizeHomeProgressionChordMode(currentStepModes[index] || fallbackMode);
  });
  const currentGuitarVoicingIndexes = Array.isArray(homeProgressionState.guitarVoicingIndexes)
    ? homeProgressionState.guitarVoicingIndexes
    : [];
  homeProgressionState.guitarVoicingIndexes = homeProgressionState.steps.map((_, index) => {
    const value = Number.parseInt(currentGuitarVoicingIndexes[index], 10);

    return Number.isNaN(value) ? 0 : Math.max(value, 0);
  });

  homeProgressionState.selectedStepIndex = Math.min(
    Math.max(Number(homeProgressionState.selectedStepIndex) || 0, 0),
    homeProgressionState.steps.length - 1
  );
  homeProgressionState.chordMode = homeProgressionSelectedStepMode();
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

function homeProgressionChordForDegree(degree, mode = "triads") {
  const config = homeProgressionConfig();
  const pattern = config.chordPattern[degree] || config.chordPattern[0];
  const chordRootValue = scaleValues(homeProgressionRootValue(), config)[degree] ?? homeProgressionRootValue();
  const root = sharpNames[chordRootValue];
  const quality = normalizeHomeProgressionChordMode(mode) === "sevenths" ? homeProgressionSeventhQuality(degree) : pattern.quality;

  return {
    roman: pattern.roman,
    root,
    quality,
    notes: chordNotesFromRoot(chordRootValue, chordIntervalsForQuality(quality)),
    symbol: chordSymbol(root, quality),
  };
}

function homeProgressionChords() {
  return homeProgressionState.steps.map((degree, index) => {
    return homeProgressionChordForDegree(degree, homeProgressionState.stepModes[index]);
  });
}

function homeProgressionChordsForSteps(steps, stepModes = []) {
  return steps.map((degree, index) => {
    return homeProgressionChordForDegree(degree, stepModes[index]);
  });
}

function homeProgressionLabels(chords) {
  return chords.map((chord) => displayChordSymbolForRoot(chord.root, chord.quality));
}

function homeProgressionSymbols(chords) {
  return chords.map((chord) => chord.symbol);
}

function resetHomeProgressionGuitarVoicings() {
  homeProgressionState.guitarVoicingIndexes = homeProgressionState.steps.map(() => 0);
}

function homeProgressionGuitarVoicingIndex(index = homeProgressionState.selectedStepIndex, symbol = "") {
  const parsed = symbol ? parseChordSymbol(symbol) : null;
  const voicingCount = parsed ? getGuitarVoicings(parsed.root, parsed.quality).length : 0;

  return normalizeGuitarVoicingIndex(homeProgressionState.guitarVoicingIndexes?.[index] || 0, voicingCount);
}

function setHomeProgressionGuitarVoicingIndex(index, value) {
  homeProgressionState.guitarVoicingIndexes[index] = Math.max(Number.parseInt(value, 10) || 0, 0);
}

function homeProgressionGuitarVoicingContext(index = homeProgressionState.selectedStepIndex, symbol = "") {
  const selectedIndex = Math.min(Math.max(Number(index) || 0, 0), homeProgressionState.steps.length - 1);
  const selectedSymbol = symbol || homeProgressionSymbols(homeProgressionChords())[selectedIndex] || "";
  const parsed = parseChordSymbol(selectedSymbol);
  const notes = selectedSymbol ? chordNotesFromSymbol(selectedSymbol) : [];
  const voicings = parsed ? getGuitarVoicings(parsed.root, parsed.quality) : [];
  const voicingIndex = homeProgressionGuitarVoicingIndex(selectedIndex, selectedSymbol);
  const voicing = parsed
    ? guitarRenderContext(notes, {
        symbol: selectedSymbol,
        voicingIndex,
        showFingering: true,
      })
    : null;
  const voicingLabel = voicing?.label || voicings[voicingIndex]?.label || "Voicing coming soon";

  setHomeProgressionGuitarVoicingIndex(selectedIndex, voicingIndex);

  return {
    selectedIndex,
    symbol: selectedSymbol,
    parsed,
    voicings,
    voicingIndex,
    voicingLabel,
    voicing,
  };
}

function clampGuitarProgressionDifficultyLevel(level) {
  const parsedLevel = Number.parseInt(level, 10);
  const safeLevel = Number.isFinite(parsedLevel) ? parsedLevel : 1;

  return Math.min(Math.max(safeLevel, 1), 10);
}

function getGuitarProgressionDifficultyLabel(level) {
  const normalizedLevel = clampGuitarProgressionDifficultyLevel(level);

  return guitarProgressionDifficultyLevels.find((entry) => entry.level === normalizedLevel)?.label
    || guitarProgressionDifficultyLevels[0].label;
}

function guitarProgressionDifficultyText(level) {
  const normalizedLevel = clampGuitarProgressionDifficultyLevel(level);

  return `${String(normalizedLevel).padStart(2, "0")} \u00b7 ${getGuitarProgressionDifficultyLabel(normalizedLevel)}`;
}

function normalizeGuitarProgressionFormulaText(formula) {
  return String(formula || "")
    .replace(/\s*-\s*/g, " - ")
    .replace(/\s+/g, " ")
    .trim();
}

function getGuitarProgressionBaseDifficulty(options = {}) {
  const formulaId = String(options.formulaId || "");
  const formulaLabel = normalizeGuitarProgressionFormulaText(options.formulaLabel || options.roman);

  if (formulaId && formulaId !== "custom" && guitarProgressionBaseDifficultyByFormulaId[formulaId]) {
    return guitarProgressionBaseDifficultyByFormulaId[formulaId];
  }

  return guitarProgressionBaseDifficultyByFormulaLabel[formulaLabel] || 0;
}

function guitarChordQualityDifficultyScore(quality) {
  const normalizedQuality = normalizeChordQuality(quality);

  return guitarChordQualityDifficultyScores[normalizedQuality] ?? 1.2;
}

function guitarVoicingPosition(frets = []) {
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);

  if (!fretted.length) {
    return 0;
  }

  return fretted.reduce((sum, fret) => sum + fret, 0) / fretted.length;
}

function guitarProgressionVoicingForChord(chord, index, options = {}) {
  if (!chord?.root) {
    return null;
  }

  const voicings = getGuitarVoicings(chord.root, chord.quality);
  const rawIndex = Array.isArray(options.voicingIndexes)
    ? options.voicingIndexes[index]
    : homeProgressionState.guitarVoicingIndexes?.[index];
  const voicingIndex = normalizeGuitarVoicingIndex(rawIndex || 0, voicings.length);

  return voicings[voicingIndex] || null;
}

function guitarProgressionVoicingDifficultyScore(voicing, previousVoicing = null) {
  if (!voicing?.frets) {
    return 1.1;
  }

  const frets = voicing.frets;
  const playedCount = guitarPlayedStringIndexes(frets).length;
  const mutedCount = frets.filter((fret) => fret === null).length;
  const fretted = frets.filter((fret) => Number.isFinite(fret) && fret > 0);
  const frettedCount = fretted.length;
  const maxFret = Math.max(...fretted, 0);
  const span = guitarVoicingFrettedSpan(frets);
  const hasBarre = guitarHasPlayableBarre(frets, voicing.barre);
  const barreSize = hasBarre ? voicing.barre.strings.length : 0;
  const independentFingerCount = guitarIndependentFingerCount(frets, voicing.barre);
  const previousPosition = previousVoicing?.frets ? guitarVoicingPosition(previousVoicing.frets) : null;
  const positionJump = previousPosition === null ? 0 : Math.abs(guitarVoicingPosition(frets) - previousPosition);

  return Math.min(7, Math.max(0,
    (hasBarre ? 1.55 : 0)
    + Math.max(0, barreSize - 3) * 0.22
    + mutedCount * 0.22
    + Math.max(0, span - 2) * 0.48
    + Math.max(0, maxFret - 4) * 0.18
    + Math.max(0, frettedCount - 3) * 0.38
    + Math.max(0, playedCount - 4) * 0.14
    + Math.max(0, independentFingerCount - 3) * 0.55
    + Math.max(0, positionJump - 3) * 0.22
  ));
}

function guitarProgressionHarmonicDifficultyScore(options = {}) {
  const formulaLabel = normalizeGuitarProgressionFormulaText(options.formulaLabel || options.roman);
  const tokens = formulaLabel ? formulaLabel.split(" - ") : [];
  const scaleMode = options.scaleMode === "minor" ? "minor" : "major";
  let score = 0;

  tokens.forEach((token) => {
    if (/bII/.test(token)) {
      score += 1.8;
    } else if (/bIII|bVI|bVII/.test(token)) {
      score += 1.15;
    }

    if (/#/.test(token)) {
      score += 1.1;
    }

    if (/[°ø]/.test(token)) {
      score += 1.35;
    }

    if (scaleMode === "major" && token === "iv") {
      score += 1.2;
    }

    if (scaleMode === "minor" && token === "V") {
      score += 0.95;
    }

    if (scaleMode === "major" && token === "ii") {
      score += 0.55;
    }
  });

  return Math.min(score, 4);
}

function getGuitarProgressionDifficulty(progressionChords, options = {}) {
  const chords = Array.isArray(progressionChords) ? progressionChords.filter(Boolean) : [];

  if (!chords.length) {
    return 1;
  }

  const baseDifficulty = getGuitarProgressionBaseDifficulty(options);
  const uniqueChordCount = new Set(chords.map((chord) => chord.symbol || `${chord.root}:${chord.quality}`)).size;
  const qualityScores = chords.map((chord) => guitarChordQualityDifficultyScore(chord.quality));
  const maxQualityScore = Math.max(...qualityScores, 0);
  const averageQualityScore = qualityScores.reduce((sum, score) => sum + score, 0) / qualityScores.length;
  let previousVoicing = null;
  const voicingScores = chords.map((chord, index) => {
    const voicing = guitarProgressionVoicingForChord(chord, index, options);
    const score = guitarProgressionVoicingDifficultyScore(voicing, previousVoicing);
    previousVoicing = voicing;

    return score;
  });
  const maxVoicingScore = Math.max(...voicingScores, 0);
  const averageVoicingScore = voicingScores.reduce((sum, score) => sum + score, 0) / voicingScores.length;
  const structureScore = Math.max(0, chords.length - 3) * 0.48
    + Math.max(0, uniqueChordCount - 3) * 0.34
    + Math.max(0, chords.length - 5) * 0.42;
  const harmonicScore = guitarProgressionHarmonicDifficultyScore(options);
  const rawDifficulty = baseDifficulty
    ? baseDifficulty
      + Math.max(0, averageQualityScore - 0.45) * 0.32
      + Math.max(0, maxQualityScore - 1.2) * 0.2
      + averageVoicingScore * 0.36
      + Math.max(0, maxVoicingScore - 2.4) * 0.18
      + Math.max(0, harmonicScore - 1) * 0.24
      + Math.max(0, chords.length - 4) * 0.28
    : 1
      + structureScore
      + averageQualityScore * 0.48
      + maxQualityScore * 0.34
      + averageVoicingScore * 0.5
      + maxVoicingScore * 0.28
      + harmonicScore;

  return clampGuitarProgressionDifficultyLevel(Math.round(rawDifficulty));
}

function guitarProgressionStepLabel(index, symbol) {
  const parsed = parseChordSymbol(symbol);

  if (!parsed) {
    return `STEP ${index + 1}: ${displaySelectorChordSymbol(symbol)}`;
  }

  return `STEP ${index + 1}: ${displaySelectorNoteName(parsed.root)} ${chordQualityInfo(parsed.quality).title.toUpperCase()}`;
}

function setHomeProgressionSteps(steps, formulaId = "custom", stepModes = []) {
  homeProgressionState.steps = steps.map((degree) => Math.min(Math.max(Number(degree) || 0, 0), 6)).slice(0, 8);
  homeProgressionState.stepModes = homeProgressionState.steps.map((_, index) => {
    return normalizeHomeProgressionChordMode(stepModes[index]);
  });
  homeProgressionState.formulaId = formulaId;
  homeProgressionState.selectedStepIndex = Math.min(homeProgressionState.selectedStepIndex, homeProgressionState.steps.length - 1);
  homeProgressionState.chordMode = homeProgressionSelectedStepMode();
  resetHomeProgressionGuitarVoicings();
}

function homeProgressionMobileFormulaOptions() {
  return homeProgressionFormulas.slice(0, 8);
}

function homeProgressionMobileFormulaText(formula) {
  return homeProgressionLabels(homeProgressionChordsForSteps(formula.degrees)).join(" - ");
}

function homeProgressionSelectedFormula() {
  return homeProgressionFormulas.find((formula) => formula.id === homeProgressionState.formulaId) || homeProgressionFormulaById();
}

function resetHomeProgressionDefaults() {
  const defaultFormula = homeProgressionFormulaById("pop-axis");

  stopActiveLoop();
  homeProgressionState.root = "C";
  homeProgressionState.key = "C";
  homeProgressionState.scaleMode = "major";
  homeProgressionState.formulaId = defaultFormula.id;
  homeProgressionState.steps = [...defaultFormula.degrees];
  homeProgressionState.stepModes = homeProgressionState.steps.map(() => "triads");
  homeProgressionState.selectedStepIndex = 0;
  homeProgressionState.chordMode = "triads";
  homeProgressionState.octaveCount = 1;
  homeProgressionState.selectedIndex = 0;
  homeProgressionState.page = 0;
  resetHomeProgressionGuitarVoicings();
}

function handleHomeProgressionUtility(action) {
  if (action === "add") {
    if (homeProgressionState.steps.length >= 8) {
      return;
    }

    stopActiveLoop();
    homeProgressionState.steps.push(homeProgressionState.steps[homeProgressionState.selectedStepIndex] ?? 0);
    homeProgressionState.stepModes.push(homeProgressionSelectedStepMode());
    homeProgressionState.guitarVoicingIndexes.push(0);
    homeProgressionState.selectedStepIndex = homeProgressionState.steps.length - 1;
    homeProgressionState.chordMode = homeProgressionSelectedStepMode();
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
    homeProgressionState.stepModes.splice(homeProgressionState.selectedStepIndex, 1);
    homeProgressionState.guitarVoicingIndexes.splice(homeProgressionState.selectedStepIndex, 1);
    homeProgressionState.selectedStepIndex = Math.min(homeProgressionState.selectedStepIndex, homeProgressionState.steps.length - 1);
    homeProgressionState.chordMode = homeProgressionSelectedStepMode();
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

  selectorPanel.className = "selector-panel selector-panel-with-rail key-selector-panel progression-builder";
  selectorPanel.innerHTML = `
    ${selectorModeRailMarkup()}
    <div class="selector-panel-content progression-builder-content">
      <div class="progression-builder-main">
        <section class="progression-builder-section" aria-labelledby="progression-root-title">
          <h2 id="progression-root-title" class="selector-label">Choose Note</h2>
          <div class="root-menu root-menu-centered progression-root-grid" role="group" aria-label="Choose progression root note" data-home-progression-root-menu></div>
        </section>
        <section class="progression-builder-section" aria-labelledby="progression-formula-title">
          <h2 id="progression-formula-title" class="selector-label">Choose Progression</h2>
          <div class="progression-option-grid" role="group" aria-label="Choose progression formula" data-home-progression-formula-menu></div>
        </section>
      </div>
      <aside class="progression-info-message" aria-labelledby="progression-info-title">
        <div class="progression-info-message-heading">
          <h2 id="progression-info-title">${isStringedInstrumentMode() ? "BUILD YOUR PROGRESSION" : "Build your progression"}</h2>
        </div>
        <p>${isStringedInstrumentMode() ? "Create chord journeys. Practice each step." : "Create chord journeys. Practice every day."}</p>
      </aside>
      <div class="progression-builder-side">
        <section class="progression-builder-section" aria-labelledby="progression-scale-title">
          <h2 id="progression-scale-title" class="selector-label">Choose Scale</h2>
          <div class="progression-scale-toggle" role="group" aria-label="Choose progression scale" data-home-progression-scale-menu></div>
        </section>
      </div>
      <section class="progression-builder-section progression-mobile-formula-select${homeProgressionMobileFormulaMenuOpen ? " is-open" : ""}" aria-labelledby="progression-mobile-formula-title" data-home-progression-mobile-formula>
        <h2 id="progression-mobile-formula-title" class="selector-label">Choose Progression</h2>
        <button class="progression-mobile-formula-button" type="button" aria-expanded="${homeProgressionMobileFormulaMenuOpen ? "true" : "false"}" aria-controls="progression-mobile-formula-list" data-home-progression-mobile-formula-toggle></button>
      </section>
    </div>
    <div id="progression-mobile-formula-list" class="progression-mobile-formula-list" role="listbox" aria-labelledby="progression-mobile-formula-title" data-home-progression-mobile-formula-list${homeProgressionMobileFormulaMenuOpen ? "" : " hidden"}></div>
  `;
  initializeNotationToggle();

  const rootMenu = selectorPanel.querySelector("[data-home-progression-root-menu]");
  rootSelectorNotes.forEach((root) => {
    const button = document.createElement("button");
    const isActive = root === homeProgressionState.root;

    button.type = "button";
    button.dataset.homeProgressionRoot = root;
    button.textContent = rootSelectorLabel(root);
    button.setAttribute("aria-label", `Choose ${selectorNoteAccessibleName(root)} progression root`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionMobileFormulaMenuOpen = false;
      homeProgressionState.root = root;
      homeProgressionState.key = root;
      resetHomeProgressionGuitarVoicings();
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
      homeProgressionMobileFormulaMenuOpen = false;
      homeProgressionState.scaleMode = mode;
      resetHomeProgressionGuitarVoicings();
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
      homeProgressionMobileFormulaMenuOpen = false;
      homeProgressionState.selectedStepIndex = 0;
      setHomeProgressionSteps([...formula.degrees], formula.id);
      renderHomeProgressionsMode();
    });
    formulaMenu.appendChild(button);
  });

  const mobileFormulaSelect = selectorPanel.querySelector("[data-home-progression-mobile-formula]");
  const mobileFormulaToggle = selectorPanel.querySelector("[data-home-progression-mobile-formula-toggle]");
  const mobileFormulaList = selectorPanel.querySelector("[data-home-progression-mobile-formula-list]");
  const selectedMobileFormula = homeProgressionSelectedFormula();
  const selectedMobileFormulaText = homeProgressionMobileFormulaText(selectedMobileFormula);

  if (mobileFormulaSelect && mobileFormulaToggle && mobileFormulaList) {
    mobileFormulaToggle.textContent = selectedMobileFormulaText;
    mobileFormulaToggle.setAttribute("aria-label", `Choose progression: ${selectedMobileFormulaText}`);

    mobileFormulaToggle.addEventListener("click", () => {
      homeProgressionMobileFormulaMenuOpen = !homeProgressionMobileFormulaMenuOpen;
      mobileFormulaToggle.setAttribute("aria-expanded", String(homeProgressionMobileFormulaMenuOpen));
      mobileFormulaList.hidden = !homeProgressionMobileFormulaMenuOpen;
      mobileFormulaSelect.classList.toggle("is-open", homeProgressionMobileFormulaMenuOpen);
    });

    homeProgressionMobileFormulaOptions().forEach((formula) => {
      const button = document.createElement("button");
      const formulaText = homeProgressionMobileFormulaText(formula);
      const isActive = formula.id === homeProgressionState.formulaId;

      button.type = "button";
      button.className = "progression-mobile-formula-option";
      button.dataset.homeProgressionMobileFormula = formula.id;
      button.textContent = formulaText;
      button.setAttribute("role", "option");
      button.setAttribute("aria-label", `Choose ${formulaText} progression`);
      button.setAttribute("aria-selected", String(isActive));
      button.classList.toggle("is-active", isActive);
      button.addEventListener("click", () => {
        stopActiveLoop();
        homeProgressionMobileFormulaMenuOpen = false;
        homeProgressionState.selectedStepIndex = 0;
        setHomeProgressionSteps([...formula.degrees], formula.id);
        renderHomeProgressionsMode();
      });
      mobileFormulaList.appendChild(button);
    });
  }
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
    </div>
  `;
  summaryCard.setAttribute("aria-label", `${title} ${formulaLabel} progression`);
  summaryCard.dataset.progression = homeProgressionSymbols(chords).join(",");
  summaryCard.dataset.displayProgression = labels.join(",");
}

function renderHomeProgressionList() {
  const { listCard } = homeProgressionElements();
  const steps = homeProgressionState.steps;
  const stepModes = homeProgressionState.stepModes;
  const selectedStepMode = homeProgressionSelectedStepMode();
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
    const stepLabel = homeProgressionStepLabel(degree, stepModes[index], pattern);

    button.type = "button";
    button.className = "progression-step-button";
    button.dataset.homeProgressionStep = String(index);
    button.setAttribute("aria-label", `Select step ${index + 1}: ${stepLabel}`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.innerHTML = `<span>Step ${index + 1}</span><strong>${stepLabel}</strong>`;
    button.addEventListener("click", () => {
      homeProgressionState.selectedStepIndex = index;
      homeProgressionState.chordMode = homeProgressionSelectedStepMode(index);
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
    button.textContent = homeProgressionStepLabel(index, selectedStepMode, pattern);
    button.setAttribute("aria-label", `Set selected step to ${homeProgressionStepLabel(index, selectedStepMode, pattern)}`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.steps[homeProgressionState.selectedStepIndex] = index;
      setHomeProgressionGuitarVoicingIndex(homeProgressionState.selectedStepIndex, 0);
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
    const isActive = mode === selectedStepMode;

    button.type = "button";
    button.dataset.homeProgressionChordMode = mode;
    button.textContent = label;
    button.setAttribute("aria-label", `Use ${label.toLowerCase()} for selected step`);
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      stopActiveLoop();
      homeProgressionState.stepModes[homeProgressionState.selectedStepIndex] = mode;
      setHomeProgressionGuitarVoicingIndex(homeProgressionState.selectedStepIndex, 0);
      homeProgressionState.chordMode = mode;
      homeProgressionState.formulaId = "custom";
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
  if (isStringedInstrumentMode()) {
    animation.dataset.activeIndex = String(homeProgressionState.selectedStepIndex);
  }
  keyboard.setAttribute("aria-label", `${title} ${labels.join(" - ")} progression`);
  updateProgressionAnimation(animation);

  return animation;
}

function homeGuitarVoicingControlData(chordSymbols) {
  const selectedIndex = homeProgressionState.selectedStepIndex;
  const symbol = chordSymbols[selectedIndex] || chordSymbols[0] || "";

  return homeProgressionGuitarVoicingContext(selectedIndex, symbol);
}

function renderHomePianoCard(progression, chords) {
  const { pianoCard } = homeProgressionElements();
  const labels = homeProgressionLabels(chords);
  const chordSymbols = homeProgressionSymbols(chords);
  const formula = homeProgressionFormulaLabel();
  const guitarMode = isStringedInstrumentMode();
  const playStyleButtonLabel = guitarMode
    ? guitarStrumPickingLabel()
    : pianoPlayStyleLabel();
  const playStylePressed = guitarMode
    ? homeProgressionState.arpeggio
    : pianoPlayStyleArpeggio;
  const playStyleButtonAriaLabel = guitarMode
    ? guitarStrumPickingAriaLabel()
    : pianoPlayStyleAriaLabel();
  const octaveTextLabel = pianoOctaveToggleLabel(homeProgressionState.octaveCount);
  const octaveTextAriaLabel = pianoOctaveToggleAriaLabel(homeProgressionState.octaveCount);
  const guitarVoicing = guitarMode ? homeGuitarVoicingControlData(chordSymbols) : null;
  const guitarVoicingButtonLabel = guitarMode
    ? guitarVoicing.voicings.length > 1
      ? `Next voicing after ${guitarVoicing.voicingLabel}`
      : `${guitarVoicing.voicingLabel} is the only voicing`
    : "";
  const selectedStepLabel = guitarMode
    ? guitarProgressionStepLabel(homeProgressionState.selectedStepIndex, chordSymbols[homeProgressionState.selectedStepIndex] || chordSymbols[0])
    : "";

  if (!pianoCard) {
    return;
  }

  pianoCard.innerHTML = `
    <div class="piano-card-header">
      <button class="play-button" type="button" aria-label="Play ${formula} progression" data-home-progression-play>
        <img
          src="assets/themes/dark/dark-play-button.webp"
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
      <button class="octave-toggle" type="button" data-home-progression-play-style-toggle aria-pressed="${playStylePressed ? "true" : "false"}" aria-label="${playStyleButtonAriaLabel}">${playStyleButtonLabel}</button>
    </div>
    <div class="keyboard-legend-row">
      <p class="keyboard-legend">${guitarMode ? `<span data-home-progression-step-label>${selectedStepLabel}</span>` : `STEPS: <span data-home-progression-step-label></span>`}</p>
      ${guitarMode ? "" : `<button class="arpeggio-toggle piano-octave-text-toggle" type="button" aria-pressed="${homeProgressionState.octaveCount === 2 ? "true" : "false"}" aria-label="${octaveTextAriaLabel}" data-home-progression-piano-octave-toggle>${octaveTextLabel}</button>`}
    </div>
    ${guitarMode ? `
      <div class="guitar-voicing-control guitar-voicing-control--progression" data-home-guitar-voicing-control>
        <span class="guitar-voicing-kicker">VOICING</span>
        <strong data-home-guitar-voicing-name>${guitarVoicing.voicingLabel}</strong>
        <button class="guitar-next-voicing" type="button" data-home-guitar-next-voicing aria-label="${guitarVoicingButtonLabel}" ${guitarVoicing.voicings.length <= 1 ? "disabled aria-disabled=\"true\"" : ""}>NEXT VOICING</button>
      </div>
    ` : ""}
    <div class="keyboard" role="img" aria-label="${isStringedInstrumentMode() ? `${getStringedInstrumentName()} chord diagram` : "Piano keys"} for ${formula} progression"></div>
  `;

  pianoCard.querySelector("[data-home-progression-play]")?.addEventListener("click", playHomeSelectedProgression);
  pianoCard.querySelector("[data-home-progression-repeat]")?.addEventListener("click", startHomeProgressionLoop);
  pianoCard.querySelector("[data-home-progression-play-style-toggle]")?.addEventListener("click", () => {
    if (isStringedInstrumentMode()) {
      toggleGuitarStrumPickingMode();
      return;
    }

    togglePianoPlayStyle();
    renderHomeProgressionsMode();
  });
  pianoCard.querySelector("[data-home-progression-piano-octave-toggle]")?.addEventListener("click", () => {
    if (isStringedInstrumentMode()) {
      return;
    }

    homeProgressionState.octaveCount = homeProgressionState.octaveCount === 2 ? 1 : 2;
    renderHomeProgressionsMode();
  });
  pianoCard.querySelector("[data-home-guitar-next-voicing]")?.addEventListener("click", () => {
    const currentVoicing = homeGuitarVoicingControlData(chordSymbols);

    if (currentVoicing.voicings.length <= 1) {
      return;
    }

    setHomeProgressionGuitarVoicingIndex(
      currentVoicing.selectedIndex,
      normalizeGuitarVoicingIndex(currentVoicing.voicingIndex + 1, currentVoicing.voicings.length)
    );
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
        src="assets/themes/dark/dark-robot-floating.webp"
        alt=""
        width="320"
        height="320"
        loading="lazy"
        decoding="async"
      >
    </div>
    <div class="progression-songs-fields">
      <p class="progression-songs-label">${isStringedInstrumentMode() ? "LEVEL:" : "SONGS:"}</p>
      <p class="progression-songs-list" data-home-progression-songs></p>
    </div>
  `;
  if (isStringedInstrumentMode()) {
    const difficultyLevel = getGuitarProgressionDifficulty(homeProgressionChords(), {
      formulaId: homeProgressionState.formulaId,
      formulaLabel: homeProgressionFormulaLabel(),
      scaleMode: homeProgressionState.scaleMode,
      voicingIndexes: homeProgressionState.guitarVoicingIndexes,
    });
    const difficultyLine = infoCard.querySelector("[data-home-progression-songs]");

    difficultyLine.classList.add("guitar-progression-skill-level", "progression-difficulty-label");
    difficultyLine.textContent = guitarProgressionDifficultyText(difficultyLevel);
    difficultyLine.setAttribute("aria-label", `${getStringedInstrumentName()} progression skill level ${difficultyLevel}: ${getGuitarProgressionDifficultyLabel(difficultyLevel)}`);
    return;
  }

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

function scheduleHomeProgressionAnimation(chordSymbols, labels, { arpeggio = false } = {}) {
  const animation = ensureHomeProgressionStage(chordSymbols, labels);

  if (!animation) {
    return;
  }

  chordSymbols.forEach((_, index) => {
    const chordStart = startDelay + index * progressionChordSpacing;

    if (arpeggio) {
      const guitarVoicingPlayback = isStringedInstrumentMode()
        ? guitarVoicingPlaybackFromSymbol(
            chordSymbols[index],
            homeProgressionGuitarVoicingIndex(index, chordSymbols[index])
          )
        : null;
      const sourceNotes = guitarVoicingPlayback?.notes || chordNotesFromSymbol(chordSymbols[index]);
      const notes = guitarVoicingPlayback ? sourceNotes : upDownArpeggioSequence(sourceNotes);

      notes.forEach((note, noteIndex) => {
        schedulePlayback(() => {
          setProgressionAnimationChord(animation, index, { isPlaying: true, activeNotes: [note] });
        }, chordStart + noteIndex * progressionArpeggioNoteSpacing);
      });

      schedulePlayback(() => {
        if (Number(animation.dataset.activeIndex) === index) {
          setProgressionAnimationChord(animation, index);
        }
      }, chordStart + Math.max(notes.length - 1, 0) * progressionArpeggioNoteSpacing + progressionArpeggioNoteDuration);
      return;
    }

    schedulePlayback(() => {
      setProgressionAnimationChord(animation, index, { isPlaying: true });
    }, chordStart);

    schedulePlayback(() => {
      if (Number(animation.dataset.activeIndex) === index) {
        setProgressionAnimationChord(animation, index);
      }
    }, chordStart + progressionChordDuration);
  });

  schedulePlayback(() => {
    animation.classList.remove("is-active");
    setProgressionAnimationChord(animation, isStringedInstrumentMode() ? homeProgressionState.selectedStepIndex : 0);
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
  const arpeggio = isStringedInstrumentMode() ? homeProgressionState.arpeggio : pianoPlayStyleArpeggio;

  scheduleHomeProgressionAnimation(chordSymbols, labels, { arpeggio });

  if (shouldUsePianoSampler()) {
    Tone.start();
    chordSymbols.forEach((symbol, index) => {
      if (arpeggio) {
        upDownArpeggioSequence(chordNoteNamesFromSymbol(symbol)).forEach((noteName, noteIndex) => {
          schedulePlayback(() => {
            pianoSampler.triggerAttackRelease(noteName, progressionArpeggioNoteDuration, undefined, 0.82);
          }, startDelay + index * progressionChordSpacing + noteIndex * progressionArpeggioNoteSpacing);
        });
        return;
      }

      schedulePlayback(() => {
        pianoSampler.triggerAttackRelease(chordNoteNamesFromSymbol(symbol), progressionChordDuration, undefined, 0.82);
      }, startDelay + index * progressionChordSpacing);
    });
    return;
  }

  const now = audioContext.currentTime + startDelay;

  chordSymbols.forEach((symbol, index) => {
    const startTime = now + index * progressionChordSpacing;
    const guitarVoicing = isStringedInstrumentMode()
      ? homeProgressionGuitarVoicingContext(index, symbol)
      : null;
    const guitarVoicingPlayback = guitarVoicing
      ? guitarVoicingPlaybackFromSymbol(symbol, guitarVoicing.voicingIndex)
      : null;
    const frequencies = guitarVoicingPlayback?.frequencies || frequenciesFromChordSymbol(symbol);

    if (arpeggio) {
      const noteFrequencies = guitarVoicingPlayback ? frequencies : upDownArpeggioSequence(frequencies);

      noteFrequencies.forEach((frequency, noteIndex) => {
        playNativeSingleNote(
          frequency,
          startTime + noteIndex * progressionArpeggioNoteSpacing,
          progressionArpeggioNoteDuration,
          playbackOutput,
          soundMode
        );
      });
      return;
    }

    playNativeChordSound(frequencies, startTime, progressionChordDuration, playbackOutput, soundMode, {
      preserveOrder: Boolean(guitarVoicingPlayback),
    });
  });
}

function setHomepagePianoAreaMode(mode) {
  if (!isHomeDashboardPage()) {
    return;
  }

  const elements = homeProgressionElements();
  const nextMode = normalizeHomepagePianoAreaMode(mode);

  captureHomeChordSnapshot();
  storeHomepagePianoAreaMode(nextMode);
  setHomepageAreaMenuValue(elements, nextMode);

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
  setHomepageAreaMenuValue(elements, "chords");
}

function initializeHomepagePianoAreaMode() {
  const { areaMenu } = homeProgressionElements();

  if (!isHomeDashboardPage() || !areaMenu) {
    return;
  }

  captureHomeChordSnapshot();
  const requestedMode = getHomepagePianoAreaModeFromUrl();
  const initialMode = requestedMode || getStoredHomepagePianoAreaMode();

  setHomepagePianoAreaMode(initialMode);

  if (initialMode === "progressions") {
    applyHomepageProgressionUrlParams();
    renderHomeProgressionsMode();
  }
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
    if (!line.dataset.progressionChords) {
      return;
    }

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
initializeInstrumentFamilyMenu();
initializeSoundSelector();
initializePianoTheme();
initializeHeaderDropdownMenus();
initializeNotationToggle();
initializeMajorChordPage();
initializeMajorKeyPage();
initializeDynamicMajorPage();
initializePianoOctaveToggle();
initializeChordCards();
initializeProgressions();
initializeRelatedChordsViewportWatcher();
updateNotation();
initializeHomepagePianoAreaMode();
