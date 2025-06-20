let profile = {
  name: "Yoongi",
  age: 45,
  company: "Nvidia",
  message: function () {
    console.log(`${this.name} works at ${this.company}`);
  },

  address: {
    city: "Patna",
    pinCode: 922033,
    Country: "India",
    greeting: function () {
      console.log("Welcome");
    },
  },
};

// console.log(profile.address.greeting());
for (key in profile) {
  console.log(key);
  console.log(profile[key]);
}
console.log(Object.key(profile));
