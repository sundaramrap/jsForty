//event- it is a singnal which ,tells something happend in the dom.
function handleClick(greeting) {
  console.log(`Button clicked with a ::-> ${greeting}`);
}

const myBtn2Elem = document.getElementById("btnTwo");

myBtn2Elem.onclick = function () {
  console.log("Btn is clicked ");
};

function handle2btnElem() {
  console.log("The second fucntion is clicked here");
}

myBtn2Elem.addEventListener("click", handle2btnElem);

const incrementElement = document.getElementById("countBtn");
let count = 0;
incrementElement.addEventListener("click", function () {
  console.log("counter", count);
  count++;
});
