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
    setTheme(currentTheme);

    themeToggleButton.addEventListener('click', function () {
      const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      console.log(`Theme changed to: ${newTheme}`);
    });

    console.log('Theme toggle initialized.');
  }

  function setTheme(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      themeIcon.classList.remove('fa-toggle-on');
      themeIcon.classList.add('fa-toggle-off');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      themeIcon.classList.remove('fa-toggle-off');
      themeIcon.classList.add('fa-toggle-on');
    }
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
