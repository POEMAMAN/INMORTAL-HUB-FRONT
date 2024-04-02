const VideoGamesBackToTheFuture = require('../../models/models.BackToTheFuture/videoGames.BackToTheFuture.model');

const getVideoGamesBackToTheFuture = async (req, res) => {
  try {
    const allVideoGamesBackToTheFuture = await VideoGamesBackToTheFuture.find();
    return res.status(200).json(allVideoGamesBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneVideoGameBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const oneVideoGameBackToTheFuture = await VideoGamesBackToTheFuture.findById(id);
    return res.status(200).json(oneVideoGameBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postVideoGameBackToTheFuture = async (req, res) => {
  try {
    const newVideoGameBackToTheFuture = new VideoGamesBackToTheFuture(req.body);
    const createdVideoGameBackToTheFuture = await newVideoGameBackToTheFuture.save();
    return res.status(201).json(createdVideoGameBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putVideoGameBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const putVideoGamesBackToTheFuture = new VideoGamesBackToTheFuture(req.body);
    putvs._id = id;
    const updateVideoGamesBackToTheFuture = await VideoGamesBackToTheFuture.findByIdAndUpdate(id, putVideoGamesBackToTheFuture, {
      new: true,
    });
    if (!updateVideoGamesBackToTheFuture) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(updateVideoGamesBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteVideoGameBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteVideoGameBackToTheFuture = await VideoGamesBackToTheFuture.findByIdAndDelete(id);
    if (!deleteVideoGameBackToTheFuture) {
      return res.status(404).json({ message: 'VideoGame not found' });
    }
    return res.status(200).json(deleteVideoGameBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getVideoGamesBackToTheFuture, getOneVideoGameBackToTheFuture, postVideoGameBackToTheFuture, putVideoGameBackToTheFuture, deleteVideoGameBackToTheFuture };
