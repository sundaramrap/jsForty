console.log("Reverse digit using while loop");

let input = 6789;

let reversed = 0;

//formula --> last digit= number %10
// addition of the digi = reverse *10 + lastdigit;

while (input > 0) {
  let lastdigi = input % 10;
  reversed = reversed * 10 + lastdigi;
  // eleminating the last digit from the input

  input = Math.floor(input / 10);
}

console.log("The reverse is :" + reversed);
