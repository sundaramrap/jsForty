const parent = document.querySelector(".card");

//efficient DOM traversal
const firstC = parent.firstElementChild;
console.log(firstC.innerText);
const firstSib = firstC.nextElementSibling;

console.log(firstSib.innerText);

//Templates and Cloning

const template = document.getElementById("card-template");
