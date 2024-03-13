const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterLordOfTheRings = require('../../api/models/models.LordOfTheRings/characters.LordOfTheRings.model');

const arrayCharactersLordOfTheRings = [
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersLordOfTheRings = await CharacterLordOfTheRings.find();
    if (allCharactersLordOfTheRings.length > 0) {
      await CharacterLordOfTheRings.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
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
