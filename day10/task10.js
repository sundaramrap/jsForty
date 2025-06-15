function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // calling reduce 1st time -->-1
reduce(); //calling reduce 2nd time --> -2

/**
 *  counter --> count =0;
 *                  -1;
 *
 */
