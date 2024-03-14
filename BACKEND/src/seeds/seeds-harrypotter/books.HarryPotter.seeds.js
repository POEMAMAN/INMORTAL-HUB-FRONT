const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookHarryPotter = require('../../api/models/models.HarryPotter/books.HarryPotter.model');


const arrayBooksHarryPotter = [{
        title: 'Harry Potter y la Piedra Filosofal',
        publication_year: 1997,
        saga_index: 1,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Sigue la vida de un joven mago, Harry Potter, y sus amigos Hermione Granger y Ron Weasley, quienes luchan contra el mago oscuro Lord Voldemort.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/54530fea9273fef1061976081e48f74a/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y la Cámara Secreta',
        publication_year: 1998,
        saga_index: 2,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter regresa a la Escuela Hogwarts de Magia y Hechicería para su segundo año, donde una serie de mensajes en las paredes de los pasillos de la escuela advierten que se ha abierto la "Cámara de los Secretos" y que el "heredero de Slytherin" matará a todos los alumnos que no provengan de familias completamente mágicas.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/7e6d510096c3b391db8790619adb8615/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y el Prisionero de Azkaban',
        publication_year: 1999,
        saga_index: 3,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter aprende más sobre su pasado y la historia de sus padres cuando se encuentra con Sirius Black, un prisionero fugado de Azkaban, quien se cree que es uno de los aliados de Lord Voldemort.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/922a9d9af5fa40d7a25057cb6e055969/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y el Cáliz de Fuego',
        publication_year: 2000,
        saga_index: 4,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter es seleccionado para participar en el Torneo de los Tres Magos, una competencia peligrosa entre tres escuelas de magia. Mientras tanto, Lord Voldemort planea su regreso al poder.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/9c1b9887985762d9d83eee46b991b0f0/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y la Orden del Fénix',
        publication_year: 2003,
        saga_index: 5,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter vuelve a la Escuela Hogwarts de Magia y Hechicería para su quinto año, donde forma parte de la "Orden del Fénix", un grupo secreto que lucha contra Lord Voldemort y sus seguidores, los mortífagos.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/ff4a5f4d795e099276a56310b1ced5da/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y el Misterio del Príncipe',
        publication_year: 2005,
        saga_index: 6,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter regresa a Hogwarts para su sexto año de estudio, donde aprende más sobre el pasado de Voldemort y descubre un libro de hechizos perteneciente a un misterioso príncipe.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/ccb7d7c9dee920ae846453e5acc0a0bd/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y las Reliquias de la Muerte',
        publication_year: 2007,
        saga_index: 7,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling',
        resume: 'Harry Potter y sus amigos Hermione Granger y Ron Weasley emprenden una misión peligrosa para destruir los Horrocruxes, objetos que contienen fragmentos del alma de Lord Voldemort, mientras el mundo mágico se sumerge en la guerra.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/f6edbae7f6b2d4ddac4c9cf82e85d9d2/manage?view_mode=mosaic&context=manage',
    },
    {
        title: 'Harry Potter y el Legado Maldito',
        publication_year: 2016,
        saga_index: 8,
        universe: 'Mundo Mágico',
        author: 'J.K. Rowling, Jack Thorne, John Tiffany',
        resume: 'La obra está basada en una nueva historia original de J.K. Rowling, Jack Thorne y John Tiffany. Es la octava historia de la saga de Harry Potter y la primera en ser presentada oficialmente en forma de obra de teatro.',
        picture: 'https://console.cloudinary.com/console/c-19d7767fc54f15bca4427ebedd8a4a/media_library/folders/c71bc5e2d20932339e7427e0cb48b44aa5/asset/4177caf05a3d35bb1855083567759dc2/manage?view_mode=mosaic&context=manage',
    }
]
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allBooksHarryPotter = await BookHarryPotter.find();
        if (allHarryPotter.length > 0) {
            await BookHarryPotter.collection.drop();
            console.log('Libros borrados');
        }
    })
    .catch((err) => {
        console.log('error borrando los Libros', err);
    })
    .then(async() => {
        const booksHarryPotter = arrayBooksHarryPotter.map((book) => new BookHarryPotter(book));
        await BookHarryPotter.insertMany(booksHarryPotter);
        console.log('Libros insertados');
    })
    .catch((err) => {
        console.log('error insertando los Libros', err);
    })
    .finally(() => mongoose.disconnect());