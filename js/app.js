window.addEventListener('DOMContentLoaded', event => {
  // Function to shrink the navbar
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

  // Array of image paths
  const images = [
    "assets/img/Image1.jpg",
    "assets/img/Image2.jpg",
    "assets/img/Image3.jpg",
    // Add more images as needed
  ];

  // Function to select a random image
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  // Function to set the background image of the container
  function setBackgroundImage() {
    document.querySelector('.image-container').style.backgroundImage = `url('${getRandomImage()}')`;
  }

  // Initial background image set
  setBackgroundImage();

  // Change the background image every 5 seconds
  setInterval(setBackgroundImage, 5000); // Adjust the interval as needed (5000ms = 5 seconds)
});
