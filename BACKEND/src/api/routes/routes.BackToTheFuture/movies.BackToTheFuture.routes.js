const express = require('express');
const {
  getMoviesBackToTheFuture,
  getOneMovieBackToTheFuture,
  postMovieBackToTheFuture,
  putMovieBackToTheFuture,
  deleteMovieBackToTheFuture,
} = require('../../controllers/controllers.BackToTheFuture/movies.BackToTheFuture.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieBackToTheFutureRoutes = express.Router();

movieBackToTheFutureRoutes.get('/', getMoviesBackToTheFuture);
movieBackToTheFutureRoutes.get('/:id', getOneMovieBackToTheFuture);
movieBackToTheFutureRoutes.post('/post', [isAuth], upload.single('image'), postMovieBackToTheFuture);
movieBackToTheFutureRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieBackToTheFuture);
movieBackToTheFutureRoutes.delete('/delete/:id', [isAuth], deleteMovieBackToTheFuture);

module.exports = movieBackToTheFutureRoutes;
