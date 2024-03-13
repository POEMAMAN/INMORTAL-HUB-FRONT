const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: { type: String, required: true },
    order: { type: String, required: true },
    // book: { type: String, required: false },
    resume: {type:String, required:false},
    picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const MovieHarryPotter = mongoose.model('movieHarryPotter', countrySchema);
module.exports = MovieHarryPotter;
