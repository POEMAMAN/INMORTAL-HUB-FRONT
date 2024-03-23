const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameAlien = require('../../api/models/models.Alien/videoGames.Alien.model.js');


const arrayVideoGamesAlien = [
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        clasification: "PG13",
        resume: "",
        trailer: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        clasification: "PG13",
        resume: "",
        trailer: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        clasification: "PG13",
        resume: "",
        trailer: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        clasification: "PG13",
        resume: "",
        trailer: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: 0,
        studio: "",
        clasification: "PG13",
        resume: "",
        trailer: '',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesAlien = await VideoGameAlien.find();
        if (allVideoGamesAlien.length > 0) {
            await VideoGameAlien.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesAlienMap = arrayVideoGamesAlien.map((VideoGame) => new VideoGameAlien(VideoGame));
        await VideoGameAlien.insertMany(VideoGamesAlienMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());