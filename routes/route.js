const { login, dashBoard } = require("../controller/control");
const authMidWare = require("../midWare/auth");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/dashboard").get(authMidWare, dashBoard);

module.exports = router;
