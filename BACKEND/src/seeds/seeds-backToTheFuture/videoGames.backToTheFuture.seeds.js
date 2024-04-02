const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGamebackToTheFuture = require('../../api/models/models.backToTheFuture/videoGames.backToTheFuture.model');


const arrayVideoGamesbackToTheFuture = [
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
        const allVideoGamesbackToTheFuture = await VideoGamebackToTheFuture.find();
        if (allVideoGamesbackToTheFuture.length > 0) {
            await VideoGamebackToTheFuture.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesbackToTheFutureMap = arrayVideoGamesbackToTheFuture.map((VideoGame) => new VideoGamebackToTheFuture(VideoGame));
        await VideoGamebackToTheFuture.insertMany(VideoGamesbackToTheFutureMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());