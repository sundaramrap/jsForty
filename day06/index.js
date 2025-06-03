//function -->

function printThis() {
  console.log("....Printing");
}

printThis();

//function as expression

let printMe = function () {
  console.log("..PrintMe");
};

console.log(printMe);
console.log(printMe());

//Parameter and Arguments

function sum(a, b) {
  const result = a + b;
  return result;
}

let result = sum(4, 9);
console.log(result);

// console.log(
//   "Parameter are variables which  is passed in the funtion when it is defined  & argument are value which are assigned to the function when it is invoked"
// );

//Use of return --> When function has to be used multiple placed return is use to return the value for the assignment operator.

/**
 * Rest Parameter
 * Sometime while defining the programer might not know how many paramerts will be passed this is solved by using "...rest".
 */

function calculateThis(a, b, ...rest) {
  console.log(a, b, rest);
}

calculateThis(3, 4, 0, 2, 4, 2, 2, 4, 3, 3);

//nested loop- The function func2 defined inside the func1 , scope is limited to func1 only.

function func1() {
  console.log("outer function ");

  function func2() {
    console.log("inner function ");
  }
  func2();
}

func1();

/**
 * To make the scope of func2 , outside of the func1 we have to return the func2
 */

function func3() {
  console.log("outer function ");

  return function func4() {
    console.log("inner function through rect1 ");
  };
}

let result1 = func3();
console.log(result1());

///CallBack function

function call(func) {
  console.log("call");

  func();
}
// the function here is anynomus , as it doesnot needed to be used somewhere else.
let buuzz = function () {
  console.log("buzz");
};

call(buuzz);

//arrow function

let greetMe = () => {
  console.log("Hello Pragya");
};

greetMe();

// example 2:

let greetTings = (helo) => {
  //
  //

  return "what a lovely day " + helo;
};

console.log(greetTings("petunia"));

//IIFE

(function (count) {
  console.log("This is an immediately innvoked function ", count);
})(1);
