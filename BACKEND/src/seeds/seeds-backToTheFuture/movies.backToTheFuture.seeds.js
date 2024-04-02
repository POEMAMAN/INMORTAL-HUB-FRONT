const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MoviebackToTheFuture = require('../../api/models/models.backToTheFuture/movies.backToTheFuture.model');

const arrayMoviesbackToTheFuture = [
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
        const allMoviesbackToTheFuture = await MoviebackToTheFuture.find();
        if (allMoviesbackToTheFuture.length > 0) {
            await MoviebackToTheFuture.collection.drop();
            console.log('Películas borradas');
        }
    })
    .catch((err) => {
        console.log('error borrando las películas', err);
    })
    .then(async() => {
        const moviesbackToTheFutureMap = arrayMoviesbackToTheFuture.map((movie) => new MoviebackToTheFuture(movie));
        await MoviebackToTheFuture.insertMany(moviesbackToTheFutureMap);
        console.log('películas insertadas');
    })
    .catch((err) => {
        console.log('error insertando las películas', err);
    })
    .finally(() => mongoose.disconnect());