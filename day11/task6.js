function factoryCounter(number) {
  let value = number;
  const insital = number;
  return {
    increment: () => {
      return value++;
    },

    decrement: () => {
      return value--;
    },

    reset: () => {
      value = insital;
      console.log("reset to", value);
    },
  };
}

var mynumber = factoryCounter(3);
console.log(mynumber.decrement());
console.log(mynumber.increment());
console.log(mynumber.reset());
console.log(mynumber.increment());
console.log(mynumber.increment());
console.log(mynumber.decrement());
