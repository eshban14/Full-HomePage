const header = document.querySelector("header");
// Set the initial scroll position
let lastScrollPosition = 0;
// // Add an event listener for the scroll event
window.addEventListener("scroll", () => {
  // Get the current scroll position
  let currentScrollPosition = window.pageYOffset;
  
  if (currentScrollPosition - lastScrollPosition > 0) {
    // If the scroll direction is down and the user has scrolled past the navbar, hide the navbar
    header.classList.add("hide");
  } else {
     // If the scroll direction is up or the user is at the top of the page, show the navbar
    header.classList.remove("hide");
  }
  // Set the last scroll position to the current scroll position
  lastScrollPosition = currentScrollPosition;
})



document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.hidden');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate__animated');
                if (element.classList.contains('services-heading')) {
                    element.classList.add('animate__fadeInDown');
                } else if (element.classList.contains('services-description')) {
                    element.classList.add('animate__fadeInUp');
                } else if (element.classList.contains('service-item')) {
                    element.classList.add('animate__zoomIn');
                } else if (element.classList.contains('btn-primary')) {
                    element.classList.add('animate__zoomIn');
                }
                element.classList.remove('hidden');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});



// gallery

document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.hidden');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate__animated');
                if (element.classList.contains('gallery-heading')) {
                    element.classList.add('animate__backInDown');
                element.classList.remove('hidden');
            }
            if (element.classList.contains('gallery-description')) {
                element.classList.add('animate__bounceInLeft');
            element.classList.remove('hidden');
            }
        }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case elements are already in view
});
