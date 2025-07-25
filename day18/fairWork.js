const pEle = document.createElement("p");

pEle.innerText = "This is dynamic creation of the p Elelment.";
document.body.appendChild(pEle);

//Inserting Before some Element

const span = document.createElement("span");
span.innerText = "This is a span.";
const loc1 = document.querySelector("p");
document.body.insertBefore(span, loc1);

//Modifying content

const loc2 = document.querySelector("p");
loc1.innerText = "Hello How, this is now dynamic line";

const loc3 = document.querySelector("h2");
console.log("Inner text ::", loc3.innerText);
console.log("Text Content ::", loc3.textContent);

//removing Element
/**remove(), grab the element from the dom and then remove it . */

{
  const eleM = document.querySelector("ul");
  console.log(eleM);
  const eleMRemove = eleM.children[0];
  console.log(eleMRemove);

  eleMRemove.remove();

  //removing /replacing element the whole DOM content

  //   eleM.replaceChildren();
}

//Read ,Write and Remove Attribute
{
  let imageEle = document.createElement("img");
  console.log(imageEle);

  imageEle.setAttribute("src", "hana.jpg");
  imageEle.setAttribute("alt", "flower");
  imageEle.setAttribute("width", "80px");
  imageEle.setAttribute("height", "80px");
  document.body.appendChild(imageEle);
  //to check attribute exist or not .
  console.log(imageEle.hasAttribute("src"));
}

///traversing DOM /Navigating Dom
{
}
