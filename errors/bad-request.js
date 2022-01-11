const { StatusCodes } = require("http-status-codes");
const CustomError = require("./customError");

class BadRequestError extends CustomError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
