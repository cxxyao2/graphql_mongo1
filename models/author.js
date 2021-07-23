const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  price: Number,
  books: String,
});

const Author = mongoose.model('Author', authorSchema);
exports.Author = Author;
