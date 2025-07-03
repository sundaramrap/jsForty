//Task 1--- refrence error --> since we have no reffernce of variable p
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

//Task 2--Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors.

//have a amount alrady declared.
function processPayment(amount) {
  if (typeof amount !== "number") {
    throw new Error(`Amount should be a number`);
  }

  if (amount <= 0) {
    throw new Error(`Amount cannot be negative`);
  }
  if (amount > balance) {
    throw new Error(
      `Amount cannot be more than balance, lower your transaction amount.`
    );
  }

  balance -= amount;

  console.log(`Paid ${amount}, left over balance is : ${balance}`);
}

let balance = 2000;

try {
  processPayment(35);
  processPayment(0);
} catch (error) {
  console.error(`Waring issue :`, error.message);
}
