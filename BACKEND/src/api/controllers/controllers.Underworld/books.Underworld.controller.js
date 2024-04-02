const BooksUnderworld = require('../../models/models.Underworld/books.Underworld.model');

const getBooksUnderworld = async (req, res) => {
  try {
    const allBooksUnderworld = await BooksUnderworld.find();
    return res.status(200).json(allBooksUnderworld);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookUnderworld = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookUnderworld = await BooksUnderworld.findById(id);
    return res.status(200).json(oneBookUnderworld);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookUnderworld = async (req, res) => {
  try {
    const newBookUnderworld = new BooksUnderworld(req.body);
    const createdBookUnderworld = await newBookUnderworld.save();
    return res.status(201).json(createdBookUnderworld);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookUnderworld = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksUnderworld = new BooksUnderworld(req.body);
    putvs._id = id;
    const updateBooksUnderworld = await BooksUnderworld.findByIdAndUpdate(id, putBooksUnderworld, {
      new: true,
    });
    if (!updateBooksUnderworld) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksUnderworld);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookUnderworld = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookUnderworld = await BooksUnderworld.findByIdAndDelete(id);
    if (!deleteBookUnderworld) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookUnderworld);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksUnderworld, getOneBookUnderworld, postBookUnderworld, putBookUnderworld, deleteBookUnderworld };
