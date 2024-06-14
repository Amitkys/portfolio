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