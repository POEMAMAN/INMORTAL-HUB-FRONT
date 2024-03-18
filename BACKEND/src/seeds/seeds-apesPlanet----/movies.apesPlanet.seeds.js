const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieApesPlanet = require('../../api/models/models.ApesPlanet/movies.ApesPlanet.model');

const arrayMoviesApesPlanet = [
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
    const allMoviesApesPlanet = await MovieApesPlanet.find();
    if (allMoviesApesPlanet.length > 0) {
      await MovieApesPlanet.collection.drop();
      console.log('películas borradas');
    }
  })
  .catch((err) => {
    console.log('error borrando las películas', err);
  })
  .then(async () => {
    const moviesApesPlanetMap = arrayMoviesApesPlanet.map((movie) => new MovieApesPlanet(movie));
    await MovieApesPlanet.insertMany(moviesApesPlanetMap);
    console.log('películas insertados');
  })
  .catch((err) => {
    console.log('error insertando las películas', err);
  })
  .finally(() => mongoose.disconnect());
