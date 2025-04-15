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
    *   **Homepage Logo Alignment:** Added `.template-index h1.header__heading { margin: 0; }` to `assets/base.css` to specifically target homepage. *(Fixed, needs verification)*
    *   **Theme Toggle Size:** Reduced size of `.header__icon--theme .svg-wrapper` to `24px` in `assets/base.css`. *(Verified)*
    *   **Header Font Weight:** Set `font-weight: 600` for `.header__heading-link`, `.header__menu-item` in `assets/base.css`. *(Verified)*
    *   **Blog Link Removal:** Removed custom Blog link HTML from `sections/header.liquid` and associated CSS from `assets/base.css`. *(Done)*
    *   **Header Font Color:** Changed `.header__heading-link` and `.header__menu-item` color to `rgb(var(--color-foreground))` in `assets/base.css`. *(Verified)*
    *   **Active Nav Style:** Changed `.header__active-menu-item` to wavy underline, default color `rgb(var(--color-foreground))` (removed dark-mode specific override), thicker (`0.25rem`), more offset (`0.6rem`). *(Needs verification)*
    *   **Nav Hover Style:** Removed default underline. Set hover color to `rgb(var(--mfg-color-accent))` for `.header__menu-item:hover`. Active item squiggle persists and changes color to accent on hover (removed redundant hover rule). *(Needs verification)*
    *   **Header Font Size:** Increased size for `.header__heading-link` (to `2.4rem`) and `.header__menu-item` (to `1.7rem`). *(Verified)*
    *   **Header Icon Hover Color:** Refined CSS rules in `assets/base.css` with specific selectors for `a.header__icon`, `details-modal > details > summary.header__icon`, and `button.header__icon--theme` to set hover color to accent and ensure SVG `fill` inherits `currentColor`. *(Fixed, needs verification)*

## 3. Feedback / Issues to Address (Consolidated)

*   **Stacked Navigation:** Fixed.
*   **Homepage Logo Alignment:** Specific CSS added for `.template-index`. *(Needs verification)*
*   **Theme Toggle Size:** Verified.
*   **Header Font Weight:** Verified.
*   **Header Font Color:** Verified.
*   **Active Nav Style:** Wavy underline. *(Needs verification)*
*   **Nav Hover Style:** Accent color, no underline, active squiggle persists. *(Needs verification)*
*   **Header Font Size:** Verified.
*   **Header Width/Border Alignment:** Verified.
*   **Header Icon Hover Color:** Refined CSS with specific selectors. *(Needs verification)*
*   **Global Color Application:** Theme toggle doesn't change colors globally (likely due to Shopify color schemes overriding base styles).
*   **Nav Text Size:** Discrepancy in navigation text sizes between the two sites. *(Needs further adjustment)*
*   **Dark Mode Text Color (Other Elements):** Verified.
*   **Dark Mode Icon Color:** Verified.
*   **Footer Adjustments:** Needs styling for consistency and potential "Store" link.
*   **General Styling:** Review inputs, cards, spacing.
*   **Mobile Menu:** Add "Blog" link (via Shopify Navigation).

## 4. Next Steps (Immediate To-Do)

1.  **Verify Fixes:** Confirm homepage logo alignment and header icon hover colors.
2.  **Verify Nav Styles:** Confirm active nav style (default & hover) and nav hover style (accent color, squiggle persistence).
3.  **Standardize Nav Text Size:** Further adjustments if needed.
4.  **Refine Color Application:** Address remaining global color issues (backgrounds, cards, buttons, borders).
5.  Address other pending items from `progress.md`.

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
*   Active navigation link styles can be modified using the `.header__active-menu-item` class and CSS text-decoration properties. Need to ensure hover rules don't override the active style unintentionally, and avoid theme-specific overrides if the general rule suffices.
*   Navigation link hover effects are controlled by the `.header__menu-item:hover` and `.header__menu-item:hover span` rules.
*   Homepage-specific CSS might require prefixing selectors with `.template-index` for higher specificity.
*   Styling icon hover effects often involves setting the `color` on the parent container (`<a>` or `<button>`) and ensuring the SVG uses `fill="currentColor"`.
