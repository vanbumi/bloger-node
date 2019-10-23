const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String
});

module.exports = mongoose.model('Post', PostSchema);