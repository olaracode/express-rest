const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, required: false },
    password: { type: String, required: true },
  },
  {
    methods: {
      serialize() {
        let user = { username: this.username, email: this.email };
        return user;
      },
    },
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
