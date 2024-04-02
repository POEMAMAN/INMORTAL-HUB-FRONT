const CharacterBackToTheFuture = require('../../models/models.BackToTheFuture/characters.BackToTheFuture.model');

const getCharactersBackToTheFuture = async (req, res) => {
  try {
    const allCharactersBackToTheFuture = await CharacterBackToTheFuture.find();
    return res.status(200).json(allCharactersBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterBackToTheFuture = await CharacterBackToTheFuture.findById(id)
      .populate('planetBackToTheFuture')
      .populate('countryBackToTheFuture');
    return res.status(200).json(oneCharacterBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterBackToTheFuture = async (req, res) => {
  try {
    const newCharacterBackToTheFuture = new CharacterBackToTheFuture(req.body);
    const createdCharacterBackToTheFuture = await newCharacterBackToTheFuture.save();
    return res.status(201).json(createdCharacterBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersBackToTheFuture = new CountryBackToTheFuture(req.body);
    putCharactersBackToTheFuture._id = id;
    const updateCharactersBackToTheFuture = await CharacterBackToTheFuture.findByIdAndUpdate(
      id,
      putCharactersBackToTheFuture,
      { new: true }
    );
    if (!updateCharactersBackToTheFuture) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterBackToTheFuture = await CharacterBackToTheFuture.findByIdAndDelete(id);
    if (!deleteCharacterBackToTheFuture) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersBackToTheFuture,
  getOneCharacterBackToTheFuture,
  postCharacterBackToTheFuture,
  putCharacterBackToTheFuture,
  deleteCharacterBackToTheFuture,
};
