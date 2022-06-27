const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
const user_routes = require("./routes/users");
const posts_routes = require("./routes/posts");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(8080, () => {
      console.log("server is listening on port 8080"); // Here you can set port number that better fits your needs
    });
  })
  .catch((err) => console.log(Error));

app.use(bodyParser.json()); // for parsing application/json

app.use("/api/users", user_routes);
app.use("api/posts/", posts_routes);
