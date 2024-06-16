// Nav contact button shrink

document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navButton = document.querySelector('.btn-nav');

    function handleScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (window.innerWidth >= 1080) {
            if (heroBottom < -85) {
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


// Hero Images

  document.addEventListener('DOMContentLoaded', function() {
    const heroImgs = document.querySelectorAll('.hero-img');
    const maxOffset = 150; // Maximum translateY offset in pixels
    const middleOffset = 50; // Middle translateY offset in pixels

    function heroScroll() {

        if (window.innerWidth < 640) {
            // If the viewport width is less than 640px, reset the transforms and exit the function
            heroImgs.forEach((img) => {
                img.style.transform = 'translateY(0)';
            });
            return;
        }


        const scrollPosition = window.scrollY;

        heroImgs.forEach((img, index) => {
            let offset = 0;

            img.classList.add('hidden');

            if (index === 0 || index === heroImgs.length - 1) {
                offset = Math.max(0, maxOffset - scrollPosition / 3); // Adjust the factor to control speed
            } else if (index === 1 || index === heroImgs.length - 2) {
                offset = Math.max(0, middleOffset - scrollPosition / 6); // Adjust the factor to control speed
            }
            
            img.style.transform = `translateY(-${offset}px)`;
            img.classList.remove('hidden');
            
        });
    }

    window.addEventListener('scroll', heroScroll);

    if (window.innerWidth >= 640) {
        heroScroll();
    }
    
});


// Img Horizontal Scroller


document.addEventListener('DOMContentLoaded', function() {
    function duplicateImgs() {
        const scrollers = document.querySelectorAll('.scroller')

        scrollers.forEach((scroller) => {

            const scrollerImgs = scroller.querySelector('.card-img-scroller');
            const scrollerContent = Array.from(scrollerImgs.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerImgs.appendChild(duplicatedItem);
            });
        });
    }
    duplicateImgs();
}); 






  // Custom Cursor

  document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    function showCursor() {
        customCursor.classList.remove('hidden');
    }

    function hideCursor() {
        customCursor.classList.add('hidden');
    }

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        customCursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    });

    document.addEventListener('touchstart', hideCursor);
    document.addEventListener('touchmove', hideCursor);
    document.addEventListener('touchend', hideCursor);
});


