const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.listen(6000, () => {
  console.log("server is listening on port 5000");
});

app.use(bodyParser.json()); // for parsing application/json

app.get("/api/products", (req, res) => {
  res.json([{ name: "iphone", price: 800 }]);
});
app.post("/api/user", (req, res) => {
  console.log(req.body);
});
