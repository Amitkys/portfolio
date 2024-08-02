// navigation bar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-css');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');

  // Set right: 0% when opening the navbar
  if (navbar.classList.contains('open')) {
    navbar.style.right = '0%';
  } else {
    // Reset the style when closing the navbar
    navbar.style.right = '';
  }
}

// Close the navbar if the window is resized to more than 1090px
window.onresize = () => {
  if (window.innerWidth > 1090) {
    navbar.classList.remove('open');
    menu.classList.remove('bx-x');
    navbar.style.right = ''; // Reset the style when closing the navbar
  }
}

// caraousal
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    let currentIndex = 0;

    const updateCarousel = () => {
      carousel.querySelector('.carousel-track').style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
          indicator.classList.remove('bg-opacity-50');
        } else {
          indicator.classList.remove('active');
          indicator.classList.add('bg-opacity-50');
        }
      });
    };

    carousel.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });

    carousel.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });

    // Auto-slide functionality 
    /*
    const autoSlideInterval = 3000;
    setInterval(() => {
      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    }, autoSlideInterval);
*/
    updateCarousel();
  });
});