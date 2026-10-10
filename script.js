// dtrade84.github.io — minimal interactions
document.addEventListener('DOMContentLoaded', () => {
  // Close mobile nav when a link is tapped
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});
