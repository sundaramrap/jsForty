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
//count function
let count = 0;
function handleCount() {
  console.log("counter", count);
  count++;
}
const incrementElement = document.getElementById("countBtn");
incrementElement.addEventListener("click", handleCount);
incrementElement.addEventListener("click", () => {
  handleClick("rm");
});
incrementElement.removeEventListener("click", handleCount);

//From line 16- 28 addeventlistener, removeeventlistener and handling multiple listener have been handled.

//DOM contenet Loaded
//some actions needs to be performed when a dom content is loaded, for which we use addEvenListener

//what is inside eventObject
//event object tells the user what , event is active on the current context which is being used

const searchElement = document.getElementById("search-id");

function handleSearchEvent(event) {
  console.log(event);
}

searchElement.addEventListener("change", handleSearchEvent);

//event bubbling, capturing and dekegation
