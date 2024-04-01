const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameMatrix = require('../../api/models/models.Matrix/videoGames.Matrix.model.js');


const arrayVideoGamesMatrix = [
    {
        title: "Enter the Matrix",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711995358/segundo%20spring/matrix/videogames/enter-the-matrix-game-remaster-franchise-ps5-xbox_oubaue.avif",
        platform: "XBOX GCN PS2 PC ",
        year: "2003",
        studio: "ATARI",
        clasification: "PEGI12",
        resume: 'Enter the Matrix es un videojuego de acción y aventura desarrollado por Shiny Entertainment y publicado por Atari en 2003. El juego fue lanzado para múltiples plataformas, incluidas PlayStation 2, Xbox, GameCube y PC. Diseñado para ser una parte integral del universo Matrix, Enter the Matrix presenta una historia única que se desarrolla en paralelo a los eventos de las películas Matrix Reloaded y Matrix Revolutions, ofreciendo a los jugadores una perspectiva expandida del mundo de Matrix y sus personajes. En Enter the Matrix, los jugadores asumen el papel de Niobe o Ghost, dos personajes secundarios de las películas, cada uno con su propia línea argumental y habilidades específicas. A lo largo del juego, los jugadores se embarcan en misiones que involucran combates cuerpo a cuerpo, tiroteos, manejo de vehículos y la característica manipulación del tiempo "bullet time" que simula la icónica estética de las películas. Una de las características más notables del juego es su integración con el universo cinematográfico de Matrix. Incluye secuencias de acción filmadas específicamente para el juego, protagonizadas por los actores de las películas, lo que contribuye a una experiencia narrativa más rica y cohesiva. Además, la trama del juego fue coescrita por los hermanos Wachowski, creadores de Matrix, asegurando que complementara adecuadamente la narrativa y el mundo construido en las películas. A nivel técnico, Enter the Matrix fue ambicioso para su tiempo, con intentos de combinar diferentes géneros de juego y mecánicas innovadoras, como el uso del "bullet time". Sin embargo, a pesar de estas ambiciones, el juego fue recibido con críticas mixtas. Los aspectos positivos destacados por los críticos y jugadores incluyen la narrativa expansiva del universo de Matrix, la actuación y la inclusión de contenido cinematográfico exclusivo. No obstante, el juego fue criticado por sus problemas técnicos, como fallos gráficos, una IA enemiga inconsistente y una jugabilidad que a veces resultaba repetitiva o poco pulida.A pesar de sus defectos, Enter the Matrix se mantiene como una pieza interesante y única dentro del merchandising de Matrix, valorada por los fanáticos de la franquicia por su contribución al lore y por ofrecer una nueva forma de experimentar el mundo y los personajes de Matrix. En resumen, mientras que Enter the Matrix puede no haber cumplido con todas las expectativas como videojuego, su ambición y vínculos directos con la serie de películas lo convierten en un título memorable para los seguidores de la saga.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711996285/segundo%20spring/matrix/videogames/GAMEPLAY/Enter_the_Matrix_PC_Gameplay_HD_192kbit_AAC_bcjvxe.mp4",
    },
    {
        title: "The Matrix Online",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711995482/segundo%20spring/matrix/videogames/840_560_we4dk8.jpg",
        platform: "PC",
        year: "2005",
        studio: "Ubisoft",
        clasification: "PEGI12",
        resume: 'The Matrix Online (oficialmente abreviado como MxO) fue un videojuego de rol multijugador masivo en línea (MMORPG) inicialmente desarrollado por Monolith Productions y más tarde, unos cuantos meses después de su lanzamiento, por Sony Online Entertainment.1​ Fue anunciado como una continuación oficial de la trama de la trilogía de películas Matrix, cuando las Hermanas Wachowski, las creadoras de la franquicia, dieron su bendición a la idea de que los videojugadores "heredaran la continuación de la trama".2​ El juego empezó la etapa de pruebas cerrada en junio de 2004, que luego fue abierta para las personas que pre-ordenaron el juego en noviembre de 2004. Warner Bros. Y Sega lanzaron oficialmente MxO el 22 de marzo de 2005 en los Estados Unidos. Fue lanzado en Europa el 15 de abril de 2005. En junio de 2005 se anunció que Warner Bros. había vendido los derechos del juego a Sony Online Entertainment, y el desarrollo y la operación del juego fue retrasado hasta el 15 de agosto de 2005. Sony Online Entertainment terminó la operación del juego el 31 de julio de 2009. Ubisoft canceló un acuerdo a co-publicar el juego, no mucho tiempo después de cancelar planes para otro MMORPG. Ubisoft Y Warner Bros. declararon que esto no tuvo un impacto negativo en su relación. En ese momento, dudas sobre el juego circularon dentro de la industria, basado en la floja recepción de las últimas dos películas de Matrix, y un sobreexplotado mercado de MMORPG. Otro de los aspectos que definieron y diferenciaron The Matrix Online era la inclusión y énfasis en lo que se llamó "La continuación de la historia". Esto quiere decir que el juego él es la continuación oficial del universo, la historia y los personajes establecidos en la serie de obras de ficción Matrix que incluyen la trilogía de película, los cortometrajes de Animatrix, el videojuego Enter The Matrix y una serie de cómics escritos y producidos oficialmente. Esta continuación estuvo escrita por el premiado escritor de cómics Paul Chadwick, y más tarde colaborando con el principal diseñador del juego, Ben "Rarebit" Chamberlain. También se ha confirmado que hubo verificación y aportes de las creadoras de "Matrix", las hermanas Wachowskis, hasta el fin del Capítulo 9. Sony Online Entertainment decidió descontinuar el servicio de The Matrix Online debido a números bajos de suscripción en junio de 2009. Sony Online Entertainment cerró el servicio a las 00:00 del 1 de agosto de 2009. El juego tenía menos de 500 jugadores activos antes del cierre.Los días que precedieron al cierre, así como el fin de los servidores mismos, fueron registrados en el sitio web de videojuegos, Giant Bomb en una serie de vídeos titulada "No Así (Not Like This)", una referencia a una línea en la primera película de Matrix. Después del cierre, el sitio web quedó operacional por un periodo limitado de tiempo. Los visitantes fueron recibidos con una invitación a leer cuidadosamente el libro de memorias oficial, el cual había sido publicado en parte cómo regalo a los seguidores.​ El libro incluyó un resumen de la trama y varios elementos nostálgicos. Hay un archivo del libro disponible para ver en línea, y está también disponible para descarga vía BitTorrent.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711995751/segundo%20spring/matrix/videogames/GAMEPLAY/The_Matrix_Online_PC_Games_Review_-_Video_Review_480p_30fps_H264-128kbit_AAC_ee7x7b.mp4",
    },
    {
        title: "The Matrix: Path of Neo",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711995432/segundo%20spring/matrix/videogames/matrixpon-1649611841266_ndiuk3.jpg",
        platform: "PS2 XBOX PC",
        year: "2005",
        studio: "Shiny Entertainment",
        clasification: "PEGI12",
        resume: 'The Matrix: Path of Neo es un videojuego de disparos en tercera persona, y el segundo videojuego basado en la trilogía Matrix. Los jugadores controlan al personaje Neo en niveles basados en las escenas de las películas. Fue publicado el 8 de noviembre de 2005. El juego le permite al jugador participar en varias escenas de acción en las películas. La mayoría de estas secuencias son tomadas de la primera película de la serie. Al principio, el jugador es el hacker Thomas A. Anderson, y no posee ninguna de las habilidades que el personaje descubrirá como Neo. Mientras el juego continua, el jugador aprende nuevas habilidades y técnicas, equipando a Neo para la batalla final con el Agente Smith. Entre estas habilidades se encuentran artes marciales, esquivar o detener balas, y volar. Neo también puede usar armas de corto alcance (como espadas, bastones, etc.) o armas de fuego (pistolas, rifles de asalto, ametralladoras). El juego también permite interactuar con varios personajes de las películas de los juegos, aliados y enemigos.',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711996080/segundo%20spring/matrix/videogames/GAMEPLAY/The_Matrix__Path_of_Neo_..._PS2_Gameplay_480p_30fps_H264-128kbit_AAC_oa92ga.mp4",
    },
    {
        title: "The Matrix Awakens: An Unreal Engine 5 Experience",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1711995373/segundo%20spring/matrix/videogames/the-matrix-awakens-an-unreal-engine-5-experience-20211271746_1_o7njoj.jpg",
        platform: "PS5 XSX ·",
        year: "2021",
        studio: "Epic Games",
        clasification: "PEGI12",
        resume: 'The Matrix Awakens: An Unreal Engine 5 Experience una demo técnica desarrollada por Epic Games para PlayStation 5 y Xbox Series. Para demostrar de lo que era capaz su nuevo motor gráfico Unreal Engine 5, Epic Games lanzó una espectacular demostración técnica con el universo de The Matrix como protagonista, viviendo una pequeña aventura y pudiendo explorar con libertad un mundo abierto. En diciembre de 2021 Epic Games lanzó de manera gratuita en las tiendas digitales de PS5 y Xbox Series esta demo técnica y experiencia interactiva para demostrar el poder del Unreal Engine 5, su nuevo motor gráfico, capaz de ofrecer gráficos fotorrealistas. Con Keanu Reeves como Neo y Carrie-Anne Moss como Trinity como maestros de ceremonias, tras una introducción vivimos una pequeña aventura en forma de espectacular persecución por las calles de la ciudad, una realista réplica de Nueva York, en la que tenemos que disparar a los enemigos que nos persiguen como si se tratara de un juego de disparos sobre raíles. Tras esto podemos explorar libremente a pie o en coche una ciudad recreada con todo lujo de detalles y gran realismo, con muchísimo tráfico y peatones, que demuestran la cantidad de elementos que puede llegar a mover este motor con un alto nivel de detalle. Además podemos volar y mover libremente la cámara para observar el escenario desde cualquier punto de vista, y hacer algunas modificaciones en tiempo real, como cambiar entre la noche y el día, o cambiar la densidad del tráfico y la multitud. Esta demo dejó de estar disponible el 9 de julio de 2022',
        trailer: "https://res.cloudinary.com/dqh5ovfj1/video/upload/v1711996070/segundo%20spring/matrix/videogames/GAMEPLAY/Matrix_Awakening_on_Unreal_Engine_5.._BREATHTAKING_192kbit_AAC_ozx2iq.mp4",
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allVideoGamesMatrix = await VideoGameMatrix.find();
        if (allVideoGamesMatrix.length > 0) {
            await VideoGameMatrix.collection.drop();
            console.log('Videojuegos borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Videojuegos', err);
    })
    .then(async() => {
        const VideoGamesMatrixMap = arrayVideoGamesMatrix.map((VideoGame) => new VideoGameMatrix(VideoGame));
        await VideoGameMatrix.insertMany(VideoGamesMatrixMap);
        console.log('Videojuegos insertados');
    })
    .catch((err) => {
        console.log('error insertando los Videojuegos', err);
    })
    .finally(() => mongoose.disconnect());