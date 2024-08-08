document.addEventListener('DOMContentLoaded', function () {
  console.log('app.js is loaded');

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
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-lightbulb');
        themeIcon.classList.add('fa-lightbulb-on');
        localStorage.setItem('theme', 'dark');
      }
      console.log(`Theme changed to: ${document.body.classList.contains('dark-theme') ? 'dark' : 'light'}`);
    });

    console.log('Theme toggle initialized.');
  }

  function loadHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
          headerPlaceholder.innerHTML = html;
          initializeThemeToggle();
        }
      })
      .catch(err => console.error('Failed to load header:', err));
  }

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

  const images = [
    "img/Image1.jpg",
    "img/Image2.jpg",
    "img/Image3.jpg",
  ];

  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  function setBackgroundImage() {
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
      const imageUrl = getRandomImage();
      console.log(`Setting background image: ${imageUrl}`);
      imageContainer.style.backgroundImage = `url('${imageUrl}')`;
    }
  }

  loadHeader();
  setBackgroundImage();
  navbarShrink();

  document.addEventListener('scroll', navbarShrink);
  setInterval(setBackgroundImage, 5000);
});
