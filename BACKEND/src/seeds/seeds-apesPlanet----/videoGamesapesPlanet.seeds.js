const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoMissionImposible = require('../../api/models/models.MissionImposible/videoGames.MissionImposible.model.js');


const arrayVideoGamesApesPlanet = [
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
    {
        title: "",
        picture: "",
        platform: "",
        year: "",
        studio: "",
        clasification: "",
        resume: '',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesApesPlanet = await VideoMissionImposible.find();
        if (allVideoGamesApesPlanet.length > 0) {
            await VideoMissionImposible.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesApesPlanetMap = arrayVideoGamesApesPlanet.map((VideoGame) => new VideoMissionImposible(VideoGame));
        await VideoMissionImposible.insertMany(VideoGamesApesPlanetMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());