// let total = 0; // Global, bad practice

// function add(num) {
//   total += num;
// }

// add(5);
// add(10);
// console.log(total);

/**
 * total =0;
 * add(5) ..total =5
 * add(10).. total= 15
 * console.log ---> 15
 */
// total should not be globally decalred,everyone share the same window.
//multiple script uses the same window and variable

function add(num) {
  return total + num;
}

let total = 0;
total = add(5, total);
total = add(10, total);
console.log(total);
