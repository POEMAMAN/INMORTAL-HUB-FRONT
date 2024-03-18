const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieCrespusculo = require('../../api/models/models.Crespusculo/movies.Crespusculo.model');

const arrayMoviesCrespusculo = [
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
    const allMoviesCrespusculo = await MovieCrespusculo.find();
    if (allMoviesCrespusculo.length > 0) {
      await MovieCrespusculo.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesCrespusculoMap = arrayMoviesCrespusculo.map((movie) => new MovieCrespusculo(movie));
    await MovieCrespusculo.insertMany(moviesCrespusculoMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando las películas', err);
  })
  .finally(() => mongoose.disconnect());
