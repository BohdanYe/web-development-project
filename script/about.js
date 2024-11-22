// this code is creating the hamburger menu for the navigation bar
const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Example object representing job description
const jobDescription = {
  name: 'Software Developer',
  specialization: 'Informational Technologies',
  university: 'TUDublin'
};

// Function to display job information on the webpage
function displayJobInfo() {
//Select the div with id job-info
  const jobInfoContainer = document.getElementById('job-info');
  // Display the job object properties on the webpage
  jobInfoContainer.innerHTML = `
    <p>Name: ${jobDescription.name}</p>
    <p>Specialization: ${jobDescription.specialization}</p>
    <p>University: ${jobDescription.university}</p>
  `;
}

// Call the function to display job information
displayJobInfo();