// this code is creating the hamburger menu for the navigation bar
const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

const mySkills = [
  'Programming Languages','Problem Solving','Algorithm and Data Structures','Debugging and Testing','Version Control/Git','Web Development Skills'
];

// Function to display my personal skills on the webpage
function displaySkills() {
  const skillsList = document.getElementById('skills-list');

  mySkills.forEach(skill => {
    // Create a new list item element
    const listItem = document.createElement('li');
    
    // Set the text content of the list item
    listItem.textContent = skill;

    // Append the list item to the unordered list
    skillsList.appendChild(listItem);
  });
}

// Call the function to display skills
displaySkills();