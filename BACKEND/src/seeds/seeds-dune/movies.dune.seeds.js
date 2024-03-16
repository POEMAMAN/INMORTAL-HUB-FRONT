const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieDune = require('../../api/models/models.dune/movies.dune.model');

const arrayMoviesDune = [
  {
    title: "",
    picture: "",
    director: "",
    year: "",
    duration: "",
    country: "",
    genre: "",
    clasification: "",
    books: "",
    characters: "",
    resume: "",
  },
  {
    title: "",
    picture: "",
    director: "",
    year: "",
    duration: "",
    country: "",
    genre: "",
    clasification: "",
    books: "",
    characters: "",
    resume: "",
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesDune = await MovieDune.find();
    if (allMoviesDune.length > 0) {
      await MovieDune.collection.drop();
      console.log('Movieas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando las peliculas', err);
  })
  .then(async () => {
    const moviesDuneMap = arrayMoviesDune.map((movie) => new MovieDune(movie));
    await MovieDune.insertMany(moviesDuneMap);
    console.log('peliculas insertados');
  })
  .catch((err) => {
    console.log('error insertando las peliculas', err);
  })
  .finally(() => mongoose.disconnect());
