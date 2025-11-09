console.log("Event bubbling Capturing and Delegation");

//event bubbling --> When an even starts from its target element and it moves uppward to its parents

//This is called as bubbling.
document.getElementById("grandParent").addEventListener("click", function () {
  console.log("GrandParent has been clicked");
});
document.getElementById("parent").addEventListener("click", function () {
  console.log("parent has been clicked");
});
document.getElementById("child").addEventListener("click", function () {
  console.log("child has been clicked");
});
//Event Delegation -
//it is a techinque where you add a single event listener to a parent element , insted of adding individual events listener to all the child.

document.getElementById("unorderLi").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

//Stop propagation -When we donot want to eventBubbling to take place

document.getElementById("father").addEventListener("click", (event) => {
  console.log("Father has been clicked");
});
document.getElementById("son").addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("Son has been clicked");
});

//CUSTOM EVENTS

//1.create a custom event
// js provides a built in condtructor

const userVerification = new CustomEvent("userLogin", {
  detail: { name: "seokjin", role: "teacher" },
});

//2.listen to the custom event

document.addEventListener("userLogin", (e) => {
  console.log(`User has been verified with the name : ${e.detail.name}`);
});

//3. dispatch the custom event
document.dispatchEvent(userVerification);

function logUser(userame) {
  //create a custom event
  //1. validationuser, dispatch the custom event
  const event = new CustomEvent("userLog", {
    detail: { userame },
  });

  document.dispatchEvent(event);
}

//listening to the event
let flag = false;
document.addEventListener("userLog", (e) => {
  const user = e.detail.userame;
  if (flag === false) {
    document.getElementById("welcome").textContent = `Hello to ${user}`;

    flag = true;
  } else {
    document.getElementById("welcome").textContent = `Hello to User`;
    flag = false;
  }
});
