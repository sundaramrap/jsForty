console.log(" Happy learning Day 3");

//operator-Symbols + - * /
//Operands - x+y ,x and y are operands .
//expression x= 2/3+4

/*Task  */
//1. Odd or Even
let num = 5;

if (num % 2 == 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

//2. Do you Have a driving License

var age = 12;

if (age >= 18) {
  console.log(" Elligible for driving ");
} else age < 18;
{
  console.log(" Ineligible for driving ");
}

//3.Calculate CTC with a Bonus

let salary = 12300;
let ansalry = salary * 12;
console.log(ansalry);

let bonus = (20 / 100) * ansalry;

console.log(bonus + ansalry);

//4. Write a program for traffic Light simulation .

let color = "red";

if (color.toLowerCase() === "red") {
  console.log("STOP");
} else {
  console.log("GO");
}

//5.Electricity Bill Calculator

let unit = 18;

let unitCost = 150;

let mCost = unit * unitCost;
let annualCost = mCost * 12;

let dicount = (20 / 100) * annualCost;

let cost_aDiscount = annualCost - dicount;

console.log(cost_aDiscount);

//6. Leap Year Check
let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("leapYear");
} else {
  console.log("sukha year ");
}

//7. Max of Three Numbers

let a = 4;
let b = 0;
let c = 8;

/**Finding maximun of the provided */
