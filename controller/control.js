const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("must have username and password");
  }

  const payload = {
    id: new Date().getTime(),
    username,
    password,
  };

  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });

  res.status(200).json({ msg: "successfully login", token });
};

const dashBoard = (req, res) => {
  res.status(200).json({ msg: `hello ${req.username}` });
};

module.exports = {
  login,
  dashBoard,
};
