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

*   **[X] Header Adjustments:**
    *   **[X] Fix Stacked Navigation:** Items (Home, Catalog, Contact) were stacked vertically. Removed conflicting `display: inline-block` rule from `.header__inline-menu .list-menu--inline > .list-menu__item` in `assets/base.css`. *(Fixed)*
    *   **[X] Fix Homepage Logo Alignment:** Added `h1.header__heading { margin: 0; }` to `assets/base.css`. *(Needs verification)*
    *   **[X] Adjust Theme Toggle Size:** Reduced size of `.header__icon--theme .svg-wrapper` to `24px` in `assets/base.css`. *(Needs verification)*
    *   **[X] Adjust Header Font Weight:** Set `font-weight: 600` for logo, nav, blog link in `assets/base.css`. *(Needs verification)*
    *   **[ ] Verify Header Width/Border:** Confirm alignment matches page content after navigation fix.
    *   **[X] Adjust header width/padding:** Fixed `max-width` removed, should use `--page-width`. *(Marking as potentially done, needs verification)*.
    *   **[X] Add thin orange bottom border in dark mode:** Rule added for `.header.page-width`. *(Marking as done)*.
    *   **[ ] Standardize navigation text size:** Needs further CSS adjustment if font-weight change isn't sufficient.
    *   **[ ] Add "Blog" link to mobile menu drawer.**
*   **[ ] Color Application Refinement:**
    *   **[ ] Ensure background/text colors apply globally:** Address Shopify scheme overrides.
    *   **[X] Fix Dark Mode Text Colors (Other Elements):** Added rule for `.form__label` in `assets/base.css`. *(Fixed, needs verification)*
    *   **[X] Fix Dark Mode Icon Colors:** Added rules for `.select .icon-caret`, `.quantity__button .icon`, etc. Added rule for `.newsletter-form__button.field__button` color in `assets/base.css`. *(Fixed, needs verification)*
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

*   **Stacked Navigation:** Fixed.
*   **Header Width/Border Alignment:** May still not perfectly align with page content. *(Needs verification)*
*   **Global Color Application:** Theme toggle doesn't apply colors globally due to Shopify color scheme overrides.
*   **Nav Text Size:** Inconsistent with Astro site (partially addressed by font-weight change).
*   **Dark Mode Text Color (Other Elements):** Added rule for `.form__label`. *(Fixed, needs verification)*
*   **Dark Mode Icon Color:** Added rules for common icons. Added rule for newsletter arrow button color. *(Fixed, needs verification)*

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
*   **Decision:** Remove `display: inline-block` from `.header__inline-menu .list-menu--inline > .list-menu__item` in `assets/base.css` to fix stacked navigation.
*   **Decision:** Add specific rules to `assets/base.css` under `html[data-theme="dark"]` to force correct text color for `.form__label` and `fill` color for various icons. Set `color` on `.newsletter-form__button.field__button` for newsletter arrow.
*   **Decision:** Add `h1.header__heading { margin: 0; }` to `assets/base.css` to fix homepage logo alignment.
*   **Decision:** Reduce size of `.header__icon--theme .svg-wrapper` to `24px` in `assets/base.css`.
*   **Decision:** Set `font-weight: 600` for `.header__heading-link`, `.header__menu-item`, `.header__icon--blog` in `assets/base.css`.
