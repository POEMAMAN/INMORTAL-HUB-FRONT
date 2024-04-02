const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterbackToTheFuture = require('../../api/models/models.backToTheFuture/characters.backToTheFuture.model');

const arrayCharactersbackToTheFuture = [
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
    {
        name: "",
        actor: "",
        profession: "",
        picture: "",
        resume: ""
    },
        {
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
        const allCharactersbackToTheFuture = await CharacterbackToTheFuture.find();
        if (allCharactersbackToTheFuture.length > 0) {
            await CharacterbackToTheFuture.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersbackToTheFutureMap = arrayCharactersbackToTheFuture.map(
            (character) => new CharacterbackToTheFuture(character)
        );
        await CharacterbackToTheFuture.insertMany(charactersbackToTheFutureMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());