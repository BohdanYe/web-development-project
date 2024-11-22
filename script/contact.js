// this code is creating the hamburger menu for the navigation bar
const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Sample array of contacts
var contacts = [
  { name: "John Doe", email: "john@.com" },
  { name: "Jane Doe", email: "jane@.com" },
  { name: "Bob Smith", email: "bob@.com" }
  // Add more contacts as needed
];

// Function to display contacts using a for loop
function displayContacts() {
  var contactList = document.getElementById("contact-list");

  for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
      var listItem = document.createElement("li");
      listItem.textContent = `${contact.name} - ${contact.email}`;
      contactList.appendChild(listItem);
  }
}

// Call the function to display contacts
displayContacts();


// form validation checker
function validateForm() {
  // retrieving form values
  let name = document.getElementById("validationTooltip01").value;
  let surname = document.getElementById("validationTooltip02").value;
  let email = document.getElementById("validationTooltipEmail").value;
  // avoiding blank input
  if (name === "" || surname=="" || email === "") {
    alert("Name, Surname and Email are required");
    return false;
  }

  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please match the requested format");
    return false;
  }
  // if all validations pass
  return true;
  }