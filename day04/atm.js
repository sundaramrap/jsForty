console.log("hello from js");
//withdrawl only allows multiple of 100.
//...> 100,10000,100000

let amount = 5050;

if (amount % 100 == 0) {
  console.log("Withdrawal Sucessfull");
} else {
  console.log("Invalid amount");
}
