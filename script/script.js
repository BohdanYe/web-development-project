// this code is creating the hamburger menu for the navigation bar
const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});

// this function adds the button to switch to the dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// addng the appearance effect
const textElement = document.getElementById('animateMe');
textElement.classList.add('animate');

