const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookAlien = require('../../api/models/models.alien/books.Alien.model.js');


const arrayBooksAlien = [{
    title: '',
    publication_year: 1,
    saga_index: 1,
    author: '',
    resume: '',
    picture: '',
}]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksAlien = await BookAlien.find();
        if (allAlien.length > 0) {
            await BookAlien.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksAlienMap = arrayBooksAlien.map((book) => new BookAlien(book));
        await BookAlien.insertMany(booksAlien);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());