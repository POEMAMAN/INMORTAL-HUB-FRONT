const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterTerminator = require('../../api/models/models.Terminator/characters.Terminator.model');

const arrayCharactersTerminator = [
  {
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: '',
  resume: ''
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: ''
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "h",
  resume: '​'
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: ''
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: '' 
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: '' 
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: '' 
},
{
  name: "",
  actor: "",
  race: "",
  profession: "",
  picture: "",
  resume: '' 
},
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersTerminator = await CharacterTerminator.find();
    if (allCharactersTerminator.length > 0) {
      await CharacterTerminator.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersTerminatorMap = arrayCharactersTerminator.map(
      (character) => new CharacterTerminator(character)
    );
    await CharacterTerminator.insertMany(charactersTerminatorMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
