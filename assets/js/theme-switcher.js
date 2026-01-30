// Theme switcher functionality
(function() {
  const THEME_KEY = 'thingsai-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';
  
  // Get saved theme or use system preference
  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }
    
    return LIGHT_THEME;
  }
  
  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }
  
  // Initialize theme before page renders (prevent flash)
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
  
  // Set up toggle after DOM loads
  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    // Update toggle button state
    function updateToggle() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      toggle.setAttribute('aria-checked', currentTheme === DARK_THEME);
    }
    
    updateToggle();
    
    // Handle toggle click
    toggle.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
      applyTheme(newTheme);
      updateToggle();
    });
  });
  
  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
      }
    });
  }
})();
