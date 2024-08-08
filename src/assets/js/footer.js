document.addEventListener('DOMContentLoaded', function () {
  function loadFooter() {
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
          footerPlaceholder.innerHTML = html;
        }
      })
      .catch(err => console.error('Failed to load footer:', err));
  }

  loadFooter();
});
