const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookUnderworld = require('../../api/models/models.Underworld/books.Underworld.model');


const arrayBooksUnderworld = [
  
  {
    title: 'Underworld',
    publication_year: 2003,
    saga: 'Underworld',
    saga_index: 1,
    universe: 'Underworld',
    author: 'Greg Cox',
    resume: 'La batalla centenaria entre vampiros y hombres lobo ha alcanzado una nueva intensidad bajo las calles de la ciudad de Nueva York. Un joven hombre lobo llamado Michael está decidido a poner fin al conflicto, pero la vampiro de alto rango Selene tiene la fuerza de diez hombres, y planea usarla para destruir a los hombres lobo',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710582813/underworld/movies/MV5BMTk1OTc2ZmUtODU0Yy00NGJiLWJmNmQtODI0MzBjODk3MjI4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc_._V1__lcny8x.jpg',
  },
  {
    title: 'Underworld: La rebelion de los licantropos',
    publication_year: 2008,
    saga: 'Underworld',
    saga_index: 3,
    universe: 'Underworld',
    author: 'Greg Cox',
    resume: 'Hace siglos... dos razas eternas y aterradoras: los aristocráticos vampiros y los feroces licántropos, están ligados por una cruel relación ancestral entre amo y siervo, y eternamente separados por la continua y violenta rivalidad entre sus dos especies. Pero desconocido tanto para la nobleza como para los esclavos, un romance clandestino y prohibido entre el siervo licántropo Lucian y la bella noble vampira Sonja arde con una pasión desenfrenada. Buscando escapar del tiránico padre de Sonja, Viktor, y de un futuro en el que su amor es considerado una abominación, Lucian arriesga las maquinaciones siempre presentes de la corte y su propia vida para liberarse a sí mismo y a su amada de sus ataduras... una táctica audaz que eventualmente dará coraje a todos los licántropos para alzarse contra sus opresores señores vampiros. Se forjan nuevas alianzas incluso mientras se rompen las cadenas de la esclavitud... y todo lo que Lucian y Sonja estiman querido será amenazado con una aniquilación total.',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1712037720/underworld/movies/underworld_iii_gkszox.jpg',
  },
  {
    title: 'Underworld: Evolution',
    publication_year: 2006,
    saga: 'Underworld',
    saga_index: 2,
    universe: 'Underworld',
    author: 'Greg Cox',
    resume: 'Durante más de seiscientos años, Selene fue una Cazadora de la Muerte, una guerrera vampiro dedicada a la destrucción de los enemigos salvajes de su pueblo: los hombres lobo. Durante toda su vida mortal, Michael fue un humano común y corriente, hasta que se encontró atrapado en medio de una guerra en las sombras entre rivales inmortales. Mordido tanto por un licántropo como por un vampiro, ahora se ha convertido en una criatura híbrida cuyo potencial último sigue siendo desconocido. Juntos, Selene y Michael se han convertido en parias, y blancos, porque una amenaza sepultada desde las profundidades de la historia ha resurgido en busca de una venganza impía',
    picture:
      'https://res.cloudinary.com/dqh5ovfj1/image/upload/v1710582836/underworld/movies/MV5BMjEzNDY1OTQwOV5BMl5BanBnXkFtZTcwNjcxMTIzMw_._V1__kaprz1.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksUnderworld = await BookUnderworld.find();
    if (allBooksUnderworld.length > 0) {
      await BookUnderworld.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksUnderworldMap = arrayBooksUnderworld.map((book) => new BookUnderworld(book));
    await BookUnderworld.insertMany(booksUnderworldMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
