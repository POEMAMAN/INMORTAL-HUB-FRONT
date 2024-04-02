const express = require('express');
const {
  getCharactersBackToTheFuture,
  getOneCharacterBackToTheFuture,
  postCharacterBackToTheFuture,
  putCharacterBackToTheFuture,
  deleteCharacterBackToTheFuture,
} = require('../../controllers/controllers.BackToTheFuture/characters.BackToTheFuture.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterBackToTheFutureRoutes = express.Router();

characterBackToTheFutureRoutes.get('/', getCharactersBackToTheFuture);
characterBackToTheFutureRoutes.get('/:id', getOneCharacterBackToTheFuture);
characterBackToTheFutureRoutes.post('/post', [isAuth], upload.single('image'), postCharacterBackToTheFuture);
characterBackToTheFutureRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterBackToTheFuture);
characterBackToTheFutureRoutes.delete('/delete/:id', [isAuth], deleteCharacterBackToTheFuture);

module.exports = characterBackToTheFutureRoutes;
