const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    picture: { type: String, required: true },
    director: { type: String, required: false },
    year: { type: Number, required: false },
    duration: { type: String, required: false },
    country: { type: String, required: false },
    genre: { type: String, required: false },
    clasification: { type: String, required: false },
    books: { type: Schema.ObjectId, ref: 'booksHungerGames'},
    characters: [{ type: Schema.ObjectId, ref: 'characterHungerGames'}],
    resume: {type:String, required:false},
  },
  {
    timestamps: true,
  }
);

const MovieHungerGames = mongoose.model('movieHungerGames', countrySchema);
module.exports = MovieHungerGames;
