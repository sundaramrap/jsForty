console.log("factorial of a number");

function factorial(num) {
  let result = 1;
  let temp = num;

  while (temp >= 1) {
    result = result * temp;
    temp--;
    // console.log("while is runung" + temp);
  }

  return console.log(result);
}

factorial(5);
