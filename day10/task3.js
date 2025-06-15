function outerFunction() {
  let name = "tehyung";
  function innerFunction() {
    console.log(name);
  }
  innerFunction();
}

outerFunction();
