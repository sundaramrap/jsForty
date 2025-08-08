console.log("...connected");

/** Create a form dynamically using JavaScript and manipulate its behavior
Add input fields dynamically based on user selection e.g., text, email, number
Add a submit button that logs all the input values as an object.
Add a reset button that clears the form.
Use createElement, appendChild, setAttribute, and addEventListener.
 */

//1. User data form creation

const formData = document.createElement("form");

formData.action = "/submit-data";
formData.id = "userInfo";
formData.method = "POST";
