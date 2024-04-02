const CharacterUnderworld = require('../../models/models.Underworld/characters.Underworld.model');

const getCharactersUnderworld = async(req, res) => {
    try {
        const allCharactersUnderworld = await CharacterUnderworld.find();
        return res.status(200).json(allCharactersUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneCharacterUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const oneCharacterUnderworld = await CharacterUnderworld.findById(id)
            .populate('planetUnderworld')
            .populate('countryUnderworld');
        return res.status(200).json(oneCharacterUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postCharacterUnderworld = async(req, res) => {
    try {
        const newCharacterUnderworld = new CharacterUnderworld(req.body);
        const createdCharacterUnderworld = await newCharacterUnderworld.save();
        return res.status(201).json(createdCharacterUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const putCharacterUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const putCharactersUnderworld = new CountryUnderworld(req.body);
        putCharactersUnderworld._id = id;
        const updateCharactersUnderworld = await CharacterUnderworld.findByIdAndUpdate(
            id,
            putCharactersUnderworld, { new: true }
        );
        if (!updateCharactersUnderworld) {
            return res.status(404).json({ message: 'Character not found' });
        }
        return res.status(200).json(updateCharactersUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCharacterUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteCharacterUnderworld = await CharacterUnderworld.findByIdAndDelete(id);
        if (!deleteCharacterUnderworld) {
            return res.status(404).json({ message: 'character not found' });
        }
        return res.status(200).json(deleteCharacterUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getCharactersUnderworld,
    getOneCharacterUnderworld,
    postCharacterUnderworld,
    putCharacterUnderworld,
    deleteCharacterUnderworld,
};