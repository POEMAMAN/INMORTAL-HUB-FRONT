const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieresidentEvil = require('../../api/models/models.residentEvil/movies.residentEvil.model');

const arrayMoviesresidentEvil = [
    {
        title: "",
        picture: "",
        director: "",
        year: 0,
        duration: "",
        country: "",
        genre: "",
        clasification: "",
        id: 1,
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        director: "",
        year: 0,
        duration: "",
        country: "",
        genre: "",
        clasification: "",
        id: 2,
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        director: "",
        year: 0,
        duration: "",
        country: "",
        genre: "",
        clasification: "",
        id: 3,
        resume: "",
        trailer: ""
    },
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allMoviesresidentEvil = await MovieresidentEvil.find();
        if (allMoviesresidentEvil.length > 0) {
            await MovieresidentEvil.collection.drop();
            console.log('Películas borradas');
        }
    })
    .catch((err) => {
        console.log('error borrando las películas', err);
    })
    .then(async() => {
        const moviesresidentEvilMap = arrayMoviesresidentEvil.map((movie) => new MovieresidentEvil(movie));
        await MovieresidentEvil.insertMany(moviesresidentEvilMap);
        console.log('películas insertadas');
    })
    .catch((err) => {
        console.log('error insertando las películas', err);
    })
    .finally(() => mongoose.disconnect());