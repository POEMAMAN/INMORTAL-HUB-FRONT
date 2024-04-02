const express = require('express');
const {
    getMoviesUnderworld,
    getOneMovieUnderworld,
    postMovieUnderworld,
    putMovieUnderworld,
    deleteMovieUnderworld,
} = require('../../controllers/controllers.Underworld/movies.Underworld.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const moviesUnderworldRoutes = express.Router();

moviesUnderworldRoutes.get('/', getMoviesUnderworld);
moviesUnderworldRoutes.get('/:id', getOneMovieUnderworld);
moviesUnderworldRoutes.post('/post', [isAuth], upload.single('image'), postMovieUnderworld);
moviesUnderworldRoutes.put('/edit/:id', upload.single('image'), [isAuth], putMovieUnderworld);
moviesUnderworldRoutes.delete('/delete/:id', [isAuth], deleteMovieUnderworld);

module.exports = moviesUnderworldRoutes;