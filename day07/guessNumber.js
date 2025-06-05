// console.log(sysNo);

guessNumber = () => {
  const sysNo = Math.floor(Math.random() * 10) + 1;
  let userPromp = prompt("Enter a between 1-10 Number");
  let userNumber = Number(userPromp);
  let count = 1;
  while (userNumber !== sysNo) {
    if (userNumber > sysNo) {
      console.log("Too high !!!, lower the value " + userNumber);
      userPromp = prompt("Too high !!!, lower the value");
    } else {
      console.log("Too low !!!, increase the value " + userNumber);
      userPromp = prompt("Too Low !!, increase the value");
    }

    userNumber = Number(userPromp);
    count++;
  }

  console.log(
    "Yay!!! " + userNumber + " guessed it correct in  " + count + " guess."
  );

  const replayGamePrompt = prompt("Play again? (yes/no)");

  const replayGame = replayGamePrompt
    ? replayGamePrompt.toLocaleLowerCase
    : "no";
  if (replayGame === "yes") {
    guessNumber();
  } else {
    console.log("Thank you for playing");
  }
};

guessNumber();
