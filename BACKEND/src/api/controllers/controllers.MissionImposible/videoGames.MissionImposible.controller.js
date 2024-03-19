const BooksMissionImposible = require('../../models/models.MissionImposible/books.MissionImposible.model');

const getBooksMissionImposible = async (req, res) => {
  try {
    const allBooksMissionImposible = await BooksMissionImposible.find();
    return res.status(200).json(allBooksMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookMissionImposible = await BooksMissionImposible.findById(id);
    return res.status(200).json(oneBookMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookMissionImposible = async (req, res) => {
  try {
    const newBookMissionImposible = new BooksMissionImposible(req.body);
    const createdBookMissionImposible = await newBookMissionImposible.save();
    return res.status(201).json(createdBookMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksMissionImposible = new BooksMissionImposible(req.body);
    putvs._id = id;
    const updateBooksMissionImposible = await BooksMissionImposible.findByIdAndUpdate(id, putBooksMissionImposible, {
      new: true,
    });
    if (!updateBooksMissionImposible) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookMissionImposible = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookMissionImposible = await BooksMissionImposible.findByIdAndDelete(id);
    if (!deleteBookMissionImposible) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookMissionImposible);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksMissionImposible, getOneBookMissionImposible, postBookMissionImposible, putBookMissionImposible, deleteBookMissionImposible };
