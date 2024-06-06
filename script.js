
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    const navButton = document.querySelector('.btn-nav');

    function handleScroll() {
        const heroBottom= heroSection.getBoundingClientRect().bottom;

        if(window.screen.width >= 1080) {

            if(heroBottom < 0) {
                navButton.classList.add('shrink');
            } else {
                navButton.classList.remove('shrink')
            }
        } else {
            navButton.classList.add('shrink');
        }
    }

  
    window.addEventListener('scroll', handleScroll);
  });


document.addEventListener('DOMContentLoaded', function() {
    const scrollToFooterLink = document.getElementById('scroll-to-footer');
    const footer = document.getElementById('footer');
  
    scrollToFooterLink.addEventListener('click', function(event) {
      event.preventDefault();
      footer.scrollIntoView({ behavior: 'smooth' });
    });
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



