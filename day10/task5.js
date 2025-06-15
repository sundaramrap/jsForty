//Write a function that tries to access a variable declared inside another function.

function oneFunction() {
  let name1 = "Jimin";
  console.log("Accessing name oneFuntion", name1);
}

function secondFucntion() {
  console.log("accessing name from first function" + name1); //reffernce error
}
oneFunction();
secondFucntion();
