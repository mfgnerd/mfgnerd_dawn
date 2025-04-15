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
    *   **Stacked Navigation:** Attempted fix by setting `.header__inline-menu .list-menu--inline > .list-menu__item` to `display: inline-block` in `assets/base.css`.

## 3. Feedback / Issues to Address (Consolidated)

*   **Stacked Navigation:** Header navigation items (Home, Catalog, Contact) are still stacked vertically despite CSS adjustments.
*   **Header Width/Border Alignment:** Header and dark mode border might still not perfectly align with the main page content width (needs verification after nav fix).
*   **Global Color Application:** Theme toggle doesn't change colors globally (likely due to Shopify color schemes overriding base styles).
*   **Nav Text Size:** Discrepancy in navigation text sizes between the two sites.
*   **Dark Mode Text Color (Other Elements):** Need to verify if other elements besides common text containers still show incorrect colors (black or light grey) in dark mode.
*   **Footer Adjustments:** Needs styling for consistency and potential "Store" link.
*   **General Styling:** Review inputs, cards, spacing.
*   **Mobile Menu:** Add "Blog" link.

## 4. Next Steps (Immediate To-Do)

1.  **Fix Stacked Navigation:** Re-investigate CSS for `.header__inline-menu`, `.list-menu--inline`, and `.list-menu__item`. Check grid column constraints or potential conflicting flex/display properties.
2.  **Verify Header Width/Border:** Confirm alignment after navigation fix.
3.  **Refine Color Application:** Address global color issues, likely by targeting specific component CSS or increasing override specificity.
4.  **Standardize Nav Text Size:** Adjust `font-size` in relevant CSS.
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
