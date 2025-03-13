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
});