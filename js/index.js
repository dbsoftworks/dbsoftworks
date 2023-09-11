    // Add JavaScript to close the navbar when a link is clicked on mobile view
    document.querySelectorAll('.nav-link').forEach(function (element) {
        element.addEventListener('click', function () {
            if (window.innerWidth < 768) { // Check if the window width is less than 768px (mobile view)
                document.querySelector('.navbar-toggler').click(); // Simulate a click on the navbar toggler button to close the navbar
            }
        });
    });

    