const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMidWare = (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth || !headerAuth.startsWith("Bearer ")) {
    throw new BadRequestError("no header authorization");
  }

  const token = headerAuth.split(" ")[1];
  const decoded = jwt.verify(token, process.env.SECRET);

  req.username = decoded.username;
  next();
};

module.exports = authMidWare;
