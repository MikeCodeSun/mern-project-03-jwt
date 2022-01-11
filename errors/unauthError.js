const CustomError = require("./customError");
const { StatusCodes } = require("http-status-codes");

class UnauthError extends CustomError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthError;
