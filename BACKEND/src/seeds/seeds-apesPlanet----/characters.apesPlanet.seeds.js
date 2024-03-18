const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterApesPlanet = require('../../api/models/models.ApesPlanet/characters.ApesPlanet.model');

const arrayCharactersApesPlanet = [
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
    const allCharactersApesPlanet = await CharacterApesPlanet.find();
    if (allCharactersApesPlanet.length > 0) {
      await CharacterApesPlanet.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersApesPlanetMap = arrayCharactersApesPlanet.map(
      (character) => new CharacterApesPlanet(character)
    );
    await CharacterApesPlanet.insertMany(charactersApesPlanetMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
