const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterHarryPotter = require('../../api/models/models.Alien/characters.Alien.model');

const arrayCharactersAlien = [{
        name: "Ellen Ripley",
        actor: "Sigourney Weaver",
        profession: "Suboficial de Vuelo del Nostromo",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/1bc9ad6bba2439e00dac5ab33504d2e0/manage?view_mode=mosaic&context=manage",
        resume: "Ellen Louise Ripley es el personaje principal de la saga de ciencia ficción Alien, protagonizado por la actriz estadounidense Sigourney Weaver. El personaje es considerado como uno de los mejores en la historia del cine además de haber sido revolucionario en desafiar los roles de género tradicionales, en particular en los géneros de ciencia ficción, acción y terror. El personaje también es el rol más memorable protagonizado por Weaver hasta la fecha. Por su rol como Ellen Ripley en Aliens, Weaver fue nominada a un premio de la Academia como mejor actriz, considerado hoy en día como un punto trascendental para la ciencia ficción, en un momento cuando Hollywood daba poca importancia al género. Por su actuación en esa misma película, Weaver también recibió nominaciones a un premio BAFTA, un Globo de Oro, y cuatro Premios Saturn, ganando uno de ellos."
    },
    {
        name: "Xenomorfo",
        actor: "Varios",
        profession: "Extraterrestre",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/f307a931769e4042b8344c1a1cbdd6a2/manage?view_mode=mosaic&context=manage",
        resume: "El xenomorfo, también conocido como Alien o Alienígena, es un ser antropomorfo extraterrestre y parasitoide ficticio, antagonista de la franquicia cinematográfica de la serie Alien. Tiene apariciones en precuelas, secuelas, cómics, novelas, videojuegos y crossovers como Alien vs. Depredador"
    },
    {
        name: "David 8",
        actor: "Michael Fassbender",
        profession: "Mayordomo",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/015cd48936ac91441fce93ffdbd41659/manage?view_mode=mosaic&context=manage",
        resume: "Introducido por primera vez en la precuela, Prometheus (2012), David es un androide que sirve como mayordomo, hombre de mantenimiento e hijo sustituto de su creador, Peter Weyland, fundador de Weyland Corporation. Mientras ayuda a sus compañeros humanos en su expedición interestelar a conocer a sus creadores —Los Ingenieros extraterrestres— David está obsesionado con el concepto de crear vida propia. Al morir Peter Weyland, David es liberado de la servidumbre, lo que le permite llevar a cabo sus experimentos para diseñar xenomorfos."
    },
    {
        name: "Elizabeth Shaw",
        actor: "Noomi Rapace",
        profession: "Arqueóloga",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/580dfd0f3ccaae748114f9c4eac2d906/manage?view_mode=mosaic&context=manage",
        resume: "Shaw, una joven de ascendencia británica, contextura delgada y fragil , fue criada desde la infancia en Sudáfrica por su padre, un misionero, después de que su madre muriera por causas desconocidas. Años más tarde, también perdió a su padre después de que él contrajera el virus del Ébola. Shaw era una especie de niño prodigio, ya que se graduó de la Universidad de Oxford a la edad de 17 con doctorados en paleontología, arqueología, mitología humana y mimética."
    },
    {
        name: "Carter J. Burke",
        actor: "Paul Reiser",
        profession: "Director de Proyectos Especiales de la División de Servicios Especiales de Weyland-Yutani (Space) Corp",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/67a671e660a45a3b2312060c9f0f633b/manage?view_mode=mosaic&context=manage",
        resume: "Carter J. Burke era un ejecutivo empleado por la Corporación Weyland-Yutani, que se desempeñaba como Director de Proyectos Especiales de la División de Servicios Especiales de Weyland-Yutani (Space) Corp. Él se desempeñó como enlace con Ellen Ripley después de que ella fue rescatada del espacio profundo en 2179. Más tarde, Burke acompañó a un pelotón de Marines Coloniales a bordo del USS Sulaco hasta LV-426, la luna donde Ripley se encontró por primera vez con la especie Alien, para investigar la pérdida de contacto con la colonia de Hadley's Hope."
    },
    {
        name: "Hicks",
        actor: "Michael Biehn",
        profession: "Sargento de la Corporación Colonial de Marines",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/54df359b39b9d4953a51e4965579c087/manage?view_mode=mosaic&context=manage",
        resume: "El cabo Dwayne Hicks era miembro de la rama militar USCMC (Cuerpo de Marines Coloniales de los Estados Unidos) que se desplegó en la luna LV-426 a bordo del USS Sulaco para investigar la repentina pérdida de contacto con los colonos. Hicks fue uno de los marines coloniales más exitosos en el servicio"
    },
    {
        name: "Ash",
        actor: "Ian Holm",
        profession: "Androide",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/2becba85c0811417091ba9f1748a1dcc/manage?view_mode=mosaic&context=manage",
        resume: "Ash era un modelo sintético 120-A/2 de Hyperdyne Systems que fue creado para Weyland-Yutani a principios del siglo XXII. Más tarde, Ash fue intecambiado en nómina del USCSS Nostromo por la compañía para supervisar una misión de recuperación específica, reemplazando así a otro oficial científico de esa nómina dos días antes de que el Nostromo partiera de Thedus."
    },
    {
        name: "Newt",
        actor: "Rebecca Jorden",
        profession: "Superviviente",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/7bc802c99d15df3830365c250fcd8d45/manage?view_mode=mosaic&context=manage",
        resume: "Rebecca Jorden, más conocida por la mayoría como Newt; era una colona que vivía con su familia en el asentamiento Hadley's Hope en LV-426 y la única sobreviviente de la infección Alien de esa colonia. Ella fue descubierta escondida en un sistema de ventilación por el equipo de USCMC que fue enviado a Acheron para investigar una pérdida de comunicaciones ante la luz del informe de Ellen Ripley sobre el planeta."
    },
    {
        name: "Charles Bishop Weyland",
        actor: "Lance Henriksen",
        profession: "Fundador de la Compañía Weyland Industries",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/a658261e9a8cf8fd3c8d61ccd1c832c3/manage?view_mode=mosaic&context=manage",
        resume: "Bishop era un miembro de la tripulación sintético que asistía al Cuerpo de Marines Coloniales, desempeñándose como oficial ejecutivo y participó en la misión del USS Sulaco a la colonia de LV-426 para investigar la pérdida de contacto"
    },
    {
        name: "Janek",
        actor: "Idris Elba",
        profession: "Capitán del USCSS Prometheus",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/861d3a0c29ae11bd97f2bc7ec529169b/manage?view_mode=mosaic&context=manage",
        resume: "Janek no está interesado en lo que contienen las cúpulas, pero sí se preocupa por la seguridad de las personas a bordo. Después de descubrir qué pueden hacer el patogeno dentro de las urnas, le dice a Shaw que se asegure de que no se devuelva nada a la Tierra, mientras que acepta la sugerencia de Shaw de que si ella falla, él también hará cualquier cosa por su parte para hacerlo. Una vez que Shaw advierte al USCSS Prometheus que el Ingeniero ha puesto en marcha su nave y con rumbo a la Tierra para matar a todos los humanos, Janek se sacrifica al estrellar a Prometheus contra la nave alienígena, deteniéndola con éxito. Sus copilotos deciden quedarse a bordo con él incluso después de que les dice que vayan a las cápsulas de escape, demostrando su lealtad mientras caen juntos. Janek parecía disfrutar tocando su acordeón y cantando viejas canciones de Steve Stills. Es posible que también se haya acostado con Vickers después de preguntarle intrigadp si ella era un robot."
    },
    {
        name: "Predator",
        actor: "Kevin Peter Hall",
        profession: "Extraterrestre",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/5328235b45f1a3a127ee5fb88e89d311/manage?view_mode=mosaic&context=manage",
        resume: "Físicamente son de forma humanoide, pero de mayor altura que el ser humano y con un cráneo muy diferente, ya que su cabeza posee ojos pequeños con esclerótica de color negro e iris de color verde, rojo o amarillo, capaces de ver solamente en el espectro de luz infrarroja y ultravioleta, una nariz que consta de unas hendiduras, boca con enormes mandíbulas cruciformes móviles, un oído bastante desarrollado y fuerza superior a la humana. Su visión natural se basa en la percepción termográfica, pero poseen tecnología para optimizar su espectro visual y también ver los distintos espectros de luz y calor del medio en que se encuentran. Son capaces de adaptarse a la atmósfera de la Tierra hasta una semana, más si disponen de aparatos para respirar. Su sangre está basada en el carbono y tienen una capacidad parcial para neutralizar el ácido de xenomorfo. Su vida también es más larga, ya que tienen la capacidad de aumentar el tiempo de vida humano. La mayoría de su cuerpo es puro músculo, pudiendo soportar un duro castigo físico. Poseen una estructura corporal relativamente fornida debido a su actividad y dieta. Tienen garras negras y fuertes. En lugar de cabello poseen una corona de conductos capilares de superficie lisa, gruesos en su parte superior, disminuyendo en los extremos hasta terminar en punta. Estos conductos van de una sien a otra a la altura de la nuca, varían de color y forma según la edad y raza. Tienen la función de regular el calor corporal del individuo debido que a través de ellas circula sangre, controlando el calor según sea la temperatura, alta o baja. La piel es generalmente de tonos verdes, claros u oscuros dependiendo de la zona, acompañada de escamas de color café, negras o verdes. Manos similares a las de los humanos, excepto porque los dedos acaban en garras. Pies con cinco dedos con talón a modo de espolón y su sangre es de color verde fosforescente. Los machos de la especie son más altos y más fuertes que las hembras, con las glándulas mamarias menos desarrolladas y de menor tamaño. Las hembras emiten un almizcle al estar en celo estrogénico. Se dedican a criar y educar a sus hijos en el arte de cazar, aunque ellas normalmente no cazan, salvo en raras excepciones. Según se puede apreciar en la película Predators, uno de los Depredadores está maniatado por otros, los cuales, posiblemente pertenezcan a la casta de los Mala Sangre, casta que es considerada criminal entre la sociedad Yautja."
    },
    {
        name: "Frost",
        actor: "Ricco Ross",
        profession: "Soldado del Cuerpo de Marines Coloniales de los EEUU",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/8ffaeaec81b2500211b8c081333bc68d/manage?view_mode=mosaic&context=manage",
        resume: "El soldado Frost era miembro de Cuerpo de Marines Coloniales de los Estados Unidos, asignado a bordo del USS Sulaco. En 2179 formó parte del pelotón de Marines enviados para una misión de rescate a la colonia terraformadora Hadleys Hope propiedad de Weyland-Yutani ubicada en LV-426."
    },
    {
        name: "Dallas",
        actor: "Tom Skerritt",
        profession: "Comandante Jefe del USCSS Nostromo",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/e6060e4b3da9011cfe0e2d251d423361/manage?view_mode=mosaic&context=manage",
        resume: "Dallas, como toda la tripulación del USCSS Nostromo, fue despertado del hipersueño por MOTHER con el propósito de investigar la señal de socorro y (presumiblemente) enviarle a Ash sus órdenes especiales (aunque él no tenia mayores conocimientos sobre la orden). Más tarde convocó a una reunión de la tripulación para informarles de la señal de socorro. Aunque siguió la orden, pareció muy irritado por el desvío. Dallas fue parte del grupo de desembarco del Nostromo que, al reaccionar a una señal de socorro procedente de Acheron, abandonó el barco para investigar la fuente de la señal. Lambert y él se contuvieron mientras Kane investigaba la bodega de la nave espacial abandonada y su cargamento. Luego ayudó a Lambert a llevar a Kane, tras ser atacado por el Abrazacaras, al ascensor del Nostromo y a la esclusa de aire. Mostró cierta preocupación por Kane, aunque este pudo haber sido su propio deseo de regresar al Nostromo y entrar debido al clima. De cualquier manera, Ash dejó entrar al trío, mientras que Dallas y Ash investigaron al Abrazacaras adherido al rostro de Kane e intentaron removerlo. Con su irritación finalmente en su punto máximo, hizo que lanzaran el Nostromo antes de que pudieran completarse todas las reparaciones. Después de que nació el Quebrantapecho desde el interior de Kane, Dallas organizó una partida de búsqueda que terminó con la captura de Brett. No dispuesto a dejar morir a otro compañero de tripulación, Dallas decidió intentar forzar al Alien a entrar en la esclusa de aire a través de los conductos de ventilación. Dallas y la tripulación intentan por primera vez capturar al Alien y lanzarlo al espacio a través de una esclusa de aire. Este primer intento resultó en la captura/muerte de Brett en la cubierta C y el conocimiento de que el Alien estaba usando los conductos de aire para esconderse y movilizarse a traves de todo el navio. Dallas decidió intentar expulsarlo de los conductos de aire directamente a la esclusa de aire y soplarlo al espacio. Antes de entrar en los conductos de aire, accedió a la computadora central, revelando indirectamente su nerviosismo por intentar capturar al Alien"
    },
    {
        name: "Queen Alien",
        actor: "Various",
        profession: "Extraterrestre",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/7c1217592fd29ac3f46c339e8eae72b7/manage?view_mode=mosaic&context=manage",
        resume: "La Reina (inglés: Queen) es la matriarca de una Colmena de Aliens, que actúa como madre y líder de su prole. La Reina generalmente se encuentra en lo profundo de la Colmena, dando a luz a huevos para asegurar la expansión de la Colmena, mientras que sus Drones y Soldados la protegen y cazan las presas que se le presentan. Las Reinas Aliens individuales varían en tamaño, edad y apariencia."
    },
    {
        name: "Vasquez",
        actor: "Jenette Goldstein",
        profession: "Operadora de Armas del cuerpo de marines de los EEUU",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/ce8cb28e3a9dd078da35b89d20f975f2/manage?view_mode=mosaic&context=manage",
        resume: "La soldado de primera clase Vasquez era una operadora de armas inteligentes en el Cuerpo de Marines Coloniales de los Estados Unidos. En 2179 formó parte del pelotón de Marines enviados a bordo del USS Sulaco en una misión de rescate a la colonia terraformadora propiedad de Weyland-Yutani, Hadley's Hope en LV-426. Vasquez era una buena amiga de su compañero de artilleras inteligentes Drake."
    },
    {
        name: "Parker",
        actor: "Yaphet Kotto",
        profession: "Ingeniero de Nostromo",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/4763e302444937d23d118c4e3364354b/manage?view_mode=mosaic&context=manage",
        resume: "Dennis Monroe Parker era el ingeniero principal a bordo de la nave de remolque comercial USCSS Nostromo. Él sirvió en la nave durante su viaje fatídico en el 2122 cuando encontró un Xenomorfo en LV-426, un incidente que condujo a la eventual destrucción de la nave y a que solamente uno de su equipo sobreviviera. Parker fue asesinado por el Alien mientras acumulaba tanques de oxígeno que le permitirían a los sobrevivientes huir del Nostromo en su transbordador, el Narciso."
    },
    {
        name: "Christopher Oram",
        actor: "Billy Crudup",
        profession: "Oficial ejecutivo y director científico de la nave USCSS Covenant",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/5e9b5d7d4b296444d67e1c8a74d51b53/manage?view_mode=mosaic&context=manage",
        resume: "Christopher Chris Oram era el oficial ejecutivo y director científico de la nave colonial USCSS Covenant de la Corporación Weyland-Yutani y el marido de la bióloga de la nave Karine Oram. Oram fue ascendido a capitán tras un grave incidente que afectó a Covenant al año de su viaje, y tomó una fatídica decisión por la que la nave fue desviada de su destino original, Origae-6, a un mundo misterioso. Su decisión provocó indirectamente la pérdida de la mayor parte de su tripulación, y encontró su propio final a manos del pícaro sintético David"
    },
    {
        name: "Lex Woods",
        actor: "Sanaa Lathan",
        profession: "Técnica medioambiental",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/a61b6b268256fc32d24713d6eccfba08/manage?view_mode=mosaic&context=manage",
        resume: "Alexa Woods era una técnica medioambiental que participó en una expedición de Industrias Weyland a Bouvetøya, en la Antártida, para investigar una antigua pirámide enterrada bajo el hielo en 2004. Se descubrió que la Pirámide era un coto de caza Yautja donde los Depredadores criaban Xenomorfos para utilizarlos en sus Cacerías, y la expedición pronto se vio envuelta en la batalla entre las dos especies.Lex fue el único superviviente del incidente y se ganó el respeto de uno de los yautja de la pirámide, Scar, con el que formó una especie de alianza y ayudó a derrotar a la reina xenomorfa"
    },
    {
        name: "Call",
        actor: "Winona Ryder",
        profession: "Agente secreto de Auton",
        picture: "https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71f231cac894c79c70e15eb21453344f6/asset/fd38c05b7f2ac3a7f57cf519c745fe86/manage?view_mode=mosaic&context=manage",
        resume: "Annalee Call (mejor conocida simplemente como Call) era un agente secreto de Auton a bordo de la Betty que recibió órdenes de matar a Ripley 8 antes de que la joven Reina que se gestaba dentro de ella pudiera ser removida. Ella llegó demasiado tarde y estuvo a punto de provocar la muerte de toda la tripulación de la Betty cuando el general Perez, el oficial al mando del USM Auriga, acusó a la tripulación de la Betty de ser terroristas y amenazó con ejecutarlos."
    }
];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersAlien = await CharacterAlien.find();
        if (allCharactersAlien.length > 0) {
            await CharacterAlien.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersAlienMap = arrayCharactersAlien.map(
            (character) => new CharacterAlien(character)
        );
        await CharacterAlien.insertMany(charactersAlienrMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());