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

//shadow DOM (different Subject just a jist )

document.querySelector(".card").innerHTML;
//selecting the inner element of the card to  shadow paste it

//shadow Host
//does not reside in the main dom , it is isolated and existance comes to life when added
const shadowHost = document.getElementById("box");
//attaching shadow to the element div

const shadow = shadowHost.attachShadow({ mode: "open" });
//attaching content to the inner structure of the Shadow box.
shadow.innerHTML = `<style>p {color:red;}</style> <p>Hello Shadow</p>`;

//advanced class manipulation
