const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieStartrek = require('../../api/models/models.Startrek/movies.Startrek.model');

const arrayMoviesStartrek = [
  {
    title: '',
    picture: '',
    director: '',
    year: 0,
    duration: "",
    country: "",
    genre: '',
    clasification: "",
    resume: '',
  },
  {
    title: '',
    picture: '',
    director: '',
    year: 0,
    duration: "",
    country: "",
    genre: '',
    clasification: "",
    resume: '',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesStartrek = await MovieStartrek.find();
    if (allMoviesStartrek.length > 0) {
      await MovieStartrek.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesStartrekMap = arrayMoviesStartrek.map((movie) => new MovieStartrek(movie));
    await MovieStartrek.insertMany(moviesStartrekMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando las películas', err);
  })
  .finally(() => mongoose.disconnect());
