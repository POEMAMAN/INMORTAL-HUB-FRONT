const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterBackToTheFuture = require('../../api/models/models.BackToTheFuture/characters.BackToTheFuture.model');

const arrayCharactersBackToTheFuture = [
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
        const allCharactersBackToTheFuture = await CharacterBackToTheFuture.find();
        if (allCharactersBackToTheFuture.length > 0) {
            await CharacterBackToTheFuture.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersBackToTheFutureMap = arrayCharactersBackToTheFuture.map(
            (character) => new CharacterBackToTheFuture(character)
        );
        await CharacterBackToTheFuture.insertMany(charactersBackToTheFutureMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());