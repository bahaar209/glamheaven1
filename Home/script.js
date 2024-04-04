document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');
    const scrollWrapper = document.querySelector('.scroll-wrapper');

    scrollLeftButton.addEventListener('click', function() {
        scrollWrapper.scrollLeft -= 300; // Adjust the value as needed
    });

    scrollRightButton.addEventListener('click', function() {
        scrollWrapper.scrollLeft += 300; // Adjust the value as needed
    });

    // JavaScript for dropdown menu functionality
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropdown')) {
            var dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});






