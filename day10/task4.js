//Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFucnction() {
  for (let i = 0; i < 3; i++) {
    let message = "This is NakaiDai";
    console.log(message + " " + i);
  }

  console.log(message); // refernce error
}

loopFucnction();
