document.addEventListener('DOMContentLoaded', function() {
  const heroText = document.querySelector('#hero .container');
  heroText.style.opacity = 0;
  setTimeout(() => {
    heroText.style.opacity = 1;
    heroText.style.transition = 'opacity 2s ease-in-out';
  }, 500);
});
