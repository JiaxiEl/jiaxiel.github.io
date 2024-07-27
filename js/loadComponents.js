document.addEventListener('DOMContentLoaded', function() {
  // Load the header
  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    })
    .catch(err => console.error('Failed to load header:', err));

  // Load the sidebar
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('sidebar-placeholder').innerHTML = html;
      activateSidebar();
    })
    .catch(err => console.error('Failed to load sidebar:', err));

  // Load the footer
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(err => console.error('Failed to load footer:', err));
});

document.addEventListener('DOMContentLoaded', function() {
  const headerHeight = document.getElementById('header-placeholder').clientHeight;
  document.body.style.paddingTop = `${headerHeight}px`;
});
