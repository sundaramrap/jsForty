console.log("CallBack Function Execution ");
//Write a function greet(name, callback), where callback prints a message using the name parameter.
function greet(name, callback) {
  callback(name);
}

let func2 = (name) => {
  console.log("This is callbackfunction calling" + name);
};

greet("pragya", func2);
