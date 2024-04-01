const MovieMatrix = require('../../models/models.Matrix/movies.Matrix.model');

const getMoviesMatrix = async (req, res) => {
  try {
    const allMoviesMatrix = await MovieMatrix.find();
    return res.status(200).json(allMoviesMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneMovieMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const oneMovieMatrix = await MovieMatrix.findById(id);
    return res.status(200).json(oneMovieMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postMovieMatrix = async (req, res) => {
  try {
    const newMovieMatrix = new MovieMatrix(req.body);
    const createdMovieMatrix = await newMovieMatrix.save();
    return res.status(201).json(createdMovieMatrix);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putMovieMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const putMoviesMatrix = new MovieMatrix(req.body);
    putMoviesMatrix._id = id;
    const updateMoviesMatrix = await MovieMatrix.findByIdAndUpdate(id, putMoviesMatrix, {
      new: true,
    });
    if (!updateMoviesMatrix) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(updateMoviesMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteMovieMatrix = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovieMatrix = await MovieMatrix.findByIdAndDelete(id);
    if (!deleteMovieMatrix) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    return res.status(200).json(deleteMovieMatrix);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getMoviesMatrix,
  getOneMovieMatrix,
  postMovieMatrix,
  putMovieMatrix,
  deleteMovieMatrix,
};
