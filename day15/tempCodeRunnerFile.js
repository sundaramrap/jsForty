// T-001: Create an array of 5 elements using the Array Constructor.
let ar5el = new Array(5);
ar5el.push("hana", "dul", "san", "ippo", "kumao");
console.log(ar5el);

//  T-002: Create an array of 3 empty slots.
let ar3sl = new Array(3);
console.log(ar3sl);

//  T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.

let arrT3 = ["one", "two", "three", "foour", "five", "six"];

console.log(arrT3[4]);

//  T-004: Use the for loop on the above array to print elements in the odd index.
for (let i = 0; i < arrT3.length - 1; i++) {
  if (i % 2 === 1) {
    console.log(arrT3[i]);
  }
}
console.log(`_______-------TASK 05 ------_______`);
//  T-005: Add one element at the front and the end of an array.

arrT3.push("🦙");
arrT3.unshift("🤦‍♀️🤦‍♀️");
console.log(...arrT3);

console.log(`_______-------TASK 06 ------_______`);

//  T-006: Remove an element from the front and the end of an array.

arrT3.pop();
console.log(arrT3);
arrT3.shift();
console.log(arrT3);
//  T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
console.log(`_______-------TASK 07 ------_______`);
/**Destructring means unpacking and giving distinct values */
const favFood = [
  "BaiganSabji",
  "Udon",
  "JaghpJage",
  "Pretzel",
  "Mandu",
  "Crossotion",
  "focaccia",
  "bagel",
  "ramen",
  "gimbap",
];
console.log(favFood.length);
[, , , , , sixthFood] = favFood;
console.log(`My Favourite food is ${sixthFood}`);

//  T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

console.log(`_______-------TASK 08 ------_______`);

[a, b, ...rest] = favFood;

console.log(`The remaing 8 Food items are ${rest}. `);

//  T-009: Clone an Array(Shallow cloning)
console.log(`_______-------TASK 09------_______`);

let shallowFood = favFood.slice();
console.log(shallowFood);

// T-010: Empty an array using its length property
console.log(`_______-------TASK 10------_______`);

let favFood1 = [
  "BaiganSabji",
  "Udon",
  "JaghpJage",
  "Pretzel",
  "Mandu",
  "Crossotion",
  "focaccia",
  "bagel",
  "speggite",
  "gimbap",
];
console.log(favFood1);
favFood1.length = 0;
console.log("The length is reduced to 0" + favFood1);

//  T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

console.log(`_______-------TASK 11------_______`);

let arr11 = new Array(10);
arr11 = Array.from(arr11, (_, i) => i + 1);
console.log(arr11);

for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] === 5) {
    arr11.splice(6);