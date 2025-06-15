function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());

// output will be 100, since we are running inner fucntion of the testClosure.
