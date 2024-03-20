const express = require('express');
const {
  getBooksBlade,
  getOneBookBlade,
  postBookBlade,
  putBookBlade,
  deleteBookBlade,
} = require('../../controllers/controllers.Blade/books.Blade.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksBladeRoutes = express.Router();

booksBladeRoutes.get('/', getBooksBlade);
booksBladeRoutes.get('/:id', getOneBookBlade);
booksBladeRoutes.post('/post', [isAuth], upload.single('image'), postBookBlade);
booksBladeRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookBlade);
booksBladeRoutes.delete('/delete/:id', [isAuth], deleteBookBlade);

module.exports = booksBladeRoutes;
