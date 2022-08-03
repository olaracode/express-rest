const { default: mongoose } = require("mongoose");
const mongopose = require("mongoose");

const FavoriteSchema = new mongoose.Schema({
  memberId: { type: "string", required: true },
  url: { type: "string" },
  img: { type: "string" },
  name: { type: "string" },
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
