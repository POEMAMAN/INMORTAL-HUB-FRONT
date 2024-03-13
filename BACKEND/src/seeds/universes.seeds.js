const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Universe = require('../api/models/universes.model');

const DB_URL = process.env.DBURL;

const arrayUniverses = [
  {
    nameUniverse: '',
    author: '',
    sagas1:
    "",
    sagas2:
    "",
    sagas3:
    "",
    sagas4:
    "",
    sagas5:
    "",
    sagas6:
      "",
    sagas7: null,
    resume:
      "",
    picture:
      '',
  },
];

mongoose
  .connect(DB_URL)
  // Para que funcione hay que poner la URL en String, da fallo la importacion
  .then(async () => {
    const allUniverses = await Universe.find();
    if (allUniverses.length > 0) {
      await Universe.collection.drop();
      console.log('deleted universes');
    }
  })
  .catch((error) => console.log('error deleting Universes', error))
  .then(async () => {
    const UniverseMap = arrayUniverses.map(
      (universe) => new Universe(universe)
    );
    await Universe.insertMany(UniverseMap);
    console.log('Universes addins');
  })
  .catch((error) => console.log('error adding Universes', error))
  .finally(() => mongoose.disconnect());
