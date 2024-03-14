const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterLordOfTheRings = require('../../api/models/models.LordOfTheRings/characters.LordOfTheRings.model');

const arrayCharactersLordOfTheRings = [{
        name: 'Bilbo Bolsom',
        actor: 'Martin Freeman',
        type: 'Hobbit',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/64057607d33173e30a8bada2524f094f/manage?view_mode=mosaic&context=manage',
        resume: 'Bilbo Bolsom es un hobbit que vivió tranquilamente en La Comarca hasta que fue reclutado por Gandalf para embarcarse en una aventura para recuperar el tesoro de los enanos en Erebor. Es famoso por haber encontrado el Anillo Único durante su viaje, lo que desencadena los eventos de El Señor de los Anillos.'
    },
    {
        name: 'Frodo Baggins',
        actor: 'Elijah Wood',
        type: 'Hobbit',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/5fa07574b9ebe93dd29575398b62cbb8/manage?view_mode=mosaic&context=manage',
        resume: 'Frodo Baggins es el sobrino de Bilbo Baggins y el portador del Anillo Único. Se embarca en una misión para destruir el Anillo en el Monte del Destino, acompañado por un grupo de compañeros, en un intento por detener a Sauron y salvar a la Tierra Media.'
    },
    {
        name: 'Samwise Gamgee',
        actor: 'Sean Astin',
        type: 'Hobbit',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/0e2f6cd7759b27beab587bd81fb53da6/manage?view_mode=mosaic&context=manage',
        resume: 'Samwise Gamgee, comúnmente conocido como Sam, es el fiel amigo y compañero de Frodo Baggins. Acompaña a Frodo en su viaje para destruir el Anillo Único y demuestra ser valiente y leal en los momentos más oscuros de su aventura.'
    },
    {
        name: 'Gandalf',
        actor: 'Ian McKellen',
        type: 'Maia',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/5ea5828001f0dee9ced012ff4b1b2bbd/manage?view_mode=mosaic&context=manage',
        resume: 'Gandalf es un poderoso mago que desciende a la Tierra Media para ayudar a combatir a Sauron y sus fuerzas. Es un guía crucial para los personajes principales y desempeña un papel fundamental en la derrota final de Sauron.'
    },
    {
        name: 'Smeagol (Gollum)',
        actor: 'Andy Serkis',
        type: 'Hobbit (transformado por la influencia del Anillo)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/826ee662ea7fed6019945b494e16f498/manage?view_mode=mosaic&context=manage',
        resume: 'Smeagol, también conocido como Gollum, fue anteriormente un hobbit llamado Smeagol que fue corrompido por el poder del Anillo Único. Después de muchos años de posesión, su personalidad se ha fracturado y ha desarrollado una obsesión enfermiza por el Anillo.'
    },
    {
        name: 'Sauron',
        actor: 'No aplicable (voz de Sala Baker)',
        type: 'Maia (transformado en forma oscura)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/7ac50e16141d4e71b936c038bb5238d9/manage?view_mode=mosaic&context=manage',
        resume: 'Sauron es el principal antagonista de El Señor de los Anillos. Originalmente un Maia, se convirtió en el Señor Oscuro después de ser corrompido por el poder del Anillo Único. Su objetivo principal es recuperar el Anillo para restaurar su antiguo poder y dominar la Tierra Media.'
    },
    {
        name: 'Saruman',
        actor: 'Christopher Lee',
        type: 'Maia (transformado en Istari - mago)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/ef02899656e35a63db3afcaeeff0e1ae/manage?view_mode=mosaic&context=manage',
        resume: 'Saruman es uno de los cinco magos enviados a la Tierra Media para ayudar en la lucha contra Sauron. Sin embargo, se corrompe por su deseo de poder y conocimiento, y se convierte en un aliado de Sauron. Intenta crear un Anillo propio, pero es derrotado por los héroes de la historia.'
    },
    {
        name: 'Legolas',
        actor: 'Orlando Bloom',
        type: 'Elfo Sindar',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/0b081bff5644a2d88f98c3a31f541686/manage?view_mode=mosaic&context=manage',
        resume: 'Legolas es un hábil arquero y guerrero elfo. Se une a la Compañía del Anillo para representar a su pueblo y luchar contra las fuerzas de Sauron. Es conocido por su destreza en el combate y su agudeza visual, así como por su amistad con Gimli, el enano.'
    },
    {
        name: 'Gimli',
        actor: 'John Rhys-Davies',
        type: 'Enano',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/453ca57bbb0298a57eaf7a70d94e6adb/manage?view_mode=mosaic&context=manage',
        resume: 'Gimli es un valiente guerrero enano de la Montaña Solitaria. Se une a la Compañía del Anillo para representar a su pueblo y luchar contra las fuerzas de Sauron. A pesar de la enemistad histórica entre elfos y enanos, forma una estrecha amistad con Legolas durante su viaje juntos.'
    },
    {
        name: 'Aragorn',
        actor: 'Viggo Mortensen',
        type: 'Dúnadan (Hombre de la estirpe de Isildur)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/1674676e2c7e70107133e06972bd6d08/manage?view_mode=mosaic&context=manage',
        resume: 'Aragorn, también conocido como Strider, es un guerrero ranger y el legítimo heredero de Gondor y Arnor. Se convierte en un líder crucial en la lucha contra Sauron, guiando a la Compañía del Anillo y reclamando su derecho al trono como Rey Elessar después de la caída de Sauron.'
    },
    {
        name: 'Theoden',
        actor: 'Bernard Hill',
        type: 'Hombre (Rey de Rohan)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/1fcf93a2e45f4b335b458be233189dee/manage?view_mode=mosaic&context=manage',
        resume: 'Theoden es el rey de Rohan durante los eventos de El Señor de los Anillos. Es un líder valiente y honorable que lucha contra las fuerzas de Sauron para proteger a su pueblo. Después de ser manipulado por Saruman durante un tiempo, se libera de su influencia y lidera a Rohan en la batalla contra el ejército de Saruman en Helm\'s Deep y más tarde en la batalla de los Campos del Pelennor.'
    },
    {
        name: 'Elrond',
        actor: 'Hugo Weaving',
        type: 'Elfo Sindar',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/39377f7ba3619773f16c72dab28b1187/manage?view_mode=mosaic&context=manage',
        resume: 'Elrond es el Señor de Rivendel y uno de los personajes más sabios de la Tierra Media. Es un sanador experto y un gran guerrero. Como miembro del Concilio de Elrond, desempeña un papel crucial en la formación de la Compañía del Anillo y en la lucha contra Sauron.'
    },
    {
        name: 'Isildur',
        actor: 'Harry Sinclair',
        type: 'Dúnadan (Hombre de la estirpe de Isildur)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/efa90fecf61a59a8b0d3071571b208d7/manage?view_mode=mosaic&context=manage',
        resume: 'Isildur fue el último rey de Gondor y Arnor y el portador original del Anillo Único después de haberlo tomado de Sauron en la batalla de la Última Alianza. Sin embargo, en lugar de destruir el Anillo, lo guardó, lo que eventualmente llevó a su caída y la recuperación del Anillo por parte de Sauron.'
    },
    {
        name: 'Éowyn',
        actor: 'Miranda Otto',
        type: 'Mujer de Rohan',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/377185e0ccfba1bbb46efcf6972d0f84/manage?view_mode=mosaic&context=manage',
        resume: 'Éowyn es la sobrina del rey Theoden de Rohan y una valiente guerrera. A pesar de las expectativas sociales que la confinan a roles tradicionales, anhela la aventura y la gloria en la batalla. Desempeña un papel crucial en la derrota de Sauron al enfrentarse a él en la batalla de los Campos del Pelennor, junto con Merry, el hobbit.'
    },
    {
        name: 'Galadriel',
        actor: 'Cate Blanchett',
        type: 'Elfo Noldorin',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/cb60d5483171db541a3bc8dfb4edcccb/manage?view_mode=mosaic&context=manage',
        resume: 'Galadriel es una poderosa elfa que reside en Lothlórien. Es conocida por su belleza y sabiduría, así como por poseer uno de los tres Anillos de Poder creados por Celebrimbor. Galadriel ofrece ayuda y orientación a la Compañía del Anillo durante su estancia en Lothlórien y juega un papel importante en la derrota de Sauron.'
    },
    {
        name: 'Meriadoc "Merry" Brandybuck',
        actor: 'Dominic Monaghan',
        type: 'Hobbit',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/6447aadb5de19fe07207a970fa58bc1e/manage?view_mode=mosaic&context=manage',
        resume: 'Meriadoc Brandybuck, conocido como Merry, es uno de los hobbits de la Comarca. Junto con su primo Pippin, se une a la Compañía del Anillo en su viaje para destruir el Anillo Único. A pesar de su tamaño pequeño, Merry demuestra ser valiente y astuto, desempeñando un papel importante en la derrota de Sauron.'
    },
    {
        name: 'Peregrin "Pippin" Took',
        actor: 'Billy Boyd',
        type: 'Hobbit',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/5d91dfa3daf7c61d38077853a2ea7db9/manage?view_mode=mosaic&context=manage',
        resume: 'Peregrin Took, conocido como Pippin, es otro de los hobbits de la Comarca. Junto con su primo Merry, se une a la Compañía del Anillo en su búsqueda para destruir el Anillo Único. Aunque a menudo es considerado como el más travieso y despreocupado de los hobbits, Pippin muestra un gran coraje y lealtad a lo largo de la aventura.'
    },
    {
        name: 'Faramir',
        actor: 'David Wenham',
        type: 'Hombre (Capitán de Gondor)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/d3a758f21fcc43aa62269fd742ccabc2/manage?view_mode=mosaic&context=manage',
        resume: 'Faramir es el hijo menor de Denethor, el Senescal de Gondor, y el hermano menor de Boromir. A diferencia de su hermano, Faramir es más compasivo y busca la sabiduría en lugar de la gloria. Se encuentra con Frodo y Sam durante su viaje y demuestra ser un aliado valioso en la lucha contra Sauron.'
    },
    {
        name: 'Boromir',
        actor: 'Sean Bean',
        type: 'Hombre (Capitán de Gondor)',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/d79ac3cffca2d917369911edfbf8b88c/manage?view_mode=mosaic&context=manage',
        resume: 'Boromir es el hijo mayor de Denethor, el Senescal de Gondor, y el hermano mayor de Faramir. Es un guerrero valiente y poderoso, pero también es tentado por el poder del Anillo Único. Aunque inicialmente ve el Anillo como una herramienta para salvar a Gondor, finalmente sucumbe a su influencia y muere defendiendo a Merry y Pippin.'
    },
    {
        name: 'Arwen',
        actor: 'Liv Tyler',
        type: 'Medio Elfo',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71a2626be0943b90f6c1275ecbbf0de6a/asset/b39fa979f935ed80efc6997cd0776acc/manage?view_mode=mosaic&context=manage',
        resume: 'Arwen es la hija de Elrond, el Señor de Rivendel, y una princesa elfa. Se enamora de Aragorn y renuncia a su inmortalidad para estar con él. Aunque su papel en la trama principal es limitado, su amor por Aragorn tiene un impacto significativo en la historia y en el destino de la Tierra Media.'
    }

];

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allCharactersLordOfTheRings = await CharacterLordOfTheRings.find();
        if (allCharactersLordOfTheRings.length > 0) {
            await CharacterLordOfTheRings.collection.drop();
            console.log('Personajes borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Personajes', err);
    })
    .then(async() => {
        const charactersLordOfTheRingsMap = arrayCharactersLordOfTheRings.map(
            (character) => new CharacterLordOfTheRings(character)
        );
        await CharacterLordOfTheRings.insertMany(charactersLordOfTheRingsMap);
        console.log('Personajes insertados');
    })
    .catch((err) => {
        console.log('error insertando los Personajes', err);
    })
    .finally(() => mongoose.disconnect());