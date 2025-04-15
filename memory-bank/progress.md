# Progress: MFGnerd Shopify Store Customization

## 1. Current Status (Refinement)

*   **Overall:** Initial theme customization implemented (font, theme toggle, basic colors, logo, blog link). Received feedback, ready for refinement.
*   **Theme:** Dawn theme with initial modifications.

## 2. What Works

*   IBM Plex Mono font applied globally.
*   Theme toggle button exists in header and persists preference via localStorage.
*   `data-theme` attribute correctly switches on `<html>` element.
*   Basic color variable mapping applied (though overrides are needed).
*   "MFGnerd" text logo displayed in header.
*   "Blog" link displayed in header (desktop).

## 3. What's Left to Build / Refine (High-Level To-Do)

Based on `activeContext.md`, the following customizations need to be implemented in the Dawn theme:

*   **[ ] Color Application Refinement:**
    *   [ ] Ensure background/text colors apply globally, overriding Shopify schemes where necessary (likely needs more specific CSS rules or potentially removing scheme classes).
    *   [ ] Fix dark mode text colors (black on grey, light grey text) to use `--mfg-color-text-base`.
    *   [ ] Apply correct card background/text colors (`--mfg-color-card`, etc.).
    *   [ ] Apply correct button colors (primary/secondary, background/text).
    *   [ ] Apply correct border colors (`--mfg-color-border`).
*   **[ ] Header Adjustments:**
    *   [ ] Adjust header width/padding to match Astro site (`max-width: 3xl` equivalent).
    *   [ ] Add thin orange bottom border in dark mode (`--mfg-color-border`).
    *   [ ] Standardize navigation text size.
    *   [ ] Add "Blog" link to mobile menu drawer.
*   **[ ] Footer Adjustments:**
    *   [ ] Adjust footer layout/styling for consistency.
    *   [ ] Add "Store" link back to `mfgnerd.ca` blog (if desired).
*   **[ ] General Styling:**
    *   [ ] Review/adjust input field styles.
    *   [ ] Review/adjust card component styles (product, collection, blog).
    *   [ ] Review overall spacing and component styling for alignment.
*   **[ ] Testing:**
    *   [X] Initial theme toggle functionality tested.
    *   [ ] Verify visual consistency across different page types (homepage, product, collection, cart).
    *   [ ] Test theme toggle functionality thoroughly after refinements.
    *   [ ] Test responsiveness.

## 4. Known Issues / Feedback

*   Theme toggle doesn't apply colors globally due to Shopify color scheme overrides.
*   Header width differs from Astro site.
*   Header border missing in dark mode.
*   Nav text size inconsistent.
*   Incorrect text colors in dark mode (black on grey, light grey).

## 5. Decisions Log

*   **Decision:** Use Shopify theme customization (Dawn base) instead of headless.
    *   **Reason:** Faster development, leverages Shopify platform strengths, suitable for current scale, allows future flexibility/decoupling.
*   **Decision:** Maintain separate Astro blog and Shopify store.
    *   **Reason:** Preserves blog performance/independence, cost-effective, simplifies future decoupling if needed.
*   **Decision:** Target branding elements (IBM Plex Mono, specific light/dark colors, theme toggle) from `mfgnerd.ca`.
    *   **Reason:** Ensure visual consistency between blog and store.
