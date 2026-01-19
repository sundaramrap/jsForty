console.log("...connected");

//take the
const mainSec = document.querySelector(".tabs");

mainSec.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    // console.log(`this is ${e.target.dataset.tab}`);
    // get the tab number and then run that tab number in the some other function and then call that function.
    const tabNum = e.target.dataset.tab;
    console.log(tabNum);
    showContent(tabNum);
  }
});

function showContent(tabNumber) {
  const tabCont = document.querySelectorAll(".tab");
  const conCont = document.querySelectorAll(".content");

  tabCont.forEach((tab) => {});
}
