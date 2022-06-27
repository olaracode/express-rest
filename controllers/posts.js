const { Post } = require("../models/Posts");

const createPost = (req, res) => {
  const { title, imageUrl, description, tags } = req.body;
  console.log(title, imageUrl, description, tags);
  return res.status(200);
};

module.exports = { createPost };
