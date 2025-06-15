// console.log(a);
// let a = 10;

// //reffernce error,cannot access a before intialization

let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

//console is present only  inside inner function so we are only printing "Hi".
