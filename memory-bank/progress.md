# Progress: MFGnerd Shopify Store Customization

## 1. Current Status (Header & Theme Refinement)

*   **Overall:** Initial theme customization implemented. Refinements ongoing based on feedback, focusing on header layout/styling and theme consistency.
*   **Theme:** Dawn theme with modifications in `assets/base.css`, `layout/theme.liquid`, `sections/header.liquid`.

## 2. What Works

*   IBM Plex Mono font applied globally.
*   Theme toggle button exists in header and persists preference via localStorage.
*   `data-theme` attribute correctly switches on `<html>` element.
*   **FOUC Fix:** Inline script added to `layout/theme.liquid` prevents flash of light theme.
*   **Header Text:** Vertical display issue fixed. Logo text styled directly on link.
*   **Dark Mode Text:** Common text elements (`p`, `.rte`, `.product__description`) correctly use dark mode text color.
*   **Header Border (Dark Mode):** Border applied only to `.header.page-width`, matching content width.
*   **Header Layout:** Desktop grid adjusted (`auto 1fr auto`) to push icons right.
*   "MFGnerd" text logo displayed in header.
*   "Blog" link displayed in header (desktop).

## 3. What's Left to Build / Refine (High-Level To-Do)

*   **[ ] Header Adjustments:**
    *   **[ ] Fix Stacked Navigation:** Items (Home, Catalog, Contact) still stack vertically. Needs CSS fix for `.header__inline-menu .list-menu--inline` or its items.
    *   **[ ] Verify Header Width/Border:** Confirm alignment matches page content after navigation fix.
    *   **[X] Adjust header width/padding:** Fixed `max-width` removed, should use `--page-width`. *(Marking as potentially done, needs verification)*.
    *   **[X] Add thin orange bottom border in dark mode:** Rule added for `.header.page-width`. *(Marking as done)*.
    *   **[ ] Standardize navigation text size:** Needs CSS adjustment.
    *   **[ ] Add "Blog" link to mobile menu drawer.**
*   **[ ] Color Application Refinement:**
    *   **[ ] Ensure background/text colors apply globally:** Address Shopify scheme overrides.
    *   **[ ] Fix Dark Mode Text Colors (Other Elements):** Verify elements beyond common text containers.
    *   **[ ] Apply correct card background/text colors (`--mfg-color-card`, etc.).**
    *   **[ ] Apply correct button colors (primary/secondary, background/text).**
    *   **[ ] Apply correct border colors (`--mfg-color-border`)** (beyond header).
*   **[ ] Footer Adjustments:**
    *   [ ] Adjust footer layout/styling for consistency.
    *   [ ] Add "Store" link back to `mfgnerd.ca` blog (if desired).
*   **[ ] General Styling:**
    *   [ ] Review/adjust input field styles.
    *   [ ] Review/adjust card component styles (product, collection, blog).
    *   [ ] Review overall spacing and component styling for alignment.
*   **[ ] Testing:**
    *   [X] Initial theme toggle functionality tested.
    *   [X] FOUC fixed.
    *   [ ] Verify visual consistency across different page types (homepage, product, collection, cart).
    *   [ ] Test theme toggle functionality thoroughly after refinements.
    *   [ ] Test responsiveness.

## 4. Known Issues / Feedback (Current)

*   **Stacked Navigation:** Header nav items display vertically.
*   **Header Width/Border Alignment:** May still not perfectly align with page content (needs verification).
*   **Global Color Application:** Theme toggle doesn't apply colors globally due to Shopify color scheme overrides.
*   **Nav Text Size:** Inconsistent with Astro site.
*   **Dark Mode Text Color (Other Elements):** Potential issues beyond common text areas.

## 5. Decisions Log

*   **Decision:** Use Shopify theme customization (Dawn base) instead of headless.
    *   **Reason:** Faster development, leverages Shopify platform strengths, suitable for current scale, allows future flexibility/decoupling.
*   **Decision:** Maintain separate Astro blog and Shopify store.
    *   **Reason:** Preserves blog performance/independence, cost-effective, simplifies future decoupling if needed.
*   **Decision:** Target branding elements (IBM Plex Mono, specific light/dark colors, theme toggle) from `mfgnerd.ca`.
    *   **Reason:** Ensure visual consistency between blog and store.
*   **Decision:** Add inline script to `<head>` in `layout/theme.liquid` to fix FOUC.
*   **Decision:** Simplify header logo HTML by removing inner `span` and styling `<a>` tag directly.
*   **Decision:** Apply dark mode header border to `.header.page-width` instead of `.header-wrapper`.
*   **Decision:** Use `write_to_file` as fallback for `assets/base.css` due to repeated `replace_in_file` failures.
