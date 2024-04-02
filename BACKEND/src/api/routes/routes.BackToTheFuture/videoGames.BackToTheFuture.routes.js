const express = require('express');
const {
  getVideoGamesBackToTheFuture,
  getOneVideoGameBackToTheFuture,
  postVideoGameBackToTheFuture,
  putVideoGameBackToTheFuture,
  deleteVideoGameBackToTheFuture,
} = require('../../controllers/controllers.BackToTheFuture/videoGames.BackToTheFuture.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const VideoGamesBackToTheFutureRoutes = express.Router();

VideoGamesBackToTheFutureRoutes.get('/', getVideoGamesBackToTheFuture);
VideoGamesBackToTheFutureRoutes.get('/:id', getOneVideoGameBackToTheFuture);
VideoGamesBackToTheFutureRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameBackToTheFuture);
VideoGamesBackToTheFutureRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameBackToTheFuture);
VideoGamesBackToTheFutureRoutes.delete('/delete/:id', [isAuth], deleteVideoGameBackToTheFuture);

module.exports = VideoGamesBackToTheFutureRoutes;
