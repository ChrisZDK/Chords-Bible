# Piano Dark Theme Assets

Recommended destination in the repo:

`assets/themes/dark/`

Runtime files:

- `theme-dark-banner.webp` - 1200x175, compact page hero banner.
- `theme-dark-banner-bg.webp` - 1920x591, page background banner.
- `robot-banner.webp` - 96x104, compact hero robot sprite.
- `robot-keyboard.webp` - 192x192, sound/heading robot sprite.
- `robot-floating.webp` - 320x320, summary/info robot sprite.
- `crystal-icon.webp` - 128x128, Related Chords and key summary icon.
- `play-button.webp` - 256x256, play button inactive state.
- `play-button-hover.webp` - 256x256, play button hover/pressed state.
- `repeat-button.webp` - 256x256, repeat button inactive state.
- `repeat-button-hover.webp` - 256x256, repeat button hover state.
- `repeat-button-active.webp` - 256x256, repeat button active/looping state.

Source/backups:

- Original PNG files and retired artwork are archived under the root `Backup/` folder.

Notes:

- Runtime artwork is WebP for smaller downloads.
- Use `loading="lazy"` and `decoding="async"` for sprites/icons below the fold.
- Do not lazy-load `theme-dark-banner.webp` when it is the first visible hero image.
