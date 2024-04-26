// Add this script to your HTML file (usually just before the closing </body> tag)
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarBrand = document.querySelector('.navbar-brand');
    const threshold = 50; // Adjust this value as needed for when the effect should occur

    window.addEventListener('scroll', function() {
        if (window.scrollY > threshold) {
            navbar.classList.add('navbar-scrolled');
            navbarBrand.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbarBrand.classList.remove('navbar-scrolled');
        }
    });
});

