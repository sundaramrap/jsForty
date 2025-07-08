//step 1 - make custom  errors one- one.
//step 2 - put those error for try catch
// run a function and check them

function UserError(message) {
  this.name = "UserError";
  this.message = message;
  this.stack = new Error().stack;
}

UserError.prototype = Object.create(Error.prototype);

function PaymentError(message) {
  this.amount = "PaymentError";
  this.message = message;
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);

class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "Server Error";
  }
}

class EmailError extends Error {
  constructor(message) {
    super(message);
    this.email = "EmailError";
  }
}

class MultipleFormError extends Error {
  constructor(error) {}
}

//Setuup try -catch
