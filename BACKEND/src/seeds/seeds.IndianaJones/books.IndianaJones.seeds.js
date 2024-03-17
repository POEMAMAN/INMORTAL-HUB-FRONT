const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookIndianaJones = require('../../api/models/models.IndianaJones/books.IndianaJones.model');


const arrayBooksIndianaJones = [{
        title: 'Indiana Jones y el Arca Perdida',
        publication_year: 1981,
        saga_index: 1,
        author: 'Jack Campbell',
        resume: 'Indiana Jones, profesor de arqueología y aventurero, ha desenterrado muchos tesoros antiguos. Pero ahora el futuro del mundo depende de que encuentre una reliquia especial: el Arca de la Alianza, el pecho adornado que contiene los Diez Mandamientos. Con su fiel látigo en la mano y su hermosa ex amante a su lado, Jones viaja de Nepal a El Cairo al Mediterráneo, esquivando venenos, trampas y serpientes, burlando a los nazis, y luchando contra rivales viejos y nuevos, todo en busca de un antiguo artefacto rumoreado para dar un poder invencible a su poseedor. Es una batalla hacia el sorprendente final, un final dictado por la magia, la luz y el glorioso poder del Arca perdida.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519425/IndianaJones/Books/INDIANA_JONES_EN_BUSCA_DEL_ARCA_PERDIDA_hxmctc.jpg',
    },
    {
        title: 'Indiana Jones y el Templo Maldito',
        publication_year: 1985,
        saga_index: 2,
        author: 'James Kahn',
        resume: 'La hora es 1935. A través de una serie de desventuras en Shanghai, y un escape estrecho de la muerte, Indiana Jones se encuentra en un pueblo remoto en la India. Un viejo chaman misterioso le dice que su llegada ha sido prevista, y que él y sus compañeros están destinados a salvar a los aldeanos.Así comienza la búsqueda más atrevida, oscura y peligrosa de la carrera de Indiana Jones..',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519427/IndianaJones/Books/INDIANA_JONES_Y_EL_TEMPLO_MALDITO_q1b6jy.jpg',
    },
    {
        title: 'Indiana Jones y la ultima Cruzada',
        publication_year: 1989,
        saga_index: 3,
        author: 'Rob Mcgregor',
        resume: 'Es la época de 1930.Indiana Jones nunca ha tenido problemas para encontrar problemas, pero ahora ha aterrizado en la situación más mortal imaginable. Debe rescatar a su padre, el eminente profesor Dr. Henry Jones, de las garras de los nazis para evitar que descubran secretos que solo el Dr. Jones posee, secretos que podrían revelar la ubicación del Santo Grial.La peligrosa carrera está a punto de salvar a su padre y recuperar la reliquia más extraordinaria de todos los tiempos, y para evitar que los nazis y los rivales tortuosos del Dr. Jones la encuentren primero',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519425/IndianaJones/Books/INDIANA_JONES_EN_BUSCA_DEL_ARCA_PERDIDA_hxmctc.jpg',
    },
    {
        title: 'Indiana Jones y la danza de los gigantes',
        publication_year: 1991,
        saga_index: 4,
        author: 'Rob McGregor',
        resume: 'Año 1925, el doctor Henry Jones Jr., más conocido como Indiana Jones, consigue su puesto de trabajo como profesor en la Facultad de Arqueología de la Universidad de Londres. En una de sus clases conoce a una atractiva estudiante escocesa, Deirdre Campbell. Es la alumna más inteligente del curso; Indiana pronto se da cuenta de que la chica sabe más de lo que dice saber, mucho más allá del temario del curso. Cuando llega la fecha de presentar los temas de los trabajos del fin de cuatrimestre, la muchacha le sorprende la hipótesis hecha por Deirdre: Merlín (de las leyendas arturianas) existió de verdad y vivió en una cueva cerca del pueblo donde vivió antes la estudiante. Para demostrar esto, ella, su madre que es la directora de la facultad, e Indiana se dirigen al dicho pueblo para empezar trabajos arqueológicos. Sus esfuerzos se verán obstaculizados por una secta druida cuyo líder quiere hacerse con el puesto de primer ministro.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519418/IndianaJones/Books/INDINAA_JONES_Y_LA_DANZA_D_E_LOS_GIGANTES_fsqvjl.jpg',
    },
    {
        title: 'Indiana Jones y el peligro en Delfos',
        publication_year: 1991,
        saga_index: 5,
        author: 'Rob McGregor',
        resume: 'El libro empieza en el año 1920 con el joven Indiana Jones en su etapa universitaria, en Chicago.Después de las escenas retrospectivas de la vida universitaria del joven Indy, la acción se traslada al año 1922. Jones se encuentra en París estudiando lingüística y arqueología griega. Un día recibe una invitación de una profesora suya, Dorian Belecamus, de ir con ella a Grecia para investigar una inscripción en griego antiguo recién descubierta después de un terremoto acontecido en Delfos, lugar del templo del famoso oráculo.El protagonista acepta la invitación de su profesora, sin saber tener consciencia del peligro que supone eso, ya que en Grecia a Dorian la espera una orden secreta que pretende revivir la antigua tradición del oráculo de Delfos.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710446993/IndianaJones/Books/INDINANA_JONES_Y_EL_PELIGRO_DE_DELFOS_iyx3mk.jpg',
    },
    {
        title: 'Indiana Jones and the Genesis Deluge ',
        publication_year: 1992,
        saga_index: 6,
        author: 'Rob McGregor',
        resume: 'Después de un año de vida tranquila enseñando arqueología celta, Indiana Jones está tentado de volver a una vida de peligro y aventura cuando un médico ruso lo recluta para unirse a una expedición en busca del Arca de Noé. Original.. NOTA: El libro no está en español, sino en inglés.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710542454/IndianaJones/Books/Indiana_Jones_and_the_Genesis_Deluge_csv7lv.jpge',
    },
    {
        title: 'Indiana Jones and the Interior World',
        publication_year: 1992,
        saga_index: 7,
        author: 'Rob McGregor',
        resume: 'Un extraño misterio conecta las estatuas moai susurrantes de la isla de Pascua con el misterioso barco fantasma de la isla de Chiloé, llevando a Indiana Jones en una peligrosa búsqueda en un mundo interior oculto. Indy causó accidentalmente un desequilibrio entre los dos mundos cuando se deshizo de una reliquia legendaria pero peligrosa. Ahora, el líder de un ejército imparable usa este artefacto para entrar en nuestro mundo y para una alianza mortal con una fuerza aún más oscura...Durante siglos el hombre ha contado historias de una tierra hueca, o un inframundo, poblado por una raza misteriosa y personajes extraños. A veces describiendo un inframundo de la muerte, a veces otra dimensión, estas historias hablan de sirenas, naves fantasmas...y un equilibrio cósmico que debe ser restaurado para que los poderes dentro de marcha para conquistar el mundo exterior, y solo Indiana Jones tiene la clave!.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710542694/IndianaJones/Books/Indiana_Jones_and_the_Interior_World_mxxun3.jpg',
    },
    {
        title: 'Indiana Jones y el Legado del UNicornio',
        publication_year: 1992,
        saga_index: 8,
        author: 'Rob McGregor',
        resume: 'En el laberinto de un complejo de cavernas paleolíticas, Indy Jones encuentra referencias a una bestia mitológica que pudo haber existido hace veinte mil años, y cinco años después el Dr. Jones se enfrenta a la leyenda de nuevo, y la mujer que espera encontrar el legendario cuerno de unicornio. Pero también lo es otra persona del pasado de Indy, un hombre que no se detendrá ante nada para obtener la antigua reliquia.Algunos dicen que el cuerno del unicornio vino de un animal extinguido por el Gran Diluvio. Otros dicen que el cuerno es un antídoto eficaz para el veneno y una reliquia mística. Indy descubre que el poder del cuerno es menos que benévolo, y lo mismo podría decirse de las intenciones de cierto historiador de arte hermoso.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710542835/IndianaJones/Books/71AHUYmosKL._SL1200__jpbpie.jpg',
    },
    {
        title: 'Indiana Jones y el los huevos de Dinosaurio',
        publication_year: 1996,
        saga_index: 9,
        author: 'Max Mcoy',
        resume: 'Recién salido de un viaje en un submarino nazi, Indiana Jones es persuadida por un hermoso misionero para buscar a su padre desaparecido en Mongolia. El profesor Angus Starbuck ha descubierto un hueso de dinosaurio en el desierto de Gobi. ¡Pero a diferencia de otros descubrimientos, este hueso no es antiguo! Mientras Indy cruza desde China a través de un traicionero paso montañoso hasta Mongolia Exterior, se enfrenta a los más feroces señores de la guerra de la región. Mientras tanto, las últimas personas inocentes del mundo, que habitan en un paraíso de la Edad de Piedra, están al borde de la destrucción. De repente, Indiana Jones está batiéndose en duelo con perros salvajes y asesinos sedientos de sangre en un esfuerzo desesperado por salvar el descubrimiento más histórico del siglo XX: ¡el último Triceratops viviente!',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710542944/IndianaJones/Books/71I5z2cL9qL._SL1200__jirodz.jpg',
    },
    {
        title: 'Indiana Jones y the seven veils',
        publication_year: 1991,
        saga_index: 10,
        author: 'Andrew Helfex',
        resume: 'Having barely survived a hair-raising archaeological dig in Tikal, Guatemala, Indiana Jones has returned to New York just in time to get caught up in a controversy. The mysterious writings of Colonel Percy Fawcett, a missing British explorer, have turned up, and what they describe could revolutionize history—and make or break several scientific reputations. For Percy paints a tantalizing picture of a lost city in the Brazilian jungle and a mythical red-headed race who may be the descendants of ancient Celtic Druids....No one loves mystery or adventure more than Indiana Jones. So with his trusty bullwhip in hand an the lovely Deirdre Campbell firmly in tow, he sets out for the wilds of the Amazon. But Indy has more enemies that he knows, including a bunch of hard-nosed thugs and a cannibalistic Indian tribe who are out to make him instant history. And if he survives what they throw his way, there"s still the fabled city itself...where the inhabitants practice the magic of the "seven veils" and no one leaves alive!.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710543373/IndianaJones/Books/71BX3FbEzfL._SL1200__gnbse5.jpg',
    },
    {
        title: 'Indiana Jones and the Army of the Dead',
        publication_year: 2009,
        saga_index: 11,
        author: 'Steve Perry',
        resume: 'Aquí no hay descanso para el cansado cazador de tesoros, pero así es como le gusta a Indiana Jones. Fresco de espiar para los Aliados en el grueso de la Alemania de la Segunda Guerra Mundial, el arqueólogo trotamundos no necesita mucha persuasión para unirse a su cohorte "Mac" McHale en la búsqueda de uno de los artefactos más codiciados: la legendaria perla negra conocida como el Corazón de las Tinieblas. Pero los socios de la aventura no están solos en su incursión en las misteriosas selvas de Haití. Agentes alemanes y japoneses están en persecución, decididos a poseer el artefacto de ébano -- y sus secretos -- para sus propios propósitos siniestros. Y seguirlos a todos es un infame sacerdote vudú, con poderes de la ciencia diabólica y la magia negra a su disposición.En una odisea traicionera a través de la Isla de los Muertos, donde la leyenda de los zombis se cierne grandes, arañas, serpientes y trampas explosivas será el menor de los desafíos de Indy. Y capturar el premio será un juego de niños comparado con enfrentarse a un enemigo diferente a cualquier otro, cuyos números son legión y casi imposibles de matar -- porque ya están muertos...',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710519409/IndianaJones/Books/INDIANA_JONES_Y_LA_ARMADA_DE_LOS_MUERTOS_n3g9qm.jpg',
    },
    {
        title: 'Indiana Jones y la copa del Vampiro',
        publication_year: 1984,
        saga_index: 12,
        author: 'Andrew Helfex',
        resume: 'Usted e Indiana Jones están desesperados por encontrar LA COPA DEL VAMPIREIt es la Copa de Djemsheed, un tesoro medieval único. La leyenda dice que cualquiera que beba de esta copa tendrá garantizada la vida eterna. Mihail Tepes, un arqueólogo rumano, cree que la copa está enterrada en la tumba del famoso príncipe Vlad Drácula del siglo XV, la persona que inspiró las historias de Drácula el vampiro. ¡Si Drácula bebió de la copa, es posible que camine por la tierra hasta el día de hoy! Su búsqueda será complicada por muchas otras personas-algunos de ellos villanos despiadados-que no se detendrá ante nada para obtener la posesión de la cup.Right desde el principio, usted está a cargo. Dependiendo de las decisiones que tomes, podrías vagar interminablemente a través de catacumbas, conocer hombres lobo de la vida real o luchar hasta la muerte con bandidos sedientos de sangre. Cada escalón emocionante y peligroso de la forma en que las opciones son para usted como usted ENCUENTRA SU DESTINO.',
        picture: 'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710543211/IndianaJones/Books/IndianaJonesAndTheCupOfTheVampire_fnl25r.webp',
    },
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksIndianaJones = await BookIndianaJones.find();
        if (allBooksIndianaJones.length > 0) {
            await BookIndianaJones.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksIndianaJones = arrayBooksIndianaJones.map((book) => new BookIndianaJones(book));
        await BookIndianaJones.insertMany(booksIndianaJones);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());