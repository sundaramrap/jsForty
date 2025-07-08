//3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

//custom error handling system
//STEP :1
function UserError(message) {
  this.name = "UserError";
  this.message = message;
  this.stack = new Error().stack;
}
//"Humein PaymentError ka prototype set karna hai.
// Uske liye ek object banayenge Object.create() se,
// jo Error.prototype ko inherit karega."
UserError.prototype = Object.create(Error.prototype);
function ServerError(message) {
  this.server = "Server Error";
  this.message = message;
  this.stack = new Error().stack;
}
ServerError.prototype = Object.create(Error.prototype);

function PaymentError(message) {
  this.payment = "Insuffient balance";
  this.message = message;
  this.stack = new Error().stack;
}
PaymentError.prototype = Object.create(Error.prototype);

function Emailerror(message) {
  this.email = "Enter valid email";
  this.message = message;
  this.stack = new Error().stack;
}
Emailerror.prototype = Object.create(Error.prototype);

function MultipleFormError(errors) {
  this.name = "Multiple Form Error";
  this.errors = errors;
  this.message = "Multiple Erros have occured in form validation .";
  this.stack = new Error().stack;
}

MultipleFormError.prototype = Object.create(Error.prototype);
//STEP 2:
function processPayment(formData) {
  ///making array to stock up the errors generated
  let errors = [];
  try {
    //UserName Check
    if (!formData.name) {
      // throw new UserError(`❌ User name is Required.`);

      errors.push(new UserError(`❌ User name is Required.`));
    }
    if (!formData.server) {
      errors.push(new ServerError(`❌ Server is Down,working on it .`));
      // throw new ServerError(`❌ Server is Down,working on it .`);
    }

    if (!formData.email.includes(`@`)) {
      errors.push(new Emailerror(`❌ Enter a Valid Email address`));
      // throw new Emailerror(`❌ Enter a Valid Email address`);
    }

    if (formData.amount <= 0 || formData.balance < formData.amount) {
      errors.push(new PaymentError(`❌ Your card cannot afford this.`));
      // throw new PaymentError(`❌ Your card cannot afford this.`);
    }

    if (errors.length > 0) {
      throw new MultipleFormError(errors);
    }

    console.log(`☑️ Payment process sucessfull`);
  } catch (error) {
    //STEP 3 : handle earch type of error
    //since we are catching multiple errors in the form
    if (error instanceof MultipleFormError) {
      console.error(`Multiple error found :`);
      error.errors.forEach((err) => {
        console.error(`${err.name} : ${err.message}`);
      });
    } else {
      console.error(`${error.name} : ${error.message}`);
    }
    // if (error instanceof UserError) {
    //   console.error(`${error.name} : ${error.message}`);
    // } else if (error instanceof Emailerror) {
    //   console.error(`${error.email} : ${error.message}`);
    // } else if (error instanceof ServerError) {
    //   console.error(`${error.server} : ${error.message}`);
    // } else if (error instanceof PaymentError) {
    //   console.error(`${error.payment} : ${error.message}`);
    // } else {
    //   console.error(`"Unknown Error":`, error.message);
    // }
  }
}

processPayment({
  name: "Tehyung",
  email: "bashita.com",
  amount: 100,
  balance: 30,
  server: false,
});
