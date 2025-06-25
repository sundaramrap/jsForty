console.log("Day 13 24th June'25");
const emplpyee = {
  id: "A5778",
  firstName: "Alex",
  lastName: "B",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//how to access property emplyee id
console.log("we get this method", emplpyee.returnThis());

console.log(emplpyee.getFullName());

///////////////////////////////////

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

// function greetMe(obj) {
//   obj.logMessage = function () {
//     console.log(`${this.name} is  ${this.age} years old`);
//   };
// }

// console.log(greetMe(tom));
// tom.logMessage();

// function sayName() {
//   console.log("this inside a function", this);
// }

// sayName();

function outer(a) {
  console.log(`This is outer function`, this);

  return function inner(b) {
    console.log(`This is inner function`, this);
  };
}

const outerResult = outer(3);
outerResult(4);
