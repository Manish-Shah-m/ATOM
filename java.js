document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('scrollNav');
    
    // Show navbar on scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
    });
    
    // Mobile menu toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const navbarSearch = document.querySelector('.navbar-search');
    
    navbarToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
      navbarToggle.classList.toggle('active');
      navbarSearch.classList.toggle('active');
    });
  });