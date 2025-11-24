console.log("Connected....");
//Synchronus
/**
 * 1.When the code is excuted line by line, wait for the current running code to complete  the execution before starting off the next line of the code.
 */

//Asynchronous
/**
 *WHEN the code of line executed run ,symutanesoully ,to be save time and be effficient then we call it as asynchronus.
 */
//synchronous
// console.log("first");
// console.log("second");
// console.log("third");

// //asynchronous
// console.log("aniyoofirst");
// setTimeout(() => {
//   console.log("latesecond");
// }, 4000);

// console.log("hello third");

//callBack function
//**When a function calls another function inside it , and then function is excuted later in the code we call that function callback function  */

function firstRun(textMessage, callback) {
  console.log(`Hello to you ${textMessage}`);
  callback();
}

function greetMe() {
  console.log("Thank you for visting");
}

//calling the function firstRun

firstRun("Seokjin", greetMe);

//second example of callBack Function
