//. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultipler(multipler) {
  return function (num) {
    console.log(multipler * num);
  };
}

const number = createMultipler(2);
number(10);
number(3);

const newNumber = createMultipler(3);
newNumber(7);
