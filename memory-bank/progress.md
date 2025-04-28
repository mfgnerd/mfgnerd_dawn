T# Progress: MFGnerd Shopify Store Customization

## 1. Current Status (Header & Theme Refinement, Cookie Popups)

*   **Overall:** Initial theme customization implemented. Refinements ongoing based on feedback, focusing on header layout/styling and theme consistency. Cookie popup theme styling addressed based on user feedback.
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
*   **Initial Cookie Banner Theme Styling:** Background, text, and button colors are theme-aware. Button layout matches original design.
*   **Manage Cookie Preferences Dialog Theme Styling:** Background, text, and relevant element colors are theme-aware. Checkbox icons are theme-aware with sufficient contrast. H3 title color updates with theme. Option box borders use theme border color in light mode and accent color in dark mode.

## 3. What's Left to Build / Refine (High-Level To-Do)

*   **[X] Header Adjustments:**
    *   **[X] Fix Stacked Navigation:** Items (Home, Catalog, Contact) were stacked vertically. Removed conflicting `display: inline-block` rule from `.header__inline-menu .list-menu--inline > .list-menu__item` in `assets/base.css`. *(Fixed)*
    *   **[X] Fix Homepage Logo Alignment:** Added `.template-index h1.header__heading { margin: 0; }` to `assets/base.css`. *(Fixed, needs verification)*
    *   **[X] Adjust Theme Toggle Size:** Reduced size of `.header__icon--theme .svg-wrapper` to `24px` in `assets/base.css`. *(Verified)*
    *   **[X] Adjust Header Font Weight:** Set `font-weight: 600` for logo and nav links in `assets/base.css`. *(Verified)*
    *   **[X] Change Header Font Color:** Set color to `rgb(var(--color-foreground))` for logo and nav links in `assets/base.css`. *(Verified)*
    *   **[X] Change Active Nav Style:** Set to thicker, more offset wavy underline (default text color, accent on hover). Removed dark-mode specific color rule. *(Needs verification)*
    *   **[X] Change Nav Hover Style:** Removed underline, set color to accent for `.header__menu-item:hover`. Active squiggle persists on hover. Removed redundant hover rule. *(Needs verification)*
    *   **[X] Increase Header Font Size:** Increased size for logo (`2.4rem`) and nav items (`1.7rem`) in `assets/base.css`. *(Verified)*
    *   **[X] Remove Custom Blog Link:** Removed HTML from `sections/header.liquid` and CSS from `assets/base.css`. *(Done)*
    *   **[X] Verify Header Width/Border:** Confirmed alignment matches page content. *(Verified)*
    *   **[X] Adjust header width/padding:** Fixed `max-width` removed, should use `--page-width`. *(Verified)*.
    *   **[X] Add thin orange bottom border in dark mode:** Rule added for `.header.page-width`. *(Verified)*.
    *   **[ ] Standardize navigation text size:** Needs further CSS adjustment. *(Needs further adjustment)*
    *   **[ ] Add "Blog" link to mobile menu drawer (via Shopify Navigation).**
    *   **[X] Fix Header Icon Hover Color:** Refined CSS rules in `assets/base.css` with specific selectors for `a.header__icon`, `details-modal > details > summary.header__icon`, and `button.header__icon--theme` to set hover color to accent and ensure SVG `fill` inherits `currentColor`. *(Fixed, needs verification)*
*   **[ ] Color Application Refinement:**
    *   **[ ] Ensure background/text colors apply globally:** Address Shopify scheme overrides.
    *   **[X] Fix Dark Mode Text Colors (Other Elements):** Added rule for `.form__label` in `assets/base.css`. *(Verified)*
    *   **[X] Fix Dark Mode Icon Colors:** Added rules for common icons. Added rule for newsletter arrow button color. *(Verified)*
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
    *   [X] Cookie popup theme styling implemented and refined based on feedback.
    *   [ ] Verify visual consistency across different page types (homepage, product, collection, cart).
    *   [ ] Test theme toggle functionality thoroughly after refinements.
    *   [ ] Test responsiveness.

## 4. Known Issues / Feedback (Current)

*   **Homepage Logo Alignment:** Specific CSS added for `.template-index`. *(Needs verification)*
*   **Active Nav Style:** Wavy underline. *(Needs verification)*
*   **Nav Hover Style:** Accent color, no underline, active squiggle persists. *(Needs verification)*
*   **Header Icon Hover Color:** Refined CSS with specific selectors. *(Needs verification)*
*   **Global Color Application:** Theme toggle doesn't apply colors globally due to Shopify color scheme overrides.
*   **Nav Text Size:** Inconsistent with Astro site. *(Needs further adjustment)*

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
*   **Decision:** Set `font-weight: 600` for `.header__heading-link`, `.header__menu-item` in `assets/base.css`.
*   **Decision:** Remove custom Blog link HTML and CSS.
*   **Decision:** Change header link colors to `rgb(var(--color-foreground))`.
*   **Decision:** Change active nav link style to thicker/offset wavy underline (default text color, accent on hover). Remove dark-mode specific color rule.
*   **Decision:** Remove underline and set hover color to accent for `.header__menu-item:hover`. Ensure active squiggle persists on hover by removing redundant hover rule.
*   **Decision:** Increase header font sizes.
*   **Decision:** Add `.template-index` prefix to `h1.header__heading { margin: 0; }` rule in `assets/base.css` to specifically target homepage logo alignment.
*   **Decision:** Add CSS rules to `assets/base.css` to set hover color to accent for `.header__icons > *` and ensure SVG `fill` inherits `currentColor` for icon hover effect. *(Refined)*
*   **Decision:** Refine CSS selectors for header icon hover effect in `assets/base.css` to specifically target `a.header__icon`, `details-modal > details > summary.header__icon`, and `button.header__icon--theme`.
*   **Decision:** Implement theme styling for the initial cookie banner (`#shopify-pc__banner`) including background, text, and button colors, and adjust button layout.
*   **Decision:** Implement theme styling for the "Manage cookie preferences" dialog (`#shopify-pc__prefs__dialog`) including background, text, and relevant element colors. Ensure a single background color (fill color) for the entire dialog. Style checkbox icons to be theme-aware with sufficient contrast in dark mode. Set option box borders to use theme border color in light mode and accent color in dark mode. Explicitly set H3 color in intro section to theme text color.

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
*   Styling custom checkbox icons requires hiding the default input and explicitly styling the icon element (like an SVG) based on the checked state and theme for consistent appearance and contrast.
*   Conflicting CSS rules from the base theme can override custom styles, requiring more specific selectors or `!important` (used as a last resort).
*   Carefully review user feedback and provided images to understand the exact desired appearance and identify any unintended layout or styling changes introduced by CSS modifications.
