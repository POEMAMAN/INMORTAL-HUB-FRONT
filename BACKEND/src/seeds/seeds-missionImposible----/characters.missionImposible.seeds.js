const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterMissionImposible = require('../../api/models/models.MissionImposible/characters.MissionImposible.model');

const arrayCharactersMissionImposible = [
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
    const allCharactersMissionImposible = await CharacterMissionImposible.find();
    if (allCharactersMissionImposible.length > 0) {
      await CharacterMissionImposible.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersMissionImposibleMap = arrayCharactersMissionImposible.map(
      (character) => new CharacterMissionImposible(character)
    );
    await CharacterMissionImposible.insertMany(charactersMissionImposibleMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
