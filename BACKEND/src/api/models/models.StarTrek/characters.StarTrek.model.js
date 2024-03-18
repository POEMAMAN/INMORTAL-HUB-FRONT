const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const charactersSchema = new Schema({
    name: { type: String, required: true },
    actor: { type: String, required: true },
    profession: { type: String, required: true },
    resume: { type: String, required: false },
    picture: { type: String },
}, {
    timestamps: true,
});

const CharactersStarTrek = mongoose.model('characterStarTrek', charactersSchema);

module.exports = CharactersStarTrek;