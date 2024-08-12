document.addEventListener('DOMContentLoaded', function () {
  function loadTopContainer() {
    fetch('top-container.html')
      .then(response => response.text())
      .then(html => {
        const topContainerPlaceholder = document.getElementById('top-container-placeholder');
        if (topContainerPlaceholder) {
          topContainerPlaceholder.innerHTML = html;
        }
      })
      .catch(err => console.error('Failed to load top container:', err));
  }

  loadTopContainer();
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
