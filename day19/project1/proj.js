console.log("questionAns");

const mancomp = document.querySelector(".main-comp");

//eventDelegation :Handle click on all the questions

mancomp.addEventListener("click", function (e) {
  const question = e.target.parentElement;
  const answer = question.querySelector(".ans");
  answer.classList.toggle("show");
});
