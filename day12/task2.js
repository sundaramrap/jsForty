const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// the output will be 1, as the value has been freezed .
