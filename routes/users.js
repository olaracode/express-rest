const express = require("express");
const router = express.Router();

const { userRegister, login } = require("../controllers/users");

router.post("/register", userRegister);

router.post("/login", login);

module.exports = router;
