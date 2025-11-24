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

document.querySelector(".userLog").addEventListener("submit", function (e) {
  console.log(`button has been clicked `);
});
