//  // JavaScript to dynamically create project sections
//  document.addEventListener("DOMContentLoaded", function() {
//     const projects = [
//       {
//         title: "Decentralized Voting DApp",
//         description: "Developed a decentralized voting application using Solidity smart contracts and Ethereum blockchain. Implemented user authentication, ballot creation, and voting functionalities. Utilized Web3.js for interaction with Ethereum smart contracts and MetaMask integration."
//       },
//       {
//         title: "Portfolio Website",
//         description: "Designed and developed a personal portfolio website showcasing projects and skills. Utilized HTML, CSS, and JavaScript to create a responsive and visually appealing interface. Integrated animations and interactive elements to enhance user engagement."
//       }
//     ];

//     const projectContainer = document.getElementById("projectContainer");
//     projects.forEach(project => {
//       const projectDiv = document.createElement("div");
//       projectDiv.classList.add("project");
//       projectDiv.innerHTML = `
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//       `;
//       projectContainer.appendChild(projectDiv);
//     });
//   });



document.addEventListener("DOMContentLoaded", function() {
  // Function to validate input fields
  function validateInputs() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("gmail").value.trim();
    var message = document.getElementById("message").value.trim();
    var isValid = true;

    // Validate Name
    if (name === "") {
      document.getElementById("name").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("is-invalid");
    }

    // Validate Email
    if (email === "") {
      document.getElementById("gmail").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("gmail").classList.remove("is-invalid");
    }

    // Validate Message
    if (message === "") {
      document.getElementById("message").classList.add("is-invalid");
      isValid = false;
    } else {
      document.getElementById("message").classList.remove("is-invalid");
    }

    return isValid;
  }

  // Function to send WhatsApp message
  function sendwhatsapp() {
    if (validateInputs()) {
      var phonenumber = "+919361191640";
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("gmail").value.trim();
      var message = document.getElementById("message").value.trim();

      var url = "https://wa.me/" + phonenumber + "?text=" +
        "Name: " + name + "%0a" +
        "Email: " + email + "%0a" +
        "Message: " + message +
        "%0a%0a" +
        "&#128150;";

      window.open(url, '_blank').focus();
    }
  }
  // Add event listener to the "SEND" button
  var sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", sendwhatsapp);
});


//SMOOYH_______________________________________________-____-------------------------------------------------------------------------------------------------------
  // JavaScript for smooth scrolling
  const links = document.querySelectorAll('.navv-item a');
  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

