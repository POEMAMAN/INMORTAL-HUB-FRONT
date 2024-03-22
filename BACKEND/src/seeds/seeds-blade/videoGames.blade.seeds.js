const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const VideoGameBlade = require('../../api/models/models.Blade/videoGames.Blade.model.js');


const arrayVideoGamesBlade = [
    {
        title: "Blade",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710960091/segundo%20spring/BLADE/videogames/Blade_Play_Station_game_of4ypf.webp",
        platform: "PlayStation",
        year: "1998",
        studio: "Activision",
        clasification: "PG13",
        resume: "Blade es un videojuego de terror de PlayStation basado en la primera película del mismo nombre. Dado el éxito que tuvo la primera película en 1998, dos años después, en noviembre de 2000, se lanza algo tarde para la PlayStation el primer juego del caminante diurno Blade. Fue desarrollado por Hammerhead, distribuido por Proein y producido por Activision. Si bien los personajes principales tienen la misma apariencia que en la primera película, la historia no tiene absolutamente nada que ver con el juego. Seguramente la trama estará basada en los cómics hechos por Marvel. En esta aventura, Blade (con la ayuda de su mentor y amigo Abraham Whistler), debe acabar con la raza de vampiros que acechan en el mundo, como de costumbre. Además, aparecerán viejos y recordados enemigos del cómic como Dragonetti y Mannheim. Con una gran calidad gráfica y jugabilidad que deja algo que desear, Blade es un videojuego que impresiona, pero que no es destacado. Nuestro objetivo es poder aniquilar a todos los vampiros que se crucen por nuestro camino en una vista en tercera persona. Algo brusca, por cierto. Teniendo en cuenta las carencias técnicas que demuestra la PlayStation al generar entornos 3D, se encuentran en un buen nivel, con sus inevitables pixelaciones. Sin embargo, nada más empezar a jugar se puede apreciar una gran fluidez y suavidad en los movimientos del personaje. Los escenarios son muy oscuros, teniendo en cuenta que se trata de un juego de vampiros, intercalando escenarios exteriores, como las calles, e interiores, como guaridas de vampiros, subtes, y alcantarillados de un estilo gótico.Algo que también llama la atención es que el juego no tiene intros con secuencias de vídeo FMV, sino que la intro y las escenas intermedias que ayudan a seguir la trama, están generadas por el juego en tiempo real. La gran violencia que hay en el juego destaca mucho también. Cada vez que se mata a un enemigo, deja un gran charco de sangre en el suelo, y cuando apuntamos a la cabeza queda sangre en las paredes o el techo. Además, en casi todos los tramos del juego, los escenarios tienen bastantes cuerpos mutilados y descuartizados con todo y sangre, transformando el juego en un manantial de sangre y vísceras.",
    },
    {
        title: "Blade II",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710960083/segundo%20spring/BLADE/videogames/blade-2-2016108214032_1_kskjlw.jpg",
        platform: "PlayStation Y Xbox",
        year: "2002",
        studio: "Activision",
        clasification: "PG13",
        resume: 'Blade II es un videojuego de acción beat em up de 2002 desarrollado por Mucky Foot Productions y publicado por Activision para PlayStation 2 y Xbox. Originalmente programado para su estreno en Norteamérica el mismo día que el estreno en cines de la película de 2002 del mismo nombre (22 de marzo), finalmente se estrenó el 3 de septiembre, el mismo día en que se estrenó la película el DVD.El juego no es una adaptación directa de la película, sino que en realidad es una secuela, que tiene lugar entre los eventos de Blade II y Blade: Trinity. Ambientada seis meses después de los eventos de la película, sigue a Blade y Whistler mientras intentan evitar que los vampiros creen una raza de supervampiros incluso más poderosos que los Reapers.Los desarrolladores defendieron el juego como la introducción de un nuevo tipo de combate cuerpo a cuerpo nunca antes visto en los videojuegos. Sin embargo, a la mayoría de los críticos no les gustó el sistema, y el juego en su conjunto recibió críticas principalmente negativas tanto en PlayStation 2 como en Xbox. El juego también fue un fracaso comercial, vendiendo menos de medio millón de unidades en ambas plataformas. Blade II tiene lugar seis meses después de los eventos de la película, con Blade habiendo vencido a Nomak y los Reapers.​El juego comienza con Blade (con la voz de Tom Clark) y Whistler (Don Delciappo) recibiendo información de que se está produciendo un intercambio de sangre entre un equipo de la mafia y un clan de vampiros en el estacionamiento de Karkov Towers, un bloque de pisos de varias empresas y posible casa segura para vampiros. Blade llega justo a tiempo para ver el intercambio, con un vampiro de traje que desaparece en la torre con un maletín. Según Whistler, el maletín contiene un frasco de ADN y debe recuperarse. Blade se abre camino hacia la torre a través del estacionamiento subterráneo, y luego pasa por el club nocturno "Exploitika" antes de destruir la mainframe computer de una compañía dirigida por vampiros llamada Nth Phase. Finalmente, encuentra al vampiro con el maletín, quien revela que el ADN es en realidad el de Damaskinos, antiguo señor supremo de la Nación Vampiro, y un secuenciador de ADN actualmente está desentrañando el ADN. Blade es capaz de destruir la máquina y luego se encuentra con Whistler en el techo. Whistler le da un bote de veneno, que Blade coloca en el sistema de ventilación, matando a todos los vampiros en el edificio.Sin embargo, al regresar a su base, Blade y Whistler descubren que su aliado, el Dr. Grant (Kate Magowan) ha sido secuestrado por el clan de vampiros Byron. Siguiendo su señal GPS conduce a una estación de metro donde Blade se abre camino a través de los vampiros hacia las alcantarillas, donde se le une Whistler, quien coloca una serie de bombas. Blade detona los explosivos y sigue las alcantarillas hasta el asilo Gaunt Moor, donde los Byron se han llevado a Grant. Blade la rescata y ella explica que los vampiros están torturando a los humanos para capturar la "energía oscura", un experimento que han llamado "Proyecto: Vorpal". Blade la escolta fuera del edificio y regresa para investigar a Vorpal. Descubre que los vampiros están usando la energía oscura para intentar crear un guerrero súper vampiro mucho más fuerte que incluso un segador. Sin embargo, Blade puede destruir la cámara de incubación y Grant luego revela que el clan Arcan está realmente detrás del proyecto, no los Byrons.Blade se dirige a la base de la montaña del Arcan. Se infiltra en la instalación y destruye las cámaras de almacenamiento de energía oscura. Luego se encuentra con Grant, a quien acompaña al receptor de energía oscura. Sin embargo, antes de que pueda desconectarlo, se ve atrapada en una explosión. Mientras muere, le dice a Blade que debe destruir el núcleo. Se dirige hacia allí y se encuentra con Whistler, quien coloca una serie de bombas. El dúo huye de la base y desencadena las explosiones, destruyendo el núcleo y poniendo fin al Proyecto: Vorpal.',
    },
    {
        title: "Blade Trinity",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710960099/segundo%20spring/BLADE/videogames/6e9a45a9dc1b09a9a7d9fe614512dccc_hcgp9q.jpg",
        platform: "	BREW, J2ME",
        year: "2004",
        studio: "Blue Beck",
        clasification: "PG13",
        resume: 'Blade: Trinity es un videojuego de acción basado en la película del mismo nombre desarrollado por Blue Beck y publicado por Mforma para teléfonos móviles con BREW y J2ME. Fue lanzado el 16 de diciembre de 2004. Blade: mitad humano, mitad vampiro y un temido cazador de vampiros. Debe rastrear a los humanos que colaboran con los vampiros y luego enfrentarte a las criaturas con su pandilla Nightstalkers: cazadores de vampiros humanos. El líder vampiro Danica ha resucitado a Drake, el vampiro original, y planean usar su sangre para hacer que todos los vampiros sean inmunes a la luz del día. Blade está encerrado porque ha matado a un humano disfrazado de vampiro. Pronto descubre que sus interrogadores, el Jefe Reede y el Dr. Vance, son esclavos de los propios vampiros.Después de recopilar información en la estación de policía y el laboratorio del Dr. Vance, persigue a Drake por los tejados y finalmente se encuentra con él en las Torres Fénix. La acción se muestra con una perspectiva isométrica mientras Blade se mueve por diferentes ubicaciones. Al comienzo del juego, Blade solo puede golpear a los guardias, pero los miembros del equipo Abigail y Hannibal King proporcionan nuevas armas: una pistola con balas de plata, una espada y un arma arrojadiza. No todas las armas funcionan igual de bien con todos los enemigos, por lo que se tienen que usar estratégicamente. La salud se puede reponer con jeringas esparcidas. Para progresar, a menudo es necesario encontrar terminales de computadora para desbloquear las puertas. Estas entradas también se pueden bloquear con muebles para obstaculizar la entrada de enemigos. Un minimapa en la esquina superior izquierda muestra su posición y objetivos en todo momento.',
    },
    {
        title: "Blade Marvel",
        picture: "https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710960171/segundo%20spring/BLADE/videogames/maxresdefault_vypmi0.jpg",
        platform: "Todas",
        year: "2025",
        studio: "Bethesda",
        clasification: "PG13",
        resume: "Mitad vampiro, mitad mortal y con el toque ganador de una Akane Lyon imparable. La nueva superproducción de Marvel a través de los videojuegos es Marvel's Blade, un título de acción y aventura en tercera persona para un solo jugador en el que el implacable cazador de vampiros purgará la Ciudad de las Luces de chupasangres y criaturas de la oscuridad. A su modo y sin sutilezas, faltaría más. El antihéroe de los cómics creado por Marv Wolfman y Gene Colan se pone en manos de los creadores de Dishonored o Deathloop, consolidando las cada vez mejores relaciones entre Bethesda, Xbox y Disney. Una alineación de titanes a las que les debemos el regreso de Indiana Jones a los videojuegos y, en el proceso, auguran de manera sistemática su llegada al Game Pass. Eso solo de entrada.Porque Blade es un personaje realmente interesante. Tanto a la hora de ser comparado con otros superhéroes más allá del papel, como frente a ese extenso legado de cazavampiros en los videojuegos que va de Castlevania a Devil May Cry. Entre otras cosas, porque Eric Brooks, la persona tras las gafas de sol, se presta demasiado bien a combinar lo que ya sabemos de nos gusta de los  juegos de acción con una genuina sed de sangre que, todo sea dicho, los grandes personajes de los cómics de Marvel tratan de evitar. Pero eso no significa que no haya margen para las sorpresas: en Marvel's Blade no iremos ni a la muy transitada Nueva York de Spider-Man y los Vengadores, ni tampoco a otra reimaginación de la Europa profunda en la que acabaremos con el cuero de nuestra chaqueta lleno de hojas marchitas y pelos de hombres lobo: en Akane Lyon barren para casa y ambientarán su próximo juego en una París en cuarentena, pero llena de posibilidades. Una metrópolis con la que el propio Blade compartirá protagonismo.Una base demasiada prometedora como para mirar a otro lado. Precisamente por ello, en VidaExtra te hemos reunido en un mismo sitio toda la información sobre Marvel's Blade, empezando por lo verdaderamente esencial: cuándo y dónde se podrá jugar a la próxima gran caza de vampiros de Marvel.",
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