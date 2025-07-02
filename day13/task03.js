const user = {
  name: "Alex",
  greet: function () {
    // function inner() {
    //   console.log(`Hello, ${this.name}!`);
    // }
    const inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

user.greet();

// calling greet , the inner function is regular function so its lexcical scope is where it is placed , so there is no name element for the. to make this working we ca add a arrow function here.
