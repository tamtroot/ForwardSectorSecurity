// Placeholder for JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.querySelector('nav ul').classList.toggle('open');
    });
  }
});
