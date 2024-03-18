const express = require('express');
const {
  getBooksMissionImposible,
  getOneBookMissionImposible,
  postBookMissionImposible,
  putBookMissionImposible,
  deleteBookMissionImposible,
} = require('../../controllers/controllers.MissionImposible/books.MissionImposible.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksMissionImposibleRoutes = express.Router();

booksMissionImposibleRoutes.get('/', getBooksMissionImposible);
booksMissionImposibleRoutes.get('/:id', getOneBookMissionImposible);
booksMissionImposibleRoutes.post('/post', [isAuth], upload.single('image'), postBookMissionImposible);
booksMissionImposibleRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookMissionImposible);
booksMissionImposibleRoutes.delete('/delete/:id', [isAuth], deleteBookMissionImposible);

module.exports = booksMissionImposibleRoutes;
