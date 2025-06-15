function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // outer --> count =0; count ++ --> 1 , op ->1
counter(); //outer --> count =1 ,count ++ -->2, op->2

console.log("day11");
