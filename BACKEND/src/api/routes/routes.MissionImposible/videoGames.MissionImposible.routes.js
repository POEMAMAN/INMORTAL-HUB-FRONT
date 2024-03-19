const express = require('express');
const {
  getvideoGamesMissionImposible,
  getOnevideoGameMissionImposible,
  postvideoGameMissionImposible,
  putvideoGameMissionImposible,
  deletevideoGameMissionImposible,
} = require('../../controllers/controllers.MissionImposible/videoGames.MissionImposible.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const videoGamesMissionImposibleRoutes = express.Router();

videoGamesMissionImposibleRoutes.get('/', getvideoGamesMissionImposible);
videoGamesMissionImposibleRoutes.get('/:id', getOnevideoGameMissionImposible);
videoGamesMissionImposibleRoutes.post('/post', [isAuth], upload.single('image'), postvideoGameMissionImposible);
videoGamesMissionImposibleRoutes.put('/edit/:id', upload.single('image'), [isAuth], putvideoGameMissionImposible);
videoGamesMissionImposibleRoutes.delete('/delete/:id', [isAuth], deletevideoGameMissionImposible);

module.exports = videoGamesMissionImposibleRoutes;
