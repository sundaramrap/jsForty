const pEle = document.createElement("p");

pEle.innerText = "This is dynamic creation of the p Elelment.";
document.body.appendChild(pEle);

//Inserting Before some Element

const span = document.createElement("span");
span.innerText = "This is a span.";
const loc1 = document.querySelector("p");
document.body.insertBefore(span, loc1);
