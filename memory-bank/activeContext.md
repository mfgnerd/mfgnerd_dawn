# Active Context: MFGnerd Shopify Store Customization (Refinement)

## 1. Current Focus

*   Refine theme customization based on initial testing feedback.
*   Address specific style discrepancies between the Shopify theme and the Astro blog.
*   Update Memory Bank documentation.

## 2. Recent Changes/Decisions

*   **Confirmed Strategy:** Proceed with customizing the Shopify Dawn theme for `store.mfgnerd.ca`.
*   **Confirmed Scope:** Focus on branding alignment (colors, typography, layout feel, theme toggle) with `mfgnerd.ca`.
*   **Confirmed Architecture:** Maintain separate Astro blog and Shopify store sites.
*   **Theme Base:** Shopify Dawn theme.
*   **Memory Bank:** Initialized.
*   **Initial Customization Implemented:**
    *   IBM Plex Mono font linked and applied via CSS variables.
    *   Light/dark mode CSS variables (`--mfg-color-*`) defined.
    *   Theme toggle button added to header (`sections/header.liquid`).
    *   Theme toggle JS created (`assets/theme-toggle.js`) and linked.
    *   Initial mapping of `--mfg-color-*` to Shopify's `--color-*` variables within `html[data-theme]` rules (`assets/base.css`).
    *   "MFGnerd" text logo added to header.
    *   "Blog" link added to header icons (desktop).
*   **Initial Testing Feedback:**
    *   Font updated correctly.
    *   Theme toggle button present and persists preference.
    *   Color switching works for some elements (e.g., hero text) but not globally (e.g., background).

## 3. Feedback / Issues to Address

*   **Header Width:** Shopify header appears wider than the Astro site's header.
*   **Header Border (Dark Mode):** Astro site has a thin orange line under the header in dark mode; Shopify theme does not.
*   **Nav Text Size:** Discrepancy in navigation text sizes between the two sites.
*   **Dark Mode Text Color:** Some text remains black on grey backgrounds in Shopify dark mode, unlike the Astro site.
*   **Dark Mode Text Color (Light Grey):** Some text in Shopify dark mode is light grey, which doesn't match the Astro site's primary dark mode text color.
*   **Global Color Application:** Theme toggle doesn't change colors globally (likely due to Shopify color schemes overriding base styles).

## 4. Next Steps (Immediate To-Do)

1.  Update `memory-bank/progress.md` with feedback and refined tasks.
2.  **Address Header Width:** Investigate header CSS/structure (`sections/header.liquid`, `assets/base.css`, potentially `assets/section-header.css`) and adjust `max-width` or padding to match Astro site.
3.  **Add Header Border (Dark Mode):** Add CSS rule for `html[data-theme="dark"] .header-wrapper` (or similar selector) to apply a bottom border using `--mfg-color-border`.
4.  **Standardize Nav Text:** Inspect nav elements (`sections/header.liquid`, `component-list-menu.css`, etc.) and adjust `font-size` in CSS.
5.  **Fix Dark Mode Text Colors:**
    *   Identify elements showing incorrect text colors (black or light grey) in dark mode.
    *   Adjust CSS rules for these elements within the `html[data-theme="dark"]` scope in `assets/base.css` (or component-specific CSS files) to use `--mfg-color-text-base`. May require increased specificity or `!important`.
6.  **Refine Color Application:** Re-evaluate the mapping of `--mfg-color-*` variables or add more specific CSS overrides targeting components affected by Shopify color schemes.

## 5. Active Preferences & Patterns

*   **Visual Goal:** Mimic the clean, minimalist, technical aesthetic of `mfgnerd.ca`.
*   **Font:** Prioritize consistent use of IBM Plex Mono.
*   **Color:** Strict adherence to the defined light and dark mode palettes from the Astro site. Apply colors directly to elements or override scheme variables as needed.
*   **Functionality:** The light/dark theme toggle is critical.
*   **Development:** Use CSS overrides and JavaScript within the Dawn theme structure.

## 6. Learnings & Insights

*   Shopify's color scheme system requires careful handling when applying global theme changes. Overrides might need to target scheme-specific classes or use higher specificity.
*   Directly styling `body` might not be sufficient due to section-specific styles.
