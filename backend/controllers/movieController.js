const Movie = require('../models/movieModel');

exports.getMovies = (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.getMovieById = (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.createMovie = (req, res) => {
  const newMovie = new Movie(req.body);

  newMovie.save()
    .then(() => res.json('Movie added!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json('Movie updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json('Movie deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};
