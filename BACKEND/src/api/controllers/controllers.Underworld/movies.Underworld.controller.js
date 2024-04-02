const MovieUnderworld = require('../../models/models.Underworld/movies.Underworld.model');

const getMoviesUnderworld = async(req, res) => {
    try {
        const allMoviesUnderworld = await MovieUnderworld.find();
        return res.status(200).json(allMoviesUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneMovieUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const oneMovieUnderworld = await MovieUnderworld.findById(id);
        return res.status(200).json(oneMovieUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovieUnderworld = async(req, res) => {
    try {
        const newMovieUnderworld = new MovieUnderworld(req.body);
        const createdMovieUnderworld = await newMovieUnderworld.save();
        return res.status(201).json(createdMovieUnderworld);
    } catch (error) {
        s;
        return res.status(500).json(error);
    }
};

const putMovieUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const putMoviesUnderworld = new MovieUnderworld(req.body);
        putMoviesUnderworld._id = id;
        const updateMoviesUnderworld = await MovieUnderworld.findByIdAndUpdate(id, putMoviesUnderworld, {
            new: true,
        });
        if (!updateMoviesUnderworld) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(updateMoviesUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovieUnderworld = async(req, res) => {
    try {
        const { id } = req.params;
        const deleteMovieUnderworld = await MovieUnderworld.findByIdAndDelete(id);
        if (!deleteMovieUnderworld) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(deleteMovieUnderworld);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getMoviesUnderworld,
    getOneMovieUnderworld,
    postMovieUnderworld,
    putMovieUnderworld,
    deleteMovieUnderworld,
};