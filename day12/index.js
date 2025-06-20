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

// let car = prompt("Which is your fav car");
// let favCar = {
//   [car]: 5,
// };
// console.log(favCar);

// let fruit = { name: "mango" };
// let fruitFarm = { name: "mango" };

// console.log(fruit === fruitFarm);

// fruit = fruitFarm;
// console.log(fruit === fruitFarm);

// const target = { p: 1, q: 2 };
// const source = { a: 3, b: 5 };

// const retrnObj = Object.assign(source, target);
// console.log(retrnObj);

// let target = { p: 1, a: 2 };
// let source = { a: 3, b: 5 };

// let retrnObj = Object.assign(target, source);
// console.log(retrnObj);

// const obj = { name: "Pragya:" };
// const obj2 = Object.assign({}, obj);
// console.log(obj2);

// const obj3 = { a: 4, b: { c: 7 } };
// const obj4 = Object.assign({}, obj3);
// console.log(obj3);
// obj4.b.c = 5;
// console.log(obj4);
// console.log(obj3);

// const obj5 = structuredClone(obj3);
// obj5.b.c = 92;

// console.log(obj5);
// console.log(obj3);
// const myObj = {
//   a: "Pragya",
//   b: "78",
// };

// const myArray = Object.entries(myObj);
// console.log(myArray);

const entries = new Map([
  ["foo", "bar"],
  ["naz", 34],
]);

const objEntries = Object.fromEntries(entries);
console.log(objEntries);
