const express = require('express');
const {
  getCharactersMatrix,
  getOneCharacterMatrix,
  postCharacterMatrix,
  putCharacterMatrix,
  deleteCharacterMatrix,
} = require('../../controllers/controllers.Matrix/characters.Matrix.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterMatrixRoutes = express.Router();

characterMatrixRoutes.get('/', getCharactersMatrix);
characterMatrixRoutes.get('/:id', getOneCharacterMatrix);
characterMatrixRoutes.post('/post', [isAuth], upload.single('image'), postCharacterMatrix);
characterMatrixRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterMatrix);
characterMatrixRoutes.delete('/delete/:id', [isAuth], deleteCharacterMatrix);

module.exports = characterMatrixRoutes;
