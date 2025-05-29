console.log("hello from the other side ");

let a = 10;
let b = 5;
let c = 10;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Sides must be positive numbers.");
} else if (a + b <= c || a + c <= b || b + c <= a) {
  console.log("Not a valid triangle.");
} else if (a === b && b === c) {
  console.log("Equilateral triangle");
} else if (a === b || b === c || a === c) {
  console.log("Isosceles triangle");
} else {
  console.log("Scalene triangle");
}
