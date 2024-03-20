const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameBlade = require('../../api/models/models.Blade/videoGames.Blade.model.js');


const arrayVideoGamesBlade = [
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: "",
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesBlade = await VideoGameBlade.find();
        if (allVideoGamesBlade.length > 0) {
            await VideoGameBlade.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesBladeMap = arrayVideoGamesBlade.map((VideoGame) => new VideoGameBlade(VideoGame));
        await VideoGameBlade.insertMany(VideoGamesBladeMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());