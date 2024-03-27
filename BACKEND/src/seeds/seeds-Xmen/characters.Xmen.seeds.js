const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterXmen = require('../../api/models/models.Xmen/characters.Xmen.model');

const arrayCharactersXmen = [{
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },

];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersXmen = await CharacterXmen.find();
        if (allCharactersXmen.length > 0) {
            await CharacterXmen.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersXmenMap = arrayCharactersXmen.map(
            (character) => new CharacterXmen(character)
        );
        await CharacterXmen.insertMany(charactersXmenMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());