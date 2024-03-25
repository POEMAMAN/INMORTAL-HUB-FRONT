const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGametransformers = require('../../api/models/models.Transformers/videoGames.Transformers.model');


const arrayVideoGamestransformers = [{
        title: "Transformers: La Guerra por Cybertron",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391938/segundo%20spring/transformers/videogames/Transformers_La_Guerra_por_Cybertron_idjikq.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2010",
        studio: "High Moon Studios",
        clasification: "T (Adolescentes)",
        resume: "Transformers: La Guerra por Cybertron es un shooter en tercera persona que narra los eventos previos a la guerra entre Autobots y Decepticons en el planeta Cybertron.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711393526/segundo%20spring/transformers/trailers%20videogames/Transformers__War_for_Cybertron_-_Full_Trailer_720p_30fps_H264-192kbit_AAC_qgk8ti.mp4",
    },
    {
        title: "Transformers: La Caída de Cybertron",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391934/segundo%20spring/transformers/videogames/Transformers_La_Ca%C3%ADda_de_Cybertron_mayjhf.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2012",
        studio: "High Moon Studios",
        clasification: "T (Adolescentes)",
        resume: "Secuela de La Guerra por Cybertron, La Caída de Cybertron continúa la historia de Autobots y Decepticons mientras luchan por el destino de su planeta natal.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711393782/segundo%20spring/transformers/trailers%20videogames/Tr%C3%A1iler_de_Transformers_La_ca%C3%ADda_de_Cybertron_720p_60fps_H264-128kbit_AAC_g9pxhw.mp4",
    },
    {
        title: "Transformers: Devastation",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391951/segundo%20spring/transformers/videogames/Transformers_Devastation_dclrme.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2015",
        studio: "PlatinumGames",
        clasification: "T (Adolescentes)",
        resume: "Transformers: Devastation es un juego de acción y aventuras con un estilo gráfico cel-shaded que recuerda al aspecto de la serie animada original de los años 80.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711394094/segundo%20spring/transformers/trailers%20videogames/TRANSFORMERS__Devastation_-_Launch_Trailer___PS4_1080p_60fps_H264-128kbit_AAC_tck51f.mp4",
    },
    {
        title: "Transformers: El Juego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391954/segundo%20spring/transformers/videogames/Transformers_El_Juego_rhbskt.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2007",
        studio: "Traveller's Tales",
        clasification: "T (Adolescentes)",
        resume: "Transformers: El Juego es un juego de acción en tercera persona basado en la película homónima de 2007, donde los jugadores pueden controlar tanto a Autobots como a Decepticons.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711394988/segundo%20spring/transformers/trailers%20videogames/Transformers_The_Game_-_Trailer_1_720p_30fps_H264-192kbit_AAC_oapvse.mp4",
    },
    {
        title: "Transformers: La Venganza de los Caídos - El Videojuego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391941/segundo%20spring/transformers/videogames/Transformers_La_Venganza_de_los_Ca%C3%ADdos_-_El_Videojuego_sohyof.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2009",
        studio: "Luxoflux",
        clasification: "T (Adolescentes)",
        resume: "Basado en la película Transformers: La Venganza de los Caídos, este juego permite a los jugadores controlar a Autobots y Decepticons en una lucha por la supremacía.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711395066/segundo%20spring/transformers/trailers%20videogames/Transformers_La_Venganza_de_los_Caidos_el_videojuego_Trailer_214p_30fps_H264-96kbit_AAC_pnlr4g.mp4",
    },
    {
        title: "Transformers: La Caída de Cybertron - Edición Dinobot",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391932/segundo%20spring/transformers/videogames/Transformers_La_Ca%C3%ADda_de_Cybertron_-_Edici%C3%B3n_Dinobot_g59ypo.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2012",
        studio: "High Moon Studios",
        clasification: "T (Adolescentes)",
        resume: "Esta edición especial de La Caída de Cybertron incluye contenido adicional centrado en los Dinobots, permitiendo a los jugadores controlar a estos poderosos Transformers.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711395192/segundo%20spring/transformers/trailers%20videogames/Transformers__Fall_of_Cybertron_-_Dinobots_Trailer_720p_30fps_H264-192kbit_AAC_zyepxz.mp4",
    },
    {
        title: "Transformers: El Lado Oscuro de la Luna - El Videojuego",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711391958/segundo%20spring/transformers/videogames/Transformers_El_Lado_Oscuro_de_la_Luna_-_El_Videojuego_hpztve.jpg",
        platform: "PlayStation, Xbox, PC",
        year: "2011",
        studio: "Behaviour Interactive",
        clasification: "T (Adolescentes)",
        resume: "Este juego se basa en la película Transformers: El Lado Oscuro de la Luna, ofreciendo a los jugadores la oportunidad de revivir los eventos épicos de la película.",
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711395275/segundo%20spring/transformers/trailers%20videogames/TRANSFORMERS_DARK_OF_THE_MOON_THE_GAME_-_TRAILER_480p_30fps_H264-128kbit_AAC_re2xme.mp4",
    }

]

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamestransformers = await VideoGametransformers.find();
        if (allVideoGamestransformers.length > 0) {
            await VideoGametransformers.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamestransformersMap = arrayVideoGamestransformers.map((VideoGame) => new VideoGametransformers(VideoGame));
        await VideoGametransformers.insertMany(VideoGamestransformersMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());