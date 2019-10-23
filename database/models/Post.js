const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String
});

module.exports = Post = mongoose.model('Post', PostSchema);