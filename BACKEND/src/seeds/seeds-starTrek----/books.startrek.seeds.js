const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookStartrek = require('../../api/models/models.Startrek/books.Startrek.model');


const arrayBooksStartrek = [
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
    {
        title: '',
        publication_year: 0,
        saga_index: 1,
        author: '',
        resume: '',
        picture: '',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksCrespusculo = await BookStartrek.find();
        if (allBooksCrespusculo.length > 0) {
            await BookStartrek.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksCrespusculo = arrayBooksStartrek.map((book) => new BookCrespusculo(book));
        await BookStartrek.insertMany(booksCrespusculo);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());