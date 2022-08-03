const express = require("express");
const router = express.Router();
const { tokenValidate } = require("../middlewares/auth");
const {
  addFavorite,
  getFavorites,
  deleteFavorite,
} = require("../controllers/favorites");

router.use(tokenValidate);

router.get("/", getFavorites);
router.post("/add", addFavorite);
router.delete("/delete/:id", deleteFavorite);

module.exports = router;
