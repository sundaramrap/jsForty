//3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError

//custom error handling system

function createError(type, message) {
  const error = new Error(message);
  error.name = type;
  return error;
}

//fuction to check custom error
