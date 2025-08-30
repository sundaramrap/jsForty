console.log(`...connected`);

function handleClick(greeting) {
  let i = 0;
  console.log(`Btn is clicked`, greeting);
}

const myBtn2 = document.getElementById("myBtn2");

myBtn2.onclick = function () {
  console.log(`Btn2 has been clicked `);
};

//cannot, handle 2 functionality on same onClick Function
//Solution --> addEvent Listener

// myBtn2.onclick = handleClick;
// the above passing paranthesis will not work, will not take the refference as handleClick('greeting').. effernce being passed to it .
// we can handle this by calling it inside another function

myBtn2.onclick = () => {
  handleClick("SeokJin");
};

//addEvent Listener ad removeEventListener

const button3 = document.getElementById("cntBtn");
let counter = 0;

// //adding eventListener
// button3.addEventListener("click", function () {
//   console.log(`Incremented by -->`, counter);
//   counter++;
// });

// // removingEventListener;

// button3.removeEventListener("click", function () {
//   console.log(`THis is removing the event listener`, counter);
//   counter++;
// });

//here the removeEventListener wont work beacuse, beacuse the fucntion is anynomus and it is not clear to the system which ,function is being being called to be removed.

//adding eventListener and handling the fucntion outside and passing it as a reffernce.

const handleCount = function () {
  console.log(`Incremented by -->`, counter);
  counter++;
};

const greetMe = function () {
  console.log(`Thank You !!`);
};

button3.addEventListener("click", handleCount);
button3.addEventListener("click", greetMe);
button3.removeEventListener("click", handleCount); //immediate rem handleCount

//DOM Contenet Loaded--> It is used to help the programer to know that content for the dom has been loaded. Always work when applied through event listener

document.addEventListener("DOMContentLoaded", function () {
  console.log("...dom is loaded");
});

//EventObject