# Active Context: MFGnerd Shopify Store Customization (Header & Theme Refinement)

## 1. Current Focus

*   Refine header layout and styling to match the Astro site (`mfgnerd.ca`).
*   Address remaining theme inconsistencies (e.g., global color application).
*   Update Memory Bank documentation.

## 2. Recent Changes/Decisions

*   **Confirmed Strategy:** Proceed with customizing the Shopify Dawn theme for `store.mfgnerd.ca`.
*   **Confirmed Scope:** Focus on branding alignment (colors, typography, layout feel, theme toggle) with `mfgnerd.ca`.
*   **Confirmed Architecture:** Maintain separate Astro blog and Shopify store sites.
*   **Theme Base:** Shopify Dawn theme.
*   **Memory Bank:** Initialized and updated.
*   **Initial Customization Implemented:**
    *   IBM Plex Mono font linked and applied via CSS variables.
    *   Light/dark mode CSS variables (`--mfg-color-*`) defined.
    *   Theme toggle button added to header (`sections/header.liquid`).
    *   Theme toggle JS created (`assets/theme-toggle.js`) and linked.
    *   Initial mapping of `--mfg-color-*` to Shopify's `--color-*` variables within `html[data-theme]` rules (`assets/base.css`).
    *   "MFGnerd" text logo added to header (HTML structure simplified).
    *   "Blog" link added to header icons (desktop).
*   **Refinements Implemented:**
    *   **FOUC Fix:** Added inline script to `layout/theme.liquid` to prevent flash of light theme.
    *   **Header Text:** Fixed vertical display issue by removing inner `span` and styling `a.header__heading-link` directly in `assets/base.css`.
    *   **Dark Mode Text:** Improved rule in `assets/base.css` to target common text elements (`p`, `.rte`, `.product__description`) and apply `--mfg-color-text-base`.
    *   **Header Width:** Removed fixed `max-width` override in `assets/base.css` to allow header to use standard `--page-width`.
    *   **Header Border (Dark Mode):** Removed `header-wrapper--border-bottom` class from `sections/header.liquid` and added CSS rule to apply border only to `.header.page-width` in dark mode (`assets/base.css`).
    *   **Header Layout:** Adjusted desktop grid columns for `.header--middle-left` in `assets/base.css` to `auto 1fr auto` to push icons right.
    *   **Stacked Navigation:** Removed conflicting `display: inline-block` rule from `.header__inline-menu .list-menu--inline > .list-menu__item` in `assets/base.css` to allow flex layout. *(Fixed)*
    *   **Dark Mode Text/Icons:** Added specific rules in `assets/base.css` to force correct dark mode text color for `.form__label` and correct `fill` color for icons (`.select .icon-caret`, `.quantity__button .icon`, `summary .icon-caret`, `.disclosure .icon-caret`). Also added rule to set `color` on `.newsletter-form__button.field__button` for the arrow icon. *(Fixed, needs verification)*
    *   **Homepage Logo Alignment:** Added `h1.header__heading { margin: 0; }` to `assets/base.css` to remove default H1 margins.
    *   **Theme Toggle Size:** Reduced size of `.header__icon--theme .svg-wrapper` to `24px` in `assets/base.css`.
    *   **Header Font Weight:** Set `font-weight: 600` for `.header__heading-link`, `.header__menu-item` in `assets/base.css` (removed `.header__icon--blog` rule).
    *   **Blog Link Removal:** Removed custom Blog link HTML from `sections/header.liquid` and associated CSS from `assets/base.css`.
    *   **Header Font Color:** Changed `.header__heading-link` and `.header__menu-item` color from `rgba(var(--color-foreground), 0.75)` to `rgb(var(--color-foreground))` in `assets/base.css`.
    *   **Active Nav Style:** Changed `.header__active-menu-item` text-decoration to `wavy` underline using the theme's accent color (`rgb(var(--mfg-color-accent))`) in `assets/base.css`.
    *   **Nav Hover Style:** Removed default underline and set hover color to `rgb(var(--mfg-color-accent))` for `.header__menu-item:hover` in `assets/base.css`.

