const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const MovieLordOfTheRings = require('../../api/models/models.LordOfTheRings/Movies.LordOfTheRings.model');

const arrayMoviesLordOfTheRings = [
  {
    name: '',
    capital: '',
    foundation_date: '',
    resume: '',
    picture:
      '',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allMoviesLordOfTheRings = await MovieLordOfTheRings.find();
    if (allMoviesLordOfTheRings.length > 0) {
      await MovieLordOfTheRings.collection.drop();
      console.log('Peliculas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Peliculas', err);
  })
  .then(async () => {
    const MoviesLordOfTheRingsMap = arrayMoviesLordOfTheRings.map((Movie) => new MovieLordOfTheRings(Movie));
    await MovieLordOfTheRings.insertMany(MoviesLordOfTheRingsMap);
    console.log('Peliculas insertados');
  })
  .catch((err) => {
    console.log('error insertando los Peliculas', err);
  })
  .finally(() => mongoose.disconnect());
