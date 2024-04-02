const express = require('express');
const {
  getBooksUnderworld,
  getOneBookUnderworld,
  postBookUnderworld,
  putBookUnderworld,
  deleteBookUnderworld,
} = require('../../controllers/controllers.Underworld/books.Underworld.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksUnderworldRoutes = express.Router();

booksUnderworldRoutes.get('/', getBooksUnderworld);
booksUnderworldRoutes.get('/:id', getOneBookUnderworld);
booksUnderworldRoutes.post('/post', [isAuth], upload.single('image'), postBookUnderworld);
booksUnderworldRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookUnderworld);
booksUnderworldRoutes.delete('/delete/:id', [isAuth], deleteBookUnderworld);

module.exports = booksUnderworldRoutes;
