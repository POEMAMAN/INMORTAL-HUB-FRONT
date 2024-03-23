const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterStartrek = require('../../api/models/models.Startrek/characters.Startrek.model');

const arrayCharactersStartrek = [
  {
  name: "",
  actor: "",
  house: "",
  type: "",
  picture: "",
  resume: ""
},
{
  name: "",
  actor: "",
  house: "",
  type: "",
  picture: "",
  resume: ""
},
{
  name: "",
  actor: "",
  house: "",
  type: "",
  picture: "",
  resume: ""
},
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersStartrek = await CharacterStartrek.find();
    if (allCharactersStartrek.length > 0) {
      await CharacterStartrek.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersStartrekMap = arrayCharactersStartrek.map(
      (character) => new CharacterStartrek(character)
    );
    await CharacterStartrek.insertMany(charactersStartrekMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
