console.log("...connected");

/** Create a form dynamically using JavaScript and manipulate its behavior
Add input fields dynamically based on user selection e.g., text, email, number
Add a submit button that logs all the input values as an object.
Add a reset button that clears the form.
Use createElement, appendChild, setAttribute, and addEventListener.
 */

//1. to create the name : [____] .. we need to create a div and have container .
const userName = document.createElement("p");
userName.innerText = "Name :";

//creating input text for the user name

const userNameInput = document.createElement("input");
userNameInput.placeholder = "Enter First Name ";

document.body.appendChild(userName);
document.body.appendChild(userNameInput);
