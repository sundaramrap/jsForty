const parent = document.querySelector(".card");

//efficient DOM traversal
// const firstC = parent.firstElementChild;
// console.log(firstC.innerText);
// const firstSib = firstC.nextElementSibling;

// console.log(firstSib.innerText);

//Templates and Cloning

const template = document.getElementById("card-template");
//cloneNode to clone the node from the template
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "DOM Advanced Topic";

document.body.appendChild(clone);
