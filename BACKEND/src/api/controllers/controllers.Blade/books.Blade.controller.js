const BooksBlade = require('../../models/models.Blade/books.Blade.model');

const getBooksBlade = async (req, res) => {
  try {
    const allBooksBlade = await BooksBlade.find();
    return res.status(200).json(allBooksBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookBlade = await BooksBlade.findById(id);
    return res.status(200).json(oneBookBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookBlade = async (req, res) => {
  try {
    const newBookBlade = new BooksBlade(req.body);
    const createdBookBlade = await newBookBlade.save();
    return res.status(201).json(createdBookBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksBlade = new BooksBlade(req.body);
    putvs._id = id;
    const updateBooksBlade = await BooksBlade.findByIdAndUpdate(id, putBooksBlade, {
      new: true,
    });
    if (!updateBooksBlade) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookBlade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookBlade = await BooksBlade.findByIdAndDelete(id);
    if (!deleteBookBlade) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookBlade);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksBlade, getOneBookBlade, postBookBlade, putBookBlade, deleteBookBlade };
