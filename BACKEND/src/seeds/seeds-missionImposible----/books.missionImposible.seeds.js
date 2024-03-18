const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookMissionImposible = require('../../api/models/models.MissionImposible/books.MissionImposible.model');


const arrayBooksMissionImposible = [
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
        const allBooksCrespusculo = await BookMissionImposible.find();
        if (allBooksCrespusculo.length > 0) {
            await BookMissionImposible.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksCrespusculo = arrayBooksMissionImposible.map((book) => new BookCrespusculo(book));
        await BookMissionImposible.insertMany(booksCrespusculo);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());