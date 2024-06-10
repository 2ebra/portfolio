document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navButton = document.querySelector('.btn-nav');

    function handleScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (window.innerWidth >= 1080) {
            if (heroBottom < 0) {
                navButton.classList.add('shrink');
            } else {
                navButton.classList.remove('shrink');
            }
        } else {
            navButton.classList.add('shrink');
        }
    }

    // Check screen width initially and on resize
    function checkScreenWidth() {
        if (window.innerWidth >= 1080) {
            window.addEventListener('scroll', handleScroll);
            // Initial check in case the page is already scrolled past the hero section
            handleScroll();
        } else {
            navButton.classList.add('shrink'); // Ensure button is in initial state
            window.removeEventListener('scroll', handleScroll); // Remove the scroll listener if present
        }
        // Show the button after applying the correct state
        navButton.classList.remove('hidden');
    }

    // Hide the button initially
    navButton.classList.add('hidden');

    // Run the check initially and whenever the window is resized
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});



  document.addEventListener('DOMContentLoaded', function() {
    const cardImages = document.querySelectorAll('.card-img');
    const threshold = 0.2;

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        );
    }

    function checkVisibility() {
        cardImages.forEach(function(cardImage) {
            if (isElementInViewport(cardImage)) {
                cardImage.classList.add('img-slide');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check
    checkVisibility();
});



document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.querySelector('.tooltip');
    const email = 'whitesidesba@gmail.com';
  
    tooltip.addEventListener('click', function(event) {
      event.preventDefault();
      navigator.clipboard.writeText(email).then(function() {
        tooltip.textContent = '⎘ copied';
        setTimeout(() => {
          tooltip.textContent = '⎘ copy email';
        }, 2000);
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.left = `${mouseX}px`;
        customCursor.style.top = `${mouseY}px`;

    });
});



