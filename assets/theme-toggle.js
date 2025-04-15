/**
 * MFGnerd Theme Toggle Script
 *
 * Handles switching between light and dark themes based on user preference
 * stored in localStorage or OS settings.
 */
(function () {
  const themeToggleButton = document.getElementById('theme-toggle-btn');
  const htmlElement = document.documentElement;
  const storageKey = 'mfgnerd-theme-preference';

  /**
   * Applies the specified theme.
   * @param {string} theme - The theme to apply ('light' or 'dark').
   */
  const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    if (themeToggleButton) {
      themeToggleButton.setAttribute('aria-label', theme);
    }
    // Optional: Dispatch an event if other components need to react to theme changes
    // document.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  };

  /**
   * Toggles the theme between light and dark.
   */
  const toggleTheme = () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    try {
      localStorage.setItem(storageKey, newTheme);
    } catch (e) {
      console.warn('Could not save theme preference to localStorage:', e);
    }
  };

  /**
   * Gets the preferred theme based on localStorage or OS settings.
   * @returns {string} 'light' or 'dark'
   */
  const getPreferredTheme = () => {
    let storedTheme = null;
    try {
      storedTheme = localStorage.getItem(storageKey);
    } catch (e) {
      console.warn('Could not read theme preference from localStorage:', e);
    }

    if (storedTheme && (storedTheme === 'light' || storedTheme === 'dark')) {
      return storedTheme;
    }

    // Check OS preference if no stored theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light'; // Default to light
  };

  // Apply the initial theme on load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Add event listener to the button
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  } else {
    console.warn('Theme toggle button (#theme-toggle-btn) not found.');
  }

  // Optional: Listen for OS theme changes if no preference is stored
  // This part is slightly more complex as you might want to only respect
  // OS changes if the user hasn't explicitly set a preference via the button.
  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  //   try {
  //     if (!localStorage.getItem(storageKey)) { // Only apply if no explicit preference saved
  //       const newColorScheme = event.matches ? "dark" : "light";
  //       applyTheme(newColorScheme);
  //     }
  //   } catch (e) {
  //     console.warn('Could not react to OS theme change:', e);
  //   }
  // });
})(); // IIFE to avoid polluting global scope
