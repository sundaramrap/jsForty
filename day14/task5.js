// //custom error
// function ValidationError(message) {
//   this.name = "Validation Error";
//   this.message = message;
//   this.stack = new Error().stack;
// }

// ValidationError.prototype = Object.create(Error.prototype);

// function validateUser(dataUser) {
//   try {
//     if (!dataUser.name) {
//       throw new ValidationError("Username is required");
//     }
//     if (typeof dataUser.age !== "number" || dataUser.age < 0) {
//       throw new ValidationError("Enter valid age.");
//     }

//     console.log(`User Accepted ::: ${dataUser.name} is ${dataUser.age} old.`);
//   } catch (error) {
//     console.error(`${error.name} : ${error.message}`);
//   }
// }

// validateUser({ name: "", age: -0 });

//custom Error

function ValidateError(message) {
  this.name = "Validate Error :";
  this.message = message;
  this.stack = new Error().stack;
}

ValidateError.prototype = Object.create(Error.prototype);

//validation user function

function validateUser(userData) {
  try {
    const errors = [];
    if (!userData.userName || userData.userName.trim() === "") {
      errors.push("User name canNot be empty");
    }
    if (typeof userData.age !== "number" || userData.age <= 0) {
      errors.push("Age must be positive number");
    }
    if (errors.length > 0) {
      throw new ValidateError(errors.join("\n"));
    }
    console.log("Validation user passed 🦙");
  } catch (error) {
    console.error(`${error.name} : \n ${error.message}`);
  }
}
const userInput = { username: "", age: -2 };
validateUser(userInput);
