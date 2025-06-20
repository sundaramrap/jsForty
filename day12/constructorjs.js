function Car(name, model) {
  (this.name = "name"), (this.model = "model");
}
const felix = new Car("Bme", "d23");
console.log(felix);

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello", this.name);
    },
  };
}
const user1 = createUser("Seokjin", 33);
console.log(user1);
const user2 = createUser("Namjoon", 32);
console.log(user2);

console.log(user1.greet());
