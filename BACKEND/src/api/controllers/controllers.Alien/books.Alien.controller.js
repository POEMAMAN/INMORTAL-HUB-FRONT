const BooksAlien = require('../../models/models.Alien/books.Alien.model');

const getBooksAlien = async (req, res) => {
  try {
    const allBooksAlien = await BooksAlien.find();
    return res.status(200).json(allBooksAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};


const getOneBookAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookAlien = await BooksAlien.findById(id);
    return res.status(200).json(oneBookAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookAlien = async (req, res) => {
  try {
    const newBookAlien = new BooksAlien(req.body);
    const createdBookAlien = await newBookAlien.save();
    return res.status(201).json(createdBookAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksAlien = new BooksAlien(req.body);
    putvs._id = id;
    const updateBooksAlien = await BooksAlien.findByIdAndUpdate(id, putBooksAlien, {
      new: true,
    });
    if (!updateBooksAlien) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookAlien = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookAlien = await BooksAlien.findByIdAndDelete(id);
    if (!deleteBookAlien) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookAlien);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksAlien, getOneBookAlien, postBookAlien, putBookAlien, deleteBookAlien };
