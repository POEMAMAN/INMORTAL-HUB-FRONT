const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameAlien = require('../../api/models/models.alien/videoGames.Alien.model.js');


const arrayVideoGamesAlien = [
    {
        title: "Alien Resurrection",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710680188/Alien/VIDEOGAME/AlienResurreccion_anaw6r.png",
        platform: "PS1",
        year: "2000",
        studio: "Argonaut Games",
        clasification: "PG13",
        resume: "El juego sigue a Ripley 8, un clon de Ellen Ripley, mientras lucha contra los xenomorfos en la nave espacial USM Auriga. El juego presenta una jugabilidad sólida y una variedad de armas y enemigos. Los gráficos son impresionantes para su época y crean una atmósfera tensa y aterradora. El juego también presenta una historia interesante que expande la mitología de la franquicia.",
    },
    {
        title: "Alien Trilogy ",
        picture: "https://www.retroplace.com/pics/ps/packshots/51072--alien-trilogy.png",
        platform: "PS1, SEGA SATURN y PC",
        year: "1996",
        studio: "Probe Entertainment",
        clasification: "PG13",
        resume: "Alien Trilogy es un shooter (lógicamente la temática de Alien se presta mucho a este género) en primera persona desarrollado por Probe Entertainment y lanzado en 1996. Como su nombre indica, el juego sigue los eventos de las primeras tres películas de Alien y presenta un juego en el que los jugadores deben luchar contra los xenomorfos y otros enemigos mientras exploran diversas ubicaciones. El juego fue un gran éxito en su lanzamiento y es considerado uno de los mejores juegos de 'Alien' jamás creados. El juego presenta una variedad de armas y enemigos, y ofrece una experiencia de juego frenética y desafiante.",
    },
    {
        title: "Alien 3",
        picture: "https://media.vandal.net/i/620x449/10-2023/23/202310231418068_3.jpg",
        platform: "SNES y Mega Drive",
        year: "1992",
        studio: "Probe Entertainment",
        clasification: "PG13",
        resume: "lien 3 es un juego de acción y plataformas desarrollado por Probe Entertainment y lanzado en 1992.El juego sigue a Ellen Ripley mientras lucha contra los xenomorfos en la prisión de Fiorina 161. Los jugadores deben navegar a través de diferentes niveles muy bien diseñados y enfrentarse a una gran variedad de enemigos.Alien 3 presenta una jugabilidad sólida y una variedad de armas más que decente. Los gráficos y el diseño de sonido son excelentes, teniendo en cuenta que se trata de un juego que el año pasado cumplió 30 añazos, y crean una atmósfera increíblemente tensa.",
    },
    {
        title: "Aliens",
        picture: "https://media.vandal.net/i/620x361/10-2023/23/202310231418068_5.jpg",
        platform: "ARCADE",
        year: "1990",
        studio: "Konami",
        clasification: "PG13",
        resume: "Aliens es un shooter arcade en tercera persona desarrollado por Konami y lanzado en 1990. El juego presenta un modo de juego cooperativo en el que dos jugadores pueden controlar a los personajes principales de la película 'Aliens': Ellen Ripley y Cpl. Dwayne Hicks. Los jugadores deben luchar contra hordas de xenomorfos mientras avanzan por diferentes ubicaciones. Se trata de una gran adaptación de la película y ofrece una experiencia de juego brutal y desafiante. Como os podréis imaginar, el juego cuenta con una variedad de armas y enemigos.",
    },
    {
        title: "Alien: Isolation",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710680188/Alien/VIDEOGAME/Alien_Isolation_clppam.jpg",
        platform: "PS3, PS4, Nintendo Switch, Xbox 360, Xbox One, Android y PC.",
        year: "2014",
        studio: "Creative Assembly ",
        clasification: "PG13",
        resume: "Para los que hayáis vivido en una cueva en la última década, Alien: Isolation es un juego de terror en primera persona desarrollado por Creative Assembly y publicado por Sega en 2014.El juego sigue a Amanda Ripley, la hija de Ellen Ripley, mientras busca respuestas sobre la desaparición de su madre en una estación espacial. Amanda debe enfrentarse a un xenomorfo mortal mientras intenta escapar de la estación.El juego es una experiencia inmersiva de terror que hace un gran trabajo al capturar la tensión y el terror de la película original. El xenomorfo en el juego es extremadamente inteligente y puede aparecer en cualquier momento, lo que crea una sensación constante de peligro. Los gráficos y el diseño de sonido son excelentes y contribuyen a crear una atmósfera increíblemente tensa.",
    },
    {
        title: "Alien: FireTeam Elite",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710680188/Alien/VIDEOGAME/AlienFireteamElite_tz8biw.jpg",
        platform: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series, PC y Nintendo Switch.",
        year: "2021",
        studio: "Cold Iron Studios",
        clasification: "PG13",
        resume: "La mítica saga de películas Alien se adapta una vez más a los videojuegos en esta ocasión para ofrecer un aventura de acción cooperativa para tres jugadores en la que desde una perspectiva en tercera persona tenemos que hacer frente a numerosas oleadas de xenomorfos.",
    },
    {
        title: "ALIEN VS PREDATOR",
        picture: "https://media.vandal.net/i/620x331/10-2023/23/202310231418068_11.jpg",
        platform: "ARCADE",
        year: "1994",
        studio: "Capcom",
        clasification: "PG13",
        resume: "A pesar de que para mediados de los años noventa, la saga de Alien ya se había diluido bastante con películas muy malas y un extraño crossover con Predator, la fiebre por esta serie se encontraba muy encendida. En 1994, Capcom se encargó de lanzar un título para arcade bajo el nombre de Alien VS Predator, el cual, fue muy bien recibido por toda la comunidad. Este beat em’ up muy apegado a lo que se hacía con el género durante la época, presentaba acción verdaderamente frenética con visuales sumamente atractivos. Era impresionante ver el tamaño de los sprites de este título, además de que sus efectos visuales eran toda una locura para el tiempo en el que se lanzaron al mercado.",
    },
    {
        title: "ALIENS: INFESTATION",
        picture: "https://media.vandal.net/i/620x310/10-2023/23/202310231418068_1.jpg",
        platform: "NDS",
        year: "1994",
        studio: "Sega y WayForward",
        clasification: "PG13",
        resume: "Para inicios de esta década, el nombre de Alien se mantenía con un perfil bastante bajo, esto gracias a que su actividad dentro del cine había sido muy deficiente, sin embargo, un año antes del estreno de Prometheus, Sega y WayForward nos sorprendieron con un fantástico título para el Nintendo DS que muy pocos vieron venir y que por consiguiente, no muchos disfrutaron. Aliens: Infestation estaba basado en la segunda cinta de la saga, asunto que capturó de muy buena forma al ponernos en control de un grupo de marines que debía de irse abriendo paso en escenarios muy bien diseñados. Lo interesante de este juego es que si uno de nuestros personajes moría, éste no regresaba, justo como pasa en título como Fire Emblem, por ejemplo",
    },
    {
        title: "ALIEN VS PREDATOR",
        picture: "https://cdn.atomix.vg/wp-content/uploads/2017/05/Aliens-in-the-first-game.-768x576.jpg",
        platform: "Rebellion Developments",
        year: "1999",
        studio: "Capcom",
        clasification: "PG13",
        resume: "Sabemos perfectamente que combinar Alien con Predator nunca fue lo más inteligente del mundo, sin embargo, este crossover siempre tuvo un sabor bastante interesante por alguna extraña razón. Un año antes de que terminara el milenio, Rebellion Developments con el apoyo de diferentes publishers como EA y Fox Interactive, decidió lanzar Aliens versus Predator, un shooter en primera persona que sorpresivamente resultó ser bastante decente. Algo que hasta ese momento no había pasado, es que por fin se nos dio la oportunidad de ponernos en los pies de un Xenomorph. Así es, luego de muchos años de estar matando y sobreviviendo a estas terroríficas criaturas, se nos permitió convertirnos en una de ellas para ahora, nosotros ser los cazadores.",
    },
    {
        title: "ALIEN VS PREDATOR: EXTINCTION",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710760990/Alien/VIDEOGAME/alien-vs-predator-extinction-button-1642661110327_tmta5o.jpg",
        year: "2010",
        studio: "Capcom",
        clasification: "PG13",
        resume: "Sabemos perfectamente que combinar Alien con Predator nunca fue lo más inteligente del mundo, sin embargo, este crossover siempre tuvo un sabor bastante interesante por alguna extraña razón. Un año antes de que terminara el milenio, Rebellion Developments con el apoyo de diferentes publishers como EA y Fox Interactive, decidió lanzar Aliens versus Predator, un shooter en primera persona que sorpresivamente resultó ser bastante decente. Algo que hasta ese momento no había pasado, es que por fin se nos dio la oportunidad de ponernos en los pies de un Xenomorph. Así es, luego de muchos años de estar matando y sobreviviendo a estas terroríficas criaturas, se nos permitió convertirnos en una de ellas para ahora, nosotros ser los cazadores.",
    },
    {
        title: "ALIEN VS PREDATOR 2",
        picture: "https://media.vandal.net/i/620x731/10-2023/23/202310231418068_17.jpg",
        platform: "Rebellion Software",
        year: "2001",
        studio: "Sierra y Monolith",
        clasification: "PG13",
        resume: "Aliens versus Predator 2 es un videojuego, clasificado como FPS, basado en las populares sagas fílmicas de Alien y Depredador, además de suponer la continuación del videojuego original Alien vs. Predator, desarrollado por Rebellion Software. Sin embargo, esta continuación fue desarrollada por Sierra y Monolith. ",
    },
    {
        title: "ALIENS: DARK DESCENT",
        picture: "https://media.vandal.net/i/620x348/10-2023/23/202310231418068_7.jpg",
        platform: "PS5",
        year: "2023",
        studio: "Focus Entertaiment",
        clasification: "PG13",
        resume: "Descubre una apasionante historia de Alien mientras luchas contra las icónicas criaturas xenomorfas, que van desde los facehuggers hasta los pretorianos, reinas aliens y muchos enemigos más, incluidos comandos humanos rebeldes y una otra amenaza de esta historia de AlienDirige estratégicamente y cambia las tácticas del escuadrón de una misión a otra, gestionando con cuidado la salud, los recursos y la cordura de tus soldados, a fin de evitar pérdidas permanentes en el equipo y crisis nerviosa",
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