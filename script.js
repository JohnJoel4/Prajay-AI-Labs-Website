document.addEventListener('DOMContentLoaded', function() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('[data-toggle="tab"]');
    const tabContent = document.querySelector('.tab-content');
    
    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add the switching class to trigger the flash animation
            tabContent.classList.add('switching');
            
            // Remove the class after animation completes
            setTimeout(() => {
                tabContent.classList.remove('switching');
            }, 500);
        });
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    
    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
});