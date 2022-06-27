const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, required: false },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
