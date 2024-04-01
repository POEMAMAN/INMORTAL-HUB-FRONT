const express = require('express');
const {
  getVideoGamesMatrix,
  postVideoGameMatrix,
  putVideoGameMatrix,
  deleteVideoGameMatrix,
  getOneVideoGameMatrix,
} = require('../../controllers/controllers.Matrix/videoGames.Matrix.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesMatrixRoutes = express.Router();

videoGamesMatrixRoutes.get('/', getVideoGamesMatrix);
videoGamesMatrixRoutes.get('/:id', getOneVideoGameMatrix);
videoGamesMatrixRoutes.post('/post', [isAuth], upload.single('image'), postVideoGameMatrix);
videoGamesMatrixRoutes.put('/edit/:id', upload.single('image'), [isAuth], putVideoGameMatrix);
videoGamesMatrixRoutes.delete('/delete/:id', [isAuth], deleteVideoGameMatrix);

module.exports = videoGamesMatrixRoutes;
