// const pEle = document.createElement("p");

// pEle.innerText = "This is dynamic creation of the p Elelment.";
// document.body.appendChild(pEle);

// //Inserting Before some Element

// const span = document.createElement("span");
// span.innerText = "This is a span.";
// const loc1 = document.querySelector("p");
// document.body.insertBefore(span, loc1);

// //Modifying content

// const loc2 = document.querySelector("p");
// loc1.innerText = "Hello How, this is now dynamic line";

// const loc3 = document.querySelector("h2");
// console.log("Inner text ::", loc3.innerText);
// console.log("Text Content ::", loc3.textContent);

// //removing Element
// /**remove(), grab the element from the dom and then remove it . */

// {
//   const eleM = document.querySelector("ul");
//   console.log(eleM);
//   const eleMRemove = eleM.children[0];
//   console.log(eleMRemove);

//   eleMRemove.remove();

//   //removing /replacing element the whole DOM content

//   //   eleM.replaceChildren();
// }

// //Read ,Write and Remove Attribute
// {
//   let imageEle = document.createElement("img");
//   console.log(imageEle);

//   imageEle.setAttribute("src", "hana.jpg");
//   imageEle.setAttribute("alt", "flower");
//   imageEle.setAttribute("width", "80px");
//   imageEle.setAttribute("height", "80px");
//   document.body.appendChild(imageEle);
//   //to check attribute exist or not .
//   console.log(imageEle.hasAttribute("src"));
// }

// ///traversing DOM /Navigating Dom
// {
//   const trav1 = document.querySelector("div#som1");
//   const trav2 = document.getElementById("som2");
//   console.log(trav2);
//   const som2Sibling = trav2.nextSibling;
//   console.log(`this is the sbling: `, som2Sibling);
// }

// //Manupulating STYLE

// {
//   const pElem = document.getElementById("som3");
//   pElem.style.color = "purple";
// }

// //Manupulatig Class
// {
//   const manuClass = document.get;
// }

function pyramid(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        row += "*";
        break;
      }
      row += ".";
    }

    console.log(row);
  }
}

pyramid(5);
