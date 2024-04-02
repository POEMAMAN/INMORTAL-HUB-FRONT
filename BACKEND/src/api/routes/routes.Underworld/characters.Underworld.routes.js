const express = require('express');
const {
    getCharactersUnderworld,
    getOneCharacterUnderworld,
    postCharacterUnderworld,
    putCharacterUnderworld,
    deleteCharacterUnderworld,
} = require('../../controllers/controllers.Underworld/characters.Underworld.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterUnderworldRoutes = express.Router();

characterUnderworldRoutes.get('/', getCharactersUnderworld);
characterUnderworldRoutes.get('/:id', getOneCharacterUnderworld);
characterUnderworldRoutes.post('/post', [isAuth], upload.single('image'), postCharacterUnderworld);
characterUnderworldRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterUnderworld);
characterUnderworldRoutes.delete('/delete/:id', [isAuth], deleteCharacterUnderworld);

module.exports = characterUnderworldRoutes;