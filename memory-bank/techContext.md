# Tech Context: MFGnerd Shopify Store Customization

## 1. Core Technologies (Shopify Store)

*   **Platform:** Shopify
*   **Theme:** Shopify Dawn (OS 2.0) - Base theme for customization.
*   **Templating:** Liquid (Shopify's templating language).
*   **Styling:** CSS (likely within theme's `.css` files or potentially SCSS if configured). Custom CSS will be added/modified to match branding.
*   **Scripting:** JavaScript (for theme toggle functionality and potentially other minor interactions).
*   **Configuration:** JSON (used extensively in OS 2.0 themes for settings and section configurations).

## 2. Branding Source Technologies (Reference: `mfgnerd.ca`)

*   **Framework:** Astro
*   **Styling:** Tailwind CSS (using CSS variables for theming).
*   **Primary Font:** IBM Plex Mono (loaded via Google Fonts).
*   **Key Feature:** Light/Dark mode toggle implemented with CSS variables and JavaScript.

## 3. Development Environment & Tools

*   **Editor:** VS Code
*   **Shopify CLI (Recommended):** For local theme development, previewing changes, and deploying to the Shopify store.
*   **Version Control:** Git (Repository contains the Dawn theme source code).
*   **Node.js/NPM:** Potentially needed for tools like Prettier or other development dependencies if used within the theme project.

## 4. Key Branding Elements to Implement

*   **Typography:**
    *   Target Font: IBM Plex Mono. Implementation likely involves adding a font declaration in CSS and applying it globally.
*   **Color Palettes:**
    *   **Light Mode:**
        *   `--color-fill`: `rgb(251, 254, 251)`
        *   `--color-text-base`: `rgb(40, 39, 40)`
        *   `--color-accent`: `rgb(0, 108, 172)`
        *   `--color-card`: `rgb(230, 230, 230)`
        *   `--color-card-muted`: `rgb(205, 205, 205)`
        *   `--color-border`: `rgb(236, 233, 233)`
    *   **Dark Mode:**
        *   `--color-fill`: `rgb(33, 39, 55)`
        *   `--color-text-base`: `rgb(234, 237, 243)`
        *   `--color-accent`: `rgb(255, 107, 1)`
        *   `--color-card`: `rgb(52, 63, 96)`
        *   `--color-card-muted`: `rgb(138, 51, 2)`
        *   `--color-border`: `rgb(171, 75, 8)`
    *   Implementation: Define these as CSS variables within the theme's CSS, likely scoped under `[data-theme='light']` and `[data-theme='dark']` attributes applied to the `<html>` or `<body>` tag. Update theme CSS rules to use these variables.
*   **Theme Toggle:**
    *   Requires JavaScript to:
        *   Toggle a `data-theme` attribute on the `<html>` or `<body>` element.
        *   Save the user's preference (e.g., in `localStorage`).
        *   Read the preference on page load to apply the correct theme initially.
    *   Requires HTML/Liquid for the button element itself (likely in the header snippet/section).
    *   Requires CSS to style the button.

## 5. Dependencies

*   Relies on the Shopify platform for hosting, backend services, and rendering.
*   External dependency on Google Fonts for IBM Plex Mono (unless self-hosted).
