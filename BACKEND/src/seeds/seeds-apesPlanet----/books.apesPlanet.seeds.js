const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookApesPlanet = require('../../api/models/models.ApesPlanet/books.ApesPlanet.model');


const arrayBooksApesPlanet = [
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
        const allBooksCrespusculo = await BookApesPlanet.find();
        if (allBooksCrespusculo.length > 0) {
            await BookApesPlanet.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksCrespusculo = arrayBooksApesPlanet.map((book) => new BookCrespusculo(book));
        await BookApesPlanet.insertMany(booksCrespusculo);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());