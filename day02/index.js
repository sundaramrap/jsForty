console.log("hello from index");
//Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

// var userName = "Ritu";
// var age = 15;
// var isStudentstatus = true;
// var codingLan = "JavaScript";

// console.log(userName, age, isStudentstatus, codingLan);
// ##Note - output printed, no issue.

// let userName = "Ritu";
// let age = 15;
// let isStudentstatus = true;
// let codingLan = "JavaScript";

// userName = "Radha";
// age = 78;
// /
// console.log(userName, age, isStudentstatus, codingLan);
// ##Note - output printed, no issue . Reassignment of value done smoothly

// const userName = "Ritu";
// const age = 15;
// const isStudentstatus = true;
// const codingLan = "JavaScript";

// age = 16;
// userName = "Radha";
// console.log(userName, age, isStudentstatus, codingLan);

// ##Note - on reassigning value--->Error ->Assignment to constant variable

//------------------------------------------
//Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

/*
Creating an object and changing its value
*/
let userInfo = {
  userName: "Narawirt Poom",
  useAge: 20,
  userIsStudent: false,
  userCodingLan: "Python",
};
userInfo.userName = "Appu";
userInfo.useAge = 98;
console.log(userInfo);

/*
Creating array and changing its value
*/

let person = ["seokjin", 32, false, "Python"];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

person[1] = 23;
person[0] = "Subin";

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
