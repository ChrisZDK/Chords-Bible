# Piano Valley Dark Theme Assets

Recommended destination in the repo:

`assets/piano-valley/themes/dark/`

Files:

- `hero-dark.webp` — 2160×720, main desktop hero/banner.
- `hero-dark-1200.webp` — 1200×400, mobile/tablet hero `srcset` fallback.
- `robot-keyboard.png` — 512×512 transparent sprite.
- `robot-synth.png` — 512×512 transparent sprite.
- `robot-floating.png` — 384×384 transparent sprite.
- `robot-small.png` — 320×320 transparent sprite.
- `wizard-creature.png` — 384×384 transparent sprite for the About card.
- `chord-emblem-c.webp` — 512×512 UI tile for the C chord emblem.
- `play-button.webp` — 512×512 UI tile for the play button.
- `crystal-icon.png` — 128×128 transparent icon for Related Chords.

Notes:

- Large opaque artwork is WebP.
- Decorative sprites/icons that need layering are PNG with transparency.
- Use `loading="lazy"` and `decoding="async"` for sprites/icons below the fold.
- Do not lazy-load `hero-dark.webp` if it is the first visible hero image.
