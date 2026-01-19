console.log("...connected");

//make two button and then  addd cclick handeler on it, also add evenlistener and removeEvent Listener from the panel
// function handleIncrement() {
//   console.log("button has been clicked");
// }

// const buttonTwo = document.getElementById("btn2");

//applying event delegation

document.getElementById("itemList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`The item clicked is ${event.target.textContent}`);
  }
});
