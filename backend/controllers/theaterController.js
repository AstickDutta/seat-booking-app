const Theater = require('../models/theaterModel');

exports.getTheaters = (req, res) => {
  Theater.find()
    .then(theaters => res.json(theaters))
    .catch(err => res.status(400).json('Error:'+ err));
};

exports.getTheaterById = (req, res) => {
Theater.findById(req.params.id)
.then(theater => res.json(theater))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.createTheater = (req, res) => {
const newTheater = new Theater(req.body);

newTheater.save()
.then(() => res.json('Theater added!'))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.updateTheater = (req, res) => {
Theater.findByIdAndUpdate(req.params.id, req.body)
.then(() => res.json('Theater updated!'))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.deleteTheater = (req, res) => {
Theater.findByIdAndDelete(req.params.id)
.then(() => res.json('Theater deleted.'))
.catch(err => res.status(400).json('Error: ' + err));
};
