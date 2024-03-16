const express = require('express');
const {
  getBooksAlien,
  getOneBookAlien,
  postBookAlien,
  putBookAlien,
  deleteBookAlien,
} = require('../../controllers/controllers.Alien/books.Alien.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksAlienRoutes = express.Router();

booksAlienRoutes.get('/', getBooksAlien);
booksAlienRoutes.get('/:id', getOneBookAlien);
booksAlienRoutes.post('/post', [isAuth], upload.single('image'), postBookAlien);
booksAlienRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookAlien);
booksAlienRoutes.delete('/delete/:id', [isAuth], deleteBookAlien);

module.exports = booksAlienRoutes;
