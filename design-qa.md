# Hero V2 — Design QA

## Source visual truth

- Reference: `/Users/paolazerpa/Downloads/Desktop - 1.png` (`2160 × 1200`, reference for framing and focal placement).
- Source image used by the implementation: `src/assets/paola-problema-scene.jpg` (`2400 × 1800`, unchanged).

## Implementation evidence

- Desktop: `/private/tmp/paola-hero-final-desktop-v2.png` at `1440 × 900` CSS px.
- Tablet: `/private/tmp/paola-hero-final-tablet-v2.png` at `820 × 900` CSS px.
- Mobile: `/private/tmp/paola-hero-final-mobile.png` at `390 × 844` CSS px.
- State: Home route `/`, default state, no menu open.

## Review

- Typography: H1 remains one semantic heading with two visual levels; the first level stays on one line on desktop, while the second remains headline-sized and wraps naturally. Body copy remains visually subordinate and fits the intended desktop rhythm.
- Layout: Paola is prioritized on the left, with copy in the central/right air. Rounded frame, CTA placement and scroll indicator remain consistent with the existing Hero.
- Image treatment: the original image is not edited. Desktop/tablet use a sharp `contain` layer aligned left over a blurred `cover` background; a horizontal mask softens the transition. Mobile uses a focal `cover` treatment because the vertical frame cannot preserve the full 4:3 image without unusable empty space.
- Colors and tokens: existing dark teal, cream, citron and pink tokens remain in use.
- Copy: approved eyebrow, H1 levels, body copy and CTA destinations are present; removed copy and decorative note are absent.
- Responsive: desktop, tablet and mobile render without horizontal overflow. The exact `768px` viewport retains the existing Header breakpoint behavior and was not changed because Header was outside scope.
- Accessibility: CTA links retain semantic anchors and the scroll control retains its accessible label and keyboard tab index.

## Findings

No actionable P0, P1 or P2 findings. The reference is a framing reference rather than a pixel-identical viewport, so comparison focuses on focal placement, preserved image proportions, right-side air and visual hierarchy.

## Validation

- `npm run build`: passed; existing SSR `useLayoutEffect` warnings remain.
- `npm run lint`: passed.
- CTA destinations: `/portfolio` and `/contacto` verified.
- Horizontal overflow: absent at desktop, tablet and mobile.

final result: passed
