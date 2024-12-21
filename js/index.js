    // Add JavaScript to close the navbar when a link is clicked on mobile view
    document.querySelectorAll('.nav-link').forEach(function (element) {
        element.addEventListener('click', function () {
            if (window.innerWidth < 768) { // Check if the window width is less than 768px (mobile view)
                document.querySelector('.navbar-toggler').click(); // Simulate a click on the navbar toggler button to close the navbar
            }
        });
    });

    $(document).ready(function() {
        // Function to check if element is in view
        function checkVisibility() {
            var windowHeight = $(window).height();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + windowHeight;
    
            // Loop through all elements with the 'fade-in' class
            $('.fade-in').each(function() {
                var element = $(this);
                var elementTop = element.offset().top;
                var elementBottom = elementTop + element.outerHeight();
    
                // Check if the element is within the viewport
                if (elementBottom >= windowTop && elementTop <= windowBottom) {
                    element.addClass('visible'); // Add 'visible' class to trigger the fade-in
                } else {
                    element.removeClass('visible'); // Optionally remove 'visible' if the element is out of view
                }
            });
        }
    
        // Run the checkVisibility function on page load and when the user scrolls
        checkVisibility(); // Initial check on page load
        $(window).on('scroll', function() {
            checkVisibility(); // Check visibility on scroll
        });
    });
    
    $(document).ready(function() {
        // Function to check if element is in view
        function checkVisibility() {
            var windowHeight = $(window).height();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + windowHeight;
    
            // Loop through all elements with the 'fade-in-text' class
            $('.fade-in-text').each(function() {
                var element = $(this);
                var elementTop = element.offset().top;
                var elementBottom = elementTop + element.outerHeight();
    
                // Check if the element is within the viewport
                if (elementBottom >= windowTop && elementTop <= windowBottom) {
                    element.addClass('visible'); // Add 'visible' class to trigger fade-in
                } else {
                    element.removeClass('visible'); // Optionally remove 'visible' if out of view
                }
            });
        }
    
        // Initial check when the page loads
        checkVisibility();
    
        // Run the checkVisibility function when the user scrolls
        $(window).on('scroll', function() {
            checkVisibility();
        });
    });
    

    