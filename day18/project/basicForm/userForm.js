console.log("...connected");

// const lable1 = document.createElement("label");
// lable1.innerText = "Select Your specification's";

//create a form element
const form = document.createElement("form");

//creating a lable tag
const label1 = document.createElement("label");
label1.innerText = "Select Your Specifications";
form.appendChild(label1);

//creating a radio button
const rad1 = document.createElement("input");
rad1.type = "radio";
rad1.id = "uName";

const rad1Name = document.createElement("label");

form.appendChild(rad1);

//create radio buttons for the selection

const userForm = document.getElementById("userForm");

userForm.appendChild(form);
