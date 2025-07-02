const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;

// const greetFn = obj.greet();
greetFn();
// greetFn;

//line 8-const greetFn = obj.greet; greetFn is assigned geet() function to it , but here we are not calling the greet function so this keyword attched here is just passed as an object and it will refer to its default i.e window object in on strict mode or undefined in strict mode.

//When greetFn is called here , or rather say executed we do not attach this value or rather say attach window value to the this.
// 8-- greetFn is just getting the reference of the greet ,it does not know the origin of associated objects  -- like from where the greet function came from .
