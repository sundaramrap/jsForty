//function for the game rock paper and scissor

//saving the userprompt in the computer
//getting random number from the computer from 1 to 3
//assigning numbers 1,2,3 to rock ,paper and Scissor
function rockPaperScissor() {
  const userPrompt = prompt("Choose a option rock ,paper, scissor");

  const userInput = userPrompt.toLowerCase();
  //remove console
  console.log(userInput);
  let compInput;
  const compRandom = Math.floor(Math.random() * 3) + 1;

  if (compRandom === 1) {
    compInput = "rock";
  } else if (compRandom === 2) {
    compInput = "paper";
  } else if (compRandom === 3) {
    compInput = "scissor";
  } else {
    compInput = NaN;
  }
  //remove consoles
  console.log(compRandom);
  console.log(compInput);

  //compare userchoice and computer choice

  if (
    (userInput === "rock" && compInput === "scissor") ||
    (userInput === "paper" && compInput === "rock") ||
    (userInput === "scissor" && compInput === "paper")
  ) {
    console.log("Hurray !!!,Congratulation on your win ");
  } else if (userInput === compInput) {
    console.log("Oops ,its a TIE");
  } else if (
    (userInput === "scissor" && compInput === "rock") ||
    (userInput === "rock" && compInput === "paper") ||
    (userInput === "paper" && compInput === "scissor")
  ) {
    console.log("Ohh No, You Lost the Game");
  } else {
    console.log("Please enter correct input");
  }

  //  making to play again or not

  const replayGamePrompt = prompt("Do you want to play again ? (yes/nope)");

  const replayGame = replayGamePrompt
    ? replayGamePrompt.toLocaleLowerCase()
    : "nope";
  if (replayGame === "yes") {
    rockPaperScissor();
  } else {
    console.log("Bye, See you Soon ");
  }
}

rockPaperScissor();
