console.log("questionAns");

const mancomp = document.querySelector(".main-comp");

//eventDelegation :Handle click on all the questions

mancomp.addEventListener("click", function (e) {
  if (e.target.classList.contains("que")) {
    e.stopPropagation();
    const question = e.target.parentElement;
    const answer = question.querySelector(".ans");
    answer.classList.toggle("show");
  }
});

//to all the questins to collaspse when the windom is clicked apart from the question div , we will addEventListener at the top level and execute the logic there

document.addEventListener("click", function () {
  const allAnswer = document.querySelectorAll(".ans.show");
  allAnswer.forEach((ans) => ans.classList.remove("show"));
});
