document.addEventListener('DOMContentLoaded', function() {
  // Load the header
  fetch('header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    })
    .catch(err => console.error('Failed to load header:', err));

  // Load the sidebar
  fetch('sidebar.html')  // Make sure 'sidebar.html' is the correct path to your sidebar file
    .then(response => response.text())
    .then(html => {
      document.getElementById('sidebar-placeholder').innerHTML = html;
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
