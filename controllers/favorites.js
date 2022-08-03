const Favorite = require("../models/Favorite");
const User = require("../models/User");

const addFavorite = async (req, res) => {
  try {
    const { user, body } = req;
    const { url, name, img } = body;
    if (!url || !name || !img) {
      return res
        .status(400)
        .send({ error: "The name or the url are required" });
    }
    const favorite = await Favorite.create({
      memberId: user.id,
      url,
      name,
      img,
    });

    return res.status(200).send({ data: favorite });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const getFavorites = async (req, res) => {
  try {
    const { user } = req;
    const favorites = await Favorite.find({ memberId: user.id });
    if (!favorites) {
      return res.status(404).send({ error: "We didnt find any 🤨" });
    }
    return res.status(200).send({
      data: { favorites },
    });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { user, params } = req;
    const favorite = await Favorite.findOne({
      _id: params.id,
    });
    if (!favorite) {
      return res.status(404).send({ error: "Favorite not found 😕" });
    }
    if (favorite.memberId !== user.id) {
      return res.status(401).send({ error: "Not yours to see 🙈" });
    }
    favorite.delete();
    return res
      .status(200)
      .send({ msg: `Deleted ${favorite.name} successfully 🔥` });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

module.exports = { addFavorite, getFavorites, deleteFavorite };
