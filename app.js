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

//   from section code
// JavaScript for form validation
// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");
//     form.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent form submission
//       // Validate form fields
//       const name = document.getElementById("name").value;
//       const gmail = document.getElementById("gmail").value;
//       const message = document.getElementById("message").value;
//       if (!name || !gmail || !message) {
//         alert("Please fill in all fields.");
//         return;
//       }
//       // Submit the form if all fields are filled
//       alert("Form submitted successfully!");
//       form.reset(); // Reset form fields after submission
//     });
//   });

// //   whatsapp
// const express = require('express');
// const bodyParser = require('body-parser');
// const { Client } = require('whatsapp-web.js'); // Assuming you're using whatsapp-web.js library

// const app = express();
// const port = 3000;

// // Initialize WhatsApp client
// const client = new Client();

// // Handle form submission
// app.post('/submit-form', (req, res) => {
//   const { name, gmail, message } = req.body;

//   // Send message to WhatsApp
//   client.sendMessage('+919361191640', `New message from ${name} (${gmail}): ${message}`)
//     .then(() => {
//       res.status(200).send('Message sent successfully!');
//     })
//     .catch((error) => {
//       console.error('Error sending message:', error);
//       res.status(500).send('Error sending message.');
//     });
// });

// // Middleware for parsing form data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Start server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });
// JavaScript for form validation and WhatsApp message
document.addEventListener("DOMContentLoaded", function() {
  // Hide the loader and display the content after 5 seconds
  setTimeout(function() {
      document.getElementById("loader-wrapper").style.display = "none";
      document.getElementById("content").style.display = "block";
  }, 5000); // Adjust the time (in milliseconds) as needed
});






function sendwhatsapp(){
    var phonenumber = "+919361191640";

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    // var country = document.querySelector("#country").value;
    var message = document.querySelector("#message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    // +"*Country:* "+country+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }
  

