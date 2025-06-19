console.log("This is day 12 file");
// let user = {
//   name: "Tehung",
//   age: 45,
// };

// console.log(user.name);
// user.isSeniorCitizen = false;
// console.log(user);

// let user = {
//   name: "Tehung",
//   age: 45,
//   "is User Female": false,
// };
// console.log(user);
// console.log(user["is User Female"]);
// console.log(user.age);
// user["car edition"] = "BMW E5";
// console.log(user["car edition"]);
// user.age = 34;
// console.log(user.age);
// // delete user["is User Female"];
// // console.log(user);
// let someUser = "age";
// console.log(user[someUser]);

let car = prompt("Which is your fav car");
let favCar = {
  [car]: 5,
};
console.log(favCar);
