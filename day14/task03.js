//3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

//custom error handling system
//STEP :1
function UserError(message) {
  this.name = `UserError`;
  this.message = message;
  this.stack = new Error().stack;
}
//"Humein PaymentError ka prototype set karna hai.
// Uske liye ek object banayenge Object.create() se,
// jo Error.prototype ko inherit karega."
UserError.prototype = Object.create(Error.prototype);
function ServerError(message) {
  this.server = `Server Error`;
  this.message = message;
  this.stack = new Error().stack;
}
ServerError.prototype = Object.create(Error.prototype);

function PaymentError(message) {
  this.payment = `Insuffient balance`;
  this.message = message;
  this.stack = new Error().stack;
}
PaymentError.prototype = Object.create(Error.prototype);

function Emailerror(message) {
  this.email = `Enter valid email`;
  this, (message = message);
  this.stack = new Error().stack;
}
Emailerror.prototype = Object.create(Error.prototype);

//STEP 2:
function processPayment(formData) {
  try {
    //UserName Check
    if (!formData.name) {
      throw new UserError(`❌ User name is Required.`);
    }
    if (!formData.server) {
      throw new ServerError(`❌ Server is Down,working on it .`);
    }

    if (!formData.email.include(`@`)) {
      throw new Emailerror(`❌ Enter a Valid Email address`);
    }

    if (!formData.amount <= 0 || formData.balance < formData.amount) {
      throw new PaymentError(`❌ Your card cannot afford this.`);
    }

    console.log(`☑️ Payment process sucessfull`);
  } catch (error) {
//STEP 3; handle earch type of error
if( error instanceof UserError)

  }
}
