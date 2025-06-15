console.log("buttonSetupDesk");

function setButton() {
  let clickCount = 0;
  document
    .getElementById("increaseButton")
    .addEventListener("click", function () {
      clickCount++;
      console.log(`Button increaseButton click is ${clickCount}`);
    });

  document
    .getElementById("decreaseButton")
    .addEventListener("click", function () {
      clickCount--;
      console.log(`Button decreaseButton click is ${clickCount}`);
    });
}

setButton();