## 3. Feedback / Issues to Address (Consolidated)

*   **Stacked Navigation:** Fixed.
*   **Homepage Logo Alignment:** Added CSS to remove H1 margin. *(Needs verification)*
*   **Theme Toggle Size:** Reduced icon size. *(Needs verification)*
*   **Header Font Weight:** Increased font weight for logo and nav links. *(Needs verification)*
*   **Header Font Color:** Changed to base foreground color. *(Fixed, needs verification)*
*   **Active Nav Style:** Changed to wavy underline with accent color. *(Fixed, needs verification)*
*   **Nav Hover Style:** Removed underline, changed color to accent. *(Needs verification)*
*   **Header Width/Border Alignment:** Header and dark mode border might not perfectly align with the main page content width. *(Needs verification)*
*   **Global Color Application:** Theme toggle doesn't change colors globally (likely due to Shopify color schemes overriding base styles).
*   **Nav Text Size:** Discrepancy in navigation text sizes between the two sites (partially addressed by font-weight change).
*   **Dark Mode Text Color (Other Elements):** Added specific rules for `.form__label`. *(Fixed, needs verification)*
*   **Dark Mode Icon Color:** Added specific rules for common icons (dropdown arrows, quantity buttons, newsletter arrow). *(Fixed, needs verification)*
*   **Footer Adjustments:** Needs styling for consistency and potential "Store" link.
*   **General Styling:** Review inputs, cards, spacing.
*   **Mobile Menu:** Add "Blog" link (via Shopify Navigation).

## 4. Next Steps (Immediate To-Do)

1.  **Verify Header Fixes:** Confirm homepage logo alignment, theme toggle size, header font weights, header font color, active nav style, and nav hover style.
2.  **Verify Dark Mode Text/Icon Fixes:** Confirm labels and icons (including newsletter arrow) now have correct colors in dark mode.
3.  **Verify Header Width/Border:** Confirm alignment.
4.  **Standardize Nav Text Size:** Further adjustments if needed after font-weight change.
5.  **Refine Color Application:** Address remaining global color issues.
6.  Address other pending items from `progress.md`.

## 5. Active Preferences & Patterns

*   **Visual Goal:** Mimic the clean, minimalist, technical aesthetic of `mfgnerd.ca`.
*   **Font:** Prioritize consistent use of IBM Plex Mono.
*   **Color:** Strict adherence to the defined light and dark mode palettes from the Astro site. Apply colors directly to elements or override scheme variables as needed.
*   **Functionality:** The light/dark theme toggle is critical and FOUC should be avoided.
*   **Development:** Use CSS overrides and JavaScript within the Dawn theme structure. Prefer `replace_in_file` but use `write_to_file` as a fallback if necessary.

## 6. Learnings & Insights

*   Shopify's color scheme system requires careful handling when applying global theme changes. Overrides might need to target scheme-specific classes or use higher specificity.
*   Directly styling `body` might not be sufficient due to section-specific styles.
*   Inline scripts in `<head>` are necessary to prevent FOUC with client-side theme switching.
*   CSS Grid and Flexbox interactions within the header require careful adjustment to achieve the desired layout.
*   `replace_in_file` can be unreliable when multiple failures/reverts occur; `write_to_file` is a necessary fallback.
*   Flex item display properties (`inline-block`) can conflict with parent flex container rules (`inline-flex`).
*   Targeting SVGs directly for `fill` might not work if they use `fill="currentColor"`. Instead, set the `color` property of the parent element (e.g., the button).
*   Homepage-specific elements (like `h1` for the logo) might require targeted CSS rules to override default browser styles or theme styles applied only on that page type.
*   Active navigation link styles can be modified using the `.header__active-menu-item` class and CSS text-decoration properties.
*   Navigation link hover effects are controlled by the `.header__menu-item:hover` and `.header__menu-item:hover span` rules.
