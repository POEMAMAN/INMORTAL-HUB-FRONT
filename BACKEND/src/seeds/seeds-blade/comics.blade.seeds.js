const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookBlade = require('../../api/models/models.Blade/books.Blade.model');


const arrayBooksBlade = [
  
  {
    title: '',
    publication_year: 0,
    author: '',
    resume: '',
    picture:'',
  },
  {
    title: '',
    publication_year: 0,
    author: '',
    resume: '',
    picture:'',
  },
  {
    title: '',
    publication_year: 0,
    author: '',
    resume: '',
    picture:'',
  },
  {
    title: '',
    publication_year: 0,
    author: '',
    resume: '',
    picture:'',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksBlade = await BookBlade.find();
    if (allBooksBlade.length > 0) {
      await BookBlade.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksBladeMap = arrayBooksBlade.map((book) => new BookBlade(book));
    await BookBlade.insertMany(booksBladeMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
