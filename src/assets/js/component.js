document.addEventListener('DOMContentLoaded', function () {
  function loadTopContainer() {
    fetch('top-container.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load top container');
        }
        return response.text();
      })
      .then(html => {
        const topContainerPlaceholder = document.getElementById('top-container-placeholder');
        if (topContainerPlaceholder) {
          topContainerPlaceholder.innerHTML = html;
        }
      })
      .catch(err => console.error(err));
  }

  function loadFooter() {
    fetch('footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load footer');
        }
        return response.text();
      })
      .then(html => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
          footerPlaceholder.innerHTML = html;
        }
      })
      .catch(err => console.error(err));
  }

  // Load both components
  loadTopContainer();
  loadFooter();
});
