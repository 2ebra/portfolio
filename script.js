// Nav contact button shrink

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const footerSection = document.querySelector('.footer');
    const navButton = document.querySelector('.btn-nav');
    const vLine = document.querySelector('.line-v');

    function handleScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const footerTop = footerSection.getBoundingClientRect().top;

        if (window.innerWidth >= 1080) {
            if (heroBottom < -85) {
                navButton.classList.add('shrink');
            } else {
                navButton.classList.remove('shrink');
            }
            if (heroBottom > -85 || footerTop < 800) {
                vLine.classList.remove('line-appear');
            }
            else{ 
                vLine.classList.add('line-appear');
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


// Tooltip copy email

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

  // Custom Cursor

  document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.left = `${mouseX}px`;
        customCursor.style.top = `${mouseY}px`;

    });
});
