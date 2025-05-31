//create a function to convert celsius to fahrenheit

console.log("day_06");

function cft(value) {
  const result = value * (9 / 5) + 32;
  return result;
}

let fdegree = cft(15);
console.log(`${fdegree}'f`);
