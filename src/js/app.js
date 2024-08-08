document.addEventListener('DOMContentLoaded', function () {
  console.log('app.js is loaded');

  // Function to initialize theme toggle
  function initializeThemeToggle() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (!themeToggleButton || !themeIcon) {
      console.error('Theme toggle button or icon not found!');
      return;
    }

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      themeIcon.classList.remove('fa-lightbulb');
      themeIcon.classList.add('fa-lightbulb-on');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      themeIcon.classList.remove('fa-lightbulb-on');
      themeIcon.classList.add('fa-lightbulb');
    }

    themeToggleButton.addEventListener('click', function () {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-lightbulb-on');
        themeIcon.classList.add('fa-lightbulb');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-lightbulb');
        themeIcon.classList.add('fa-lightbulb-on');
        localStorage.setItem('theme', 'dark');
      }
      console.log(`Theme changed to: ${document.body.classList.contains('dark-theme') ? 'dark' : 'light'}`);
    });

    console.log('Theme toggle initialized.');
  }

  // Function to load header and initialize theme toggle
  function loadHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
        initializeThemeToggle(); // Initialize theme toggle after header is loaded
      })
      .catch(err => console.error('Failed to load header:', err));
  }

  // Function to load footer
  function loadFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
      })
      .catch(err => console.error('Failed to load footer:', err));
  }

  // Function to shrink the navbar
  function navbarShrink() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }

  // Function to set random background image
  function setBackgroundImage() {
    const images = [
      "assets/img/Image1.jpg",
      "assets/img/Image2.jpg",
      "assets/img/Image3.jpg",
      // Add more images as needed
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.querySelector('.image-container').style.backgroundImage = `url('${randomImage}')`;
  }

  // Initial function calls
  loadHeader();
  loadFooter();
  setBackgroundImage();
  navbarShrink();

  // Event listeners
  document.addEventListener('scroll', navbarShrink);
  setInterval(setBackgroundImage, 5000); // Change the background image every 5 seconds
});
