const VideoGamesMatrix = require('../../models/models.Matrix/VideoGames.Matrix.model');

const getVideoGamesMatrix = async (req, res) => {
  try {
    const allVideoGamesMatrix = await VideoGamesMatrix.find();
    return res.status(200).json(allVideoGamesMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneVideoGameMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameMatrix = await VideoGamesMatrix.findById(id);
    return res.status(200).json(oneVideoGameMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameMatrix = async (req, res) => {
  try {
    const newVideoGameMatrix = new VideoGamesMatrix(req.body);
    const createdVideoGameMatrix = await newVideoGameMatrix.save();
    return res.status(201).json(createdVideoGameMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesMatrix = new VideoGamesMatrix(req.body);
    putvs._id = id;
    const updateVideoGamesMatrix = await VideoGamesMatrix.findByIdAndUpdate(id, putVideoGamesMatrix, {
      new: true,
    });
    if (!updateVideoGamesMatrix) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameMatrix = await VideoGamesMatrix.findByIdAndDelete(id);
    if (!deleteVideoGameMatrix) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesMatrix, getOneVideoGameMatrix, postVideoGameMatrix, putVideoGameMatrix, deleteVideoGameMatrix };
