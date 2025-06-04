//function for the game rock paper and scissor

function rockPaperScissor() {
  const userPrompt = prompt("Choose a option rock ,paper, scissor");
  //saving the userprompt in the computer
  const userInput = userPrompt.toLowerCase();
  console.log(userInput);

  //getting random number from the computer from 1 to 3
  const compInput = Math.floor(Math.random() * 3 + 1);
  //assigning numbers 1,2,3 to rock ,paper and Scissor

  console.log(compInput);
}

rockPaperScissor();
