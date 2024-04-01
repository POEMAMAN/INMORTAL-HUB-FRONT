const express = require('express');
const {
  getMoviesMatrix,
  getOneMovieMatrix,
  postMovieMatrix,
  putMovieMatrix,
  deleteMovieMatrix,
} = require('../../controllers/controllers.Matrix/movies.Matrix.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const movieMatrixRoutes = express.Router();

movieMatrixRoutes.get('/', getMoviesMatrix);
movieMatrixRoutes.get('/:id', getOneMovieMatrix);
movieMatrixRoutes.post('/post', [isAuth], upload.single('image'), postMovieMatrix);
movieMatrixRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieMatrix);
movieMatrixRoutes.delete('/delete/:id', [isAuth], deleteMovieMatrix);

module.exports = movieMatrixRoutes;
