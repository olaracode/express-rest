// ? Encription Module https://github.com/kelektiv/node.bcrypt.js#readme
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { generateAccessToken } = require("../middlewares/auth");

const saltRounds = 10;
const passwordRgx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
const emailRgx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const userRegister = async (req, res) => {
  // ! Missing email regex validation
  try {
    const { email, username, password } = req.body;
    // Validate for empty request body
    if (!email || !password || !username) {
      return res.status(406).send({ error: "All fields are required" });
    }

    // ? Email Validation
    if (email.length < 6) {
      return res.status(406).send({ error: "Invalid email adress" });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(302).send({ error: "Mail already in use" });
    }

    // ? Username Validation
    if (username.length < 4 || username.length > 10) {
      return res.status(406).send({
        error:
          "Username must be over 4 characters and under 10 characters long",
      });
    }
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(302).send({ error: "Username already in use" });
    }

    // ? Password validation
    if (password.length < 5 || password.length > 15) {
      return res.status(406).send({
        error:
          "Password must be over 5 characters and under 10 characters long",
      });
    }

    // ? Encryption and creation of user instance
    let hash = await bcrypt.hash(password, saltRounds);
    let response = await User.create({
      username,
      email,
      password: hash,
    });
    return res.json({ data: req.body });
  } catch (error) {
    return res.json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(406).send({ error: "All fields are required 😠" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ error: "User not found 😖" });
  }

  let token;
  if (bcrypt.compare(password, user.password)) {
    token = generateAccessToken({ username: user.username, id: user._id });
  } else {
    return res.status(401).send({ error: "Incorrect Password 💭" });
  }
  return res.status(200).send({ token });
};

const getUserData = (req, res) => {
  const { user } = req;
  // let users = User.findOne({ email: req });
  return res.status(200).send({ data: user });
};

module.exports = { userRegister, login, getUserData };
