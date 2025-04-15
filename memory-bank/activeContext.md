# Active Context: MFGnerd Shopify Store Customization (Initialization)

## 1. Current Focus

*   Initialize the Memory Bank documentation based on prior planning discussions.
*   Prepare to begin the customization of the Shopify Dawn theme.

## 2. Recent Changes/Decisions

*   **Confirmed Strategy:** Proceed with customizing the Shopify Dawn theme for `store.mfgnerd.ca` rather than pursuing a headless approach.
*   **Confirmed Scope:** Focus on branding alignment (colors, typography, layout feel, theme toggle) with the existing `mfgnerd.ca` Astro blog.
*   **Confirmed Architecture:** Maintain separate Astro blog and Shopify store sites, linked via navigation.
*   **Theme Base:** Shopify Dawn theme selected.
*   **Memory Bank:** Initialization process underway.

## 3. Next Steps (Immediate To-Do)

1.  Complete Memory Bank initialization (`progress.md`).
2.  **Switch to ACT MODE.**
3.  Begin theme customization tasks:
    *   Implement IBM Plex Mono font globally.
    *   Define light/dark mode CSS variables based on `mfgnerd.ca` values.
    *   Implement theme toggle functionality (HTML button, JS logic, CSS styling).
    *   Apply CSS variables to theme elements to match color schemes.
    *   Adjust header/footer/layout elements for visual consistency.
    *   Add navigation links between store and blog.

## 4. Active Preferences & Patterns

*   **Visual Goal:** Mimic the clean, minimalist, technical aesthetic of `mfgnerd.ca`.
*   **Font:** Prioritize consistent use of IBM Plex Mono.
*   **Color:** Strict adherence to the defined light and dark mode palettes from the Astro site.
*   **Functionality:** The light/dark theme toggle is a critical feature to replicate.
*   **Development:** Use CSS overrides and JavaScript within the Dawn theme structure. Avoid unnecessary complexity where possible.

## 5. Learnings & Insights

*   Decoupling the blog and store provides significant long-term flexibility regarding branding and cost management.
*   While headless is possible, theme customization is the more pragmatic approach for the current scale and goals.
*   Dawn theme, while potentially having mixed reviews, is suitable as a flexible base for developer-led customization.
