const express = require('express');
const {
  getvideoGamesApesPlanet,
  getOnevideoGameApesPlanet,
  postvideoGameApesPlanet,
  putvideoGameApesPlanet,
  deletevideoGameApesPlanet,
} = require('../../controllers/controllers.ApesPlanet/videoGames.ApesPlanet.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesApesPlanetRoutes = express.Router();

videoGamesApesPlanetRoutes.get('/', getvideoGamesApesPlanet);
videoGamesApesPlanetRoutes.get('/:id', getOnevideoGameApesPlanet);
videoGamesApesPlanetRoutes.post('/post', [isAuth], upload.single('image'), postvideoGameApesPlanet);
videoGamesApesPlanetRoutes.put('/edit/:id', upload.single('image'), [isAuth], putvideoGameApesPlanet);
videoGamesApesPlanetRoutes.delete('/delete/:id', [isAuth], deletevideoGameApesPlanet);

module.exports = videoGamesApesPlanetRoutes;
