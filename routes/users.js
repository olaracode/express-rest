const express = require("express");
const router = express.Router();
const { tokenValidate } = require("../middlewares/auth");
const { userRegister, login, getUserData } = require("../controllers/users");

router.post("/register", userRegister);

router.post("/login", login);

router.get("/", tokenValidate, getUserData);

module.exports = router;
