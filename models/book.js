const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  price: Number,
  authorId: String,
});

const Book = mongoose.model('Book', bookSchema);
exports.Book = Book;
