const CharacterMatrix = require('../../models/models.Matrix/characters.Matrix.model');

const getCharactersMatrix = async (req, res) => {
  try {
    const allCharactersMatrix = await CharacterMatrix.find();
    return res.status(200).json(allCharactersMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCharacterMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCharacterMatrix = await CharacterMatrix.findById(id)
      .populate('planetMatrix')
      .populate('countryMatrix');
    return res.status(200).json(oneCharacterMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCharacterMatrix = async (req, res) => {
  try {
    const newCharacterMatrix = new CharacterMatrix(req.body);
    const createdCharacterMatrix = await newCharacterMatrix.save();
    return res.status(201).json(createdCharacterMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCharacterMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const putCharactersMatrix = new CountryMatrix(req.body);
    putCharactersMatrix._id = id;
    const updateCharactersMatrix = await CharacterMatrix.findByIdAndUpdate(
      id,
      putCharactersMatrix,
      { new: true }
    );
    if (!updateCharactersMatrix) {
      return res.status(404).json({ message: 'Character not found' });
    }
    return res.status(200).json(updateCharactersMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCharacterMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacterMatrix = await CharacterMatrix.findByIdAndDelete(id);
    if (!deleteCharacterMatrix) {
      return res.status(404).json({ message: 'character not found' });
    }
    return res.status(200).json(deleteCharacterMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCharactersMatrix,
  getOneCharacterMatrix,
  postCharacterMatrix,
  putCharacterMatrix,
  deleteCharacterMatrix,
};
