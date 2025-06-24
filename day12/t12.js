//Loop and print values using Object destructuiring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

const [, { name, address, age }] = users;
console.log(name, address, age);

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
