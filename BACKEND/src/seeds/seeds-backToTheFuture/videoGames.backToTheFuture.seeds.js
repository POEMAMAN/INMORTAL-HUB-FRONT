const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameresidentEvil = require('../../api/models/models.residentEvil/videoGames.residentEvil.model');


const arrayVideoGamesresidentEvil = [
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        classification: "",
        resume: "",
        trailer: ""
    },
]

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesresidentEvil = await VideoGameresidentEvil.find();
        if (allVideoGamesresidentEvil.length > 0) {
            await VideoGameresidentEvil.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesresidentEvilMap = arrayVideoGamesresidentEvil.map((VideoGame) => new VideoGameresidentEvil(VideoGame));
        await VideoGameresidentEvil.insertMany(VideoGamesresidentEvilMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());