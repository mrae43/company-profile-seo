# Design System Document: Precision Medical Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Clinical Architect"
This design system is not merely a collection of UI components; it is a visual manifestation of medical precision and technological advancement. We move away from the generic "tech startup" aesthetic toward a **High-End Editorial** experience.

The system is defined by **The Clinical Architect**—a philosophy that balances the warmth of human-centric medical care with the cold, sharp accuracy of laboratory science. We achieve this through:
* **Intentional Asymmetry:** Breaking the traditional grid to create focal points that feel curated, not templated.
* **Breathing Room:** Using aggressive whitespace to imply luxury and focused attention.
* **Tonal Depth:** Replacing harsh structural lines with soft, layered transitions.

## 2. Colors

The palette is anchored by the signature lime green, used as a surgical strike of color against a backdrop of sophisticated grays and pure surfaces.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. Use `surface-container-low` sections sitting on a `surface` background to denote change in context.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials.
* **Base:** `surface` (#f9f9f9)
* **Low Elevation:** `surface-container-low` (#f3f3f3) for secondary content areas.
* **High Elevation:** `surface-container-highest` (#e2e2e2) for interactive modules.
* **Interactive Surface:** `surface-container-lowest` (#ffffff) for primary cards to create a "lift" against a tinted background.

### The "Glass & Gradient" Rule
To escape a "flat" feel, use **Glassmorphism** for floating navigation or overlay elements. Apply `surface` at 70% opacity with a `24px` backdrop blur.
* **Signature Gradient:** For primary CTAs, use a subtle linear gradient (135°) from `primary` (#4d6700) to `primary-container` (#a3cf2d). This adds "soul" and depth to the lime green.

## 3. Typography

The system utilizes a dual-font strategy to balance authority with readability.

* **Display & Headlines (Manrope):** A geometric sans-serif that feels engineered. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to establish a "High-Tech" clinical feel.
* **Body & Labels (Inter):** Chosen for its exceptional legibility in technical data.
* **The Identity Scale:** Headlines should be significantly larger than body text to create a dramatic editorial contrast. `headline-lg` (2rem) paired with `body-md` (0.875rem) creates a hierarchy that feels authoritative and professional.

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering**.

* **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural lift without the "dirty" look of standard shadows.
* **Ambient Shadows:** For floating elements (like modals), use a diffuse shadow: `0 20px 40px rgba(26, 28, 28, 0.06)`. The tint should use the `on-surface` color, never pure black.
* **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at **15% opacity**. High-contrast, 100% opaque borders are forbidden.
* **Frosted Glass:** Use semi-transparent backgrounds on header bars to allow the clinical lime and gray colors to bleed through, softening the edges of the UI.

## 5. Components

### Buttons
* **Primary:** Gradient of `primary` to `primary-container`. `rounded-full` (9999px) for a modern, friendly medical feel. Large padding (`spacing-4` vertical, `spacing-8` horizontal).
* **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
* **Tertiary:** Text-only in `primary` with a subtle hover state shift to `surface-container-low`.

### Cards
* **Styling:** Forbid divider lines. Use `spacing-10` to separate internal elements.
* **Interaction:** On hover, a card should shift from `surface-container-lowest` to `surface-container-low` with a subtle `200ms` transition.

### Input Fields
* **Clinical Precision:** Use `surface-container-low` for the input track. Instead of a full border, use a 2px bottom-accent in `outline-variant` that transforms to `primary` on focus.
* **Labels:** Use `label-md` in `on-surface-variant` for a technical, metadata-heavy appearance.

### Medical Data Chips
* **Style:** Small, `rounded-sm` (0.125rem) containers using `secondary-container`. These should feel like labels on a medical device.

## 6. Do's and Don'ts

### Do
* **Do** use asymmetrical layouts where text is weighted to one side and high-resolution medical hardware imagery bleeds off the other.
* **Do** use the `primary-fixed-dim` (#a9d634) for text on dark backgrounds to maintain readability and medical vibrancy.
* **Do** prioritize vertical whitespace. If you think there is enough space, add `spacing-4` more.

### Don't
* **Don't** use 1px solid black or dark gray borders to separate content. It breaks the "Clinical Architect" flow.
* **Don't** use standard drop shadows (e.g., `0 2px 4px`). They feel dated and "un-engineered."
* **Don't** center-align long blocks of body text. Maintain a strong left-aligned axis to mimic high-end medical journals.
* **Don't** use the lime green (#a3cf2d) for body text; reserve it for headers, accents, and primary actions only.