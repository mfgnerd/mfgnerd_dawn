# Progress: MFGnerd Shopify Store Customization

## 1. Current Status (Initialization)

*   **Overall:** Project initiated. Memory Bank documentation created. Planning phase complete. Ready to begin theme customization.
*   **Theme:** Base Dawn theme code is present in the working directory. No customizations have been applied yet.

## 2. What Works

*   N/A - No implementation completed yet.

## 3. What's Left to Build (High-Level To-Do)

Based on `activeContext.md`, the following customizations need to be implemented in the Dawn theme:

*   **[ ] Typography:**
    *   [ ] Add IBM Plex Mono font (e.g., via Google Fonts link or local files).
    *   [ ] Apply IBM Plex Mono globally via CSS.
*   **[ ] Color Scheme & Theme Toggle:**
    *   [ ] Define light & dark mode CSS variables in theme CSS.
    *   [ ] Add theme toggle button HTML/Liquid (likely in header).
    *   [ ] Implement theme toggle JavaScript logic (toggle `data-theme`, use `localStorage`).
    *   [ ] Apply CSS variables throughout theme styles to match `mfgnerd.ca` palettes.
*   **[ ] Layout & Branding:**
    *   [ ] Integrate "MFGnerd" logo (text or SVG) into the header.
    *   [ ] Adjust header layout/styling for consistency.
    *   [ ] Adjust footer layout/styling for consistency.
    *   [ ] Add navigation link(s) between store (`store.mfgnerd.ca`) and blog (`mfgnerd.ca`).
    *   [ ] Review overall spacing and component styling for alignment with the blog's aesthetic.
*   **[ ] Testing:**
    *   [ ] Verify visual consistency across different page types (homepage, product, collection, cart).
    *   [ ] Test theme toggle functionality thoroughly.
    *   [ ] Test responsiveness.

## 4. Known Issues

*   None at this stage.

## 5. Decisions Log

*   **Decision:** Use Shopify theme customization (Dawn base) instead of headless.
    *   **Reason:** Faster development, leverages Shopify platform strengths, suitable for current scale, allows future flexibility/decoupling.
*   **Decision:** Maintain separate Astro blog and Shopify store.
    *   **Reason:** Preserves blog performance/independence, cost-effective, simplifies future decoupling if needed.
*   **Decision:** Target branding elements (IBM Plex Mono, specific light/dark colors, theme toggle) from `mfgnerd.ca`.
    *   **Reason:** Ensure visual consistency between blog and store.
