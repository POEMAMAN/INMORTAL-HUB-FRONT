const BooksApesPlanet = require('../../models/models.ApesPlanet/books.ApesPlanet.model');

const getBooksApesPlanet = async (req, res) => {
  try {
    const allBooksApesPlanet = await BooksApesPlanet.find();
    return res.status(200).json(allBooksApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookApesPlanet = await BooksApesPlanet.findById(id);
    return res.status(200).json(oneBookApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookApesPlanet = async (req, res) => {
  try {
    const newBookApesPlanet = new BooksApesPlanet(req.body);
    const createdBookApesPlanet = await newBookApesPlanet.save();
    return res.status(201).json(createdBookApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksApesPlanet = new BooksApesPlanet(req.body);
    putvs._id = id;
    const updateBooksApesPlanet = await BooksApesPlanet.findByIdAndUpdate(id, putBooksApesPlanet, {
      new: true,
    });
    if (!updateBooksApesPlanet) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookApesPlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookApesPlanet = await BooksApesPlanet.findByIdAndDelete(id);
    if (!deleteBookApesPlanet) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookApesPlanet);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksApesPlanet, getOneBookApesPlanet, postBookApesPlanet, putBookApesPlanet, deleteBookApesPlanet };
