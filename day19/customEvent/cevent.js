console.log(`connecting...`);

//create a custom event

const myevent = new CustomEvent("userLogin", {
  detail: {
    name: "namjoon",
    role: "leader",
  },
});

//2.listen custom event
document.addEventListener("userLogin", function (e) {
  console.log(`The user logging named as ${e.detail.name}`);
});

//3.dispatch event

document.dispatchEvent(myevent);

// document.querySelector(".userLog").addEventListener("submit", function (e) {
//   console.log(`button has been clicked `);
// });

//make a custom event and then implement int  the button clicked.
function logVerify(userName) {
  const usrevent = new CustomEvent("logUsr", {
    detail: { userName },
  });

  document.dispatchEvent(usrevent);
}

document.addEventListener("logUsr", (e) => {
  //get the class which contain the box , and change the welcome user to the userName which has been passed on.

  // taking out the userName with the help of the event which has been passed on .

  const userN = e.detail.userName;

  document.querySelector("#welcome").textContent = `Welcome ${userN}`;
});
