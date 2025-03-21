document.addEventListener('DOMContentLoaded', function() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('[data-toggle="tab"]');
    const tabContent = document.querySelector('.tab-content');
    
    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            tabContent.classList.add('switching');
            setTimeout(() => {
                tabContent.classList.remove('switching');
            }, 500);
        });
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
});