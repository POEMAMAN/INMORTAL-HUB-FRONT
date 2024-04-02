const MovieBackToTheFuture = require('../../models/models.BackToTheFuture/movies.BackToTheFuture.model');

const getMoviesBackToTheFuture = async (req, res) => {
  try {
    const allMoviesBackToTheFuture = await MovieBackToTheFuture.find();
    return res.status(200).json(allMoviesBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieBackToTheFuture = await MovieBackToTheFuture.findById(id).populate('movieBackToTheFuture');
    return res.status(200).json(oneMovieBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieBackToTheFuture = async (req, res) => {
  try {
    const newMovieBackToTheFuture = new MovieBackToTheFuture(req.body);
    const createdMovieBackToTheFuture = await newMovieBackToTheFuture.save();
    return res.status(201).json(createdMovieBackToTheFuture);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putMovieBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesBackToTheFuture = new MovieBackToTheFuture(req.body);
    putMoviesBackToTheFuture._id = id;
    const updateMoviesBackToTheFuture = await MovieBackToTheFuture.findByIdAndUpdate(id, putMoviesBackToTheFuture, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieBackToTheFuture = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieBackToTheFuture = await MovieBackToTheFuture.findByIdAndDelete(id);
    if (!deleteMovieBackToTheFuture) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieBackToTheFuture);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesBackToTheFuture,
  getOneMovieBackToTheFuture,
  postMovieBackToTheFuture,
  putMovieBackToTheFuture,
  deleteMovieBackToTheFuture,
};
