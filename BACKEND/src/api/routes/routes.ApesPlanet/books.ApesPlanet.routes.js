const express = require('express');
const {
  getBooksApesPlanet,
  getOneBookApesPlanet,
  postBookApesPlanet,
  putBookApesPlanet,
  deleteBookApesPlanet,
} = require('../../controllers/controllers.ApesPlanet/books.ApesPlanet.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksApesPlanetRoutes = express.Router();

booksApesPlanetRoutes.get('/', getBooksApesPlanet);
booksApesPlanetRoutes.get('/:id', getOneBookApesPlanet);
booksApesPlanetRoutes.post('/post', [isAuth], upload.single('image'), postBookApesPlanet);
booksApesPlanetRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookApesPlanet);
booksApesPlanetRoutes.delete('/delete/:id', [isAuth], deleteBookApesPlanet);

module.exports = booksApesPlanetRoutes;
