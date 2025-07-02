console.log(`Day 14`);

try {
  console.log(`execution starts here`);
  asxz;
  console.log(`Execution ends here`);
} catch (err) {
  console.log(`An error has happend`);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

//real world

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      const err = new Error("Division by 0 is not allowed.");
      //error is constructor function
      throw err;
    }

    const result = a / b;
    console.log(`This is the result ${result}`);
  } catch (error) {
    console.error("got a Math error:", error.message);
  }
}

divideNumbers(3, 4);

const person = {
  name: "Seokjin",
  address: {
    city: "patna",
  },
};

// function getPostalCode(user) {
//   try {
//     console.log(user.address.country.postalCode);
//   } catch (error) {
//     console.error("Warning :", error.message);
//   }
// }
// getPostalCode(person);

//rethhrowing error
try {
  //do something with logic and code
} catch (error) {
  //do something with the error
}

function validteForm(formData) {
  try {
    if (!formData.username) throw new Error(`User name mandatory`);
    if (!formData.email.include("@")) throw new Error(`Invalid email format`);
  } catch (error) {
    console.error(`Validation Issue Found:`, error.message);
    throw error; //rethrow
  }
}

try {
  validteForm({ username: "namjoon", email: "karyas" });
} catch (error) {
  console.error(`Showing error message for user Creation`, error.message);
}
