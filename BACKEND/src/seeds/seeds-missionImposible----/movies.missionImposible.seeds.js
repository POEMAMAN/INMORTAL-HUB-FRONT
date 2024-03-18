const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieMisionImposible = require('../../api/models/models.MisionImposible/movies.MisionImposible.model');

const arrayMoviesMisionImposible = [
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
    const allMoviesMisionImposible = await MovieMisionImposible.find();
    if (allMoviesMisionImposible.length > 0) {
      await MovieMisionImposible.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesMisionImposibleMap = arrayMoviesMisionImposible.map((movie) => new MovieMisionImposible(movie));
    await MovieMisionImposible.insertMany(moviesMisionImposibleMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando las películas', err);
  })
  .finally(() => mongoose.disconnect());
