const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterCrespusculo = require('../../api/models/models.Crespusculo/characters.Crespusculo.model');

const arrayCharactersCrespusculo = [
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
    const allCharactersCrespusculo = await CharacterCrespusculo.find();
    if (allCharactersCrespusculo.length > 0) {
      await CharacterCrespusculo.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersCrespusculoMap = arrayCharactersCrespusculo.map(
      (character) => new CharacterCrespusculo(character)
    );
    await CharacterCrespusculo.insertMany(charactersCrespusculoMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
