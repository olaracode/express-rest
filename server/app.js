// Express
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Swagger docs
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
// routes
const user_routes = require("../routes/users");
const favorite_routes = require("../routes/favorites");
// Env
require("dotenv").config();

// Initialize
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("server is listening on port 8080"); // Here you can set port number that better fits your needs
    });
  })
  .catch((err) => console.log(Error));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json()); // for parsing application/json

// base routes
app.use("/api/users", user_routes);
app.use("/api/favorites", favorite_routes);
