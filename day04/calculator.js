let input = "%";

let a = 8;
let b = 3;

switch (input) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;
  case "*":
    console.log(a * b);
    break;
  default:
    console.log("Not meeting the requirement");
    break;
}
