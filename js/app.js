document.addEventListener('DOMContentLoaded', function () {
  // Load the header
  fetch('header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
      initializeThemeToggle();
    })
    .catch(err => console.error('Failed to load header:', err));

  // Function to shrink the navbar
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  function initializeThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (!themeToggleButton) {
      console.error('Theme toggle button not found!');
      return;
    }

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      themeToggleButton.textContent = 'Light Theme';
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      themeToggleButton.textContent = 'Dark Theme';
    }

    themeToggleButton.addEventListener('click', function () {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggleButton.textContent = 'Dark Theme';
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggleButton.textContent = 'Light Theme';
        localStorage.setItem('theme', 'dark');
      }
      console.log(`Theme changed to: ${document.body.classList.contains('dark-theme') ? 'dark' : 'light'}`);
    });

    console.log('Theme toggle initialized.');
  }
});
