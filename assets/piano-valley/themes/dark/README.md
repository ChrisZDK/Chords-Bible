# Piano Dark Theme Assets

Recommended destination in the repo:

`assets/piano-valley/themes/dark/`

Runtime files:

- `hero-dark.webp` - 2160x720, main desktop hero/banner.
- `hero-dark-1200.webp` - 1200x400, mobile/tablet hero fallback.
- `theme-dark-banner.webp` - 1200x175, compact page hero banner.
- `theme-dark-banner-bg.webp` - 1920x591, page background banner.
- `robot-banner.webp` - 96x104, compact hero robot sprite.
- `robot-keyboard.webp` - 192x192, sound/heading robot sprite.
- `robot-synth.webp` - 320x320, progressions panel robot sprite.
- `robot-floating.webp` - 320x320, summary/info robot sprite.
- `crystal-icon.webp` - 128x128, Related Chords and key summary icon.
- `chord-emblem-c.webp` - 512x512, UI tile for the C chord emblem.
- `play-button.webp` - 256x256, play button inactive state.
- `play-button-hover.webp` - 256x256, play button hover/pressed state.
- `repeat-button.webp` - 256x256, repeat button inactive state.
- `repeat-button-hover.webp` - 256x256, repeat button hover state.
- `repeat-button-active.webp` - 256x256, repeat button active/looping state.

Source/backups:

- Original PNG files remain in this folder for future edits and rollback.
- `robot-small.png`, `wizard-creature.png`, `piano-dark-logo.png`, and `piano-dark-banner.png` are currently not runtime-referenced.

Notes:

- Runtime artwork is WebP for smaller downloads.
- Use `loading="lazy"` and `decoding="async"` for sprites/icons below the fold.
- Do not lazy-load `hero-dark.webp` or `theme-dark-banner.webp` when either is the first visible hero image.
