const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Book = require('../api/models/book.model');

const DB_URL = process.env.DBURL;

const arrayBooks = [
  {
    title: '',
    publication_year: 0,
    saga: "",
    saga_index: 0,
    universe: "",
    author: '',
    picture:
      '',
  },
];

mongoose
  .connect(DB_URL)
    // Para que funcione hay que poner la URL en String, da fallo la importacion
  .then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length > 0) {
      await Book.collection.drop();
      console.log('deleted books');
    }
  })
  .catch((error) => console.log('error deleting Books', error))
  .then(async () => {
    const bookMap = arrayBooks.map((book) => new Book(book));
    await Book.insertMany(bookMap);
    console.log('books addins');
  })
  .catch((error) => console.log('error adding books', error))
  .finally(() => mongoose.disconnect());
