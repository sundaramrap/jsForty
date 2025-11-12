// /**
//  *using DOM contenet loaded to load all the content on the window
//  */

// document.addEventListener("DOMContentLoaded", () => {
//   const tabs = document.querySelectorAll(".tab");
//   const contents = document.querySelectorAll(".content");
//   const tabContainer = document.querySelector(".tabs");

//   //applying eventlistener to the container to capture the event signal .

//   tabContainer.addEventListener("click", (e) => {
//     //taking out dataTab number
//     if (!e.target.classList.contains("tab")) return;
//     const numberData = e.target.dataset.tab;
//     console.log(e.target.dataset.tab);

//     //calling the function
//     switchTheTab(numberData);

//     function switchTheTab(tabNum) {
//       //removing tab and container active class from the window

//       tabs.forEach((tab) => {
//         tab.classList.remove("active");
//       });

//       contents.forEach((content) => {
//         content.classList.remove("active");
//       });

//       // adding content when click  for single

//       const activeTab = document.querySelector(`.tab[data-tab="${tabNum}"]`);

//       const activeCont = document.querySelector(
//         `.content[data-tab="${tabNum}"]`
//       );

//       if (activeCont && activeTab) {
//         activeTab.classList.add("active");
//         activeCont.classList.add("active");
//       }
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".content");
  const tabContainer = document.querySelector(".tabs");

  // Hide all tabs initially
  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  tabContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!e.target.classList.contains("tab")) return;

    const numberData = e.target.dataset.tab;
    switchTheTab(numberData);
  });

  function switchTheTab(tabNum) {
    tabs.forEach((tab) => tab.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    const activeTab = document.querySelector(`.tab[data-tab="${tabNum}"]`);
    const activeCont = document.querySelector(`.content[data-tab="${tabNum}"]`);

    if (activeCont && activeTab) {
      activeTab.classList.add("active");
      activeCont.classList.add("active");
    }
  }
});

document.addEventListener("click", (e) => {
  const blankTab = document.querySelector(".content.active");

  blankTab.classList.remove("active");
});
