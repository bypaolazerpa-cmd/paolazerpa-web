# Hero V2 — Design QA

## Source visual truth

- Reference: `/Users/paolazerpa/Downloads/Desktop - 1.png` (`2160 × 1200`, reference for framing and focal placement).
- Source image used by the implementation: `src/assets/paola-problema-scene.jpg` (`2400 × 1800`, unchanged).

## Implementation evidence

- Desktop: `/private/tmp/hero-opt-desktop-1440-v2.png` at `1440 × 900` CSS px.
- Tablet: `/private/tmp/hero-opt-tablet-1024-final2.png` at `1024 × 900` CSS px.
- Mobile: `/private/tmp/hero-opt-mobile-430.png` at `430 × 844` CSS px and `/private/tmp/hero-opt-mobile-390.png` at `390 × 844` CSS px.
- State: Home route `/`, default state, no menu open.

## Review

- Typography: H1 remains one semantic heading with three block spans sharing the same size, weight and line-height. Desktop preserves the three requested lines at `50px`; tablet uses the same three-line hierarchy at `32px`; mobile uses natural wrapping at `28px`. Body copy remains visually subordinate.
- Layout: desktop uses larger stack gaps and keeps copy on the right; tablet narrows and shifts the complete stack right; mobile moves the complete stack below the face, aligns it left and keeps both compact CTAs in one row.
- Image treatment: the original image is not edited. Desktop/tablet use a sharp `contain` layer aligned left over a blurred `cover` background; the lower overlay no longer blurs the entire lower half and the horizontal mask softens the central transition. Mobile uses a focal `cover` treatment with a mid-to-bottom dark gradient to reserve space for the content.
- Colors and tokens: existing dark teal, cream, citron and pink tokens remain in use.
- Copy: approved eyebrow, H1 levels, body copy and CTA destinations are present; removed copy and decorative note are absent.
- Responsive: desktop `1440px`, tablet `1024px`, mobile `430px` and mobile `390px` render without horizontal overflow. The exact `768px` viewport retains the existing Header breakpoint behavior and was not changed because Header was outside scope.
- Accessibility: CTA links retain semantic anchors and the scroll control retains its accessible label and keyboard tab index.

## Findings

No actionable P0, P1 or P2 findings. The reference is a framing reference rather than a pixel-identical viewport, so comparison focuses on focal placement, preserved image proportions, right-side air and visual hierarchy.

## Validation

- `npm run build`: passed; existing SSR `useLayoutEffect` warnings remain.
- `npm run lint`: passed.
- CTA destinations: `/portfolio` and `/contacto` verified.
- Horizontal overflow: absent at desktop, tablet and mobile.

final result: passed
