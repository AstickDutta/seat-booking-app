const Seat = require('../models/seatModel');

exports.getSeats = (req, res) => {
Seat.find()
.populate('theater')
.then(seats => res.json(seats))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.getSeatById = (req, res) => {
Seat.findById(req.params.id)
.populate('theater')
.then(seat => res.json(seat))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.createSeat = (req, res) => {
const newSeat = new Seat(req.body);

newSeat.save()
.then(() => res.json('Seat added!'))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.updateSeat = (req, res) => {
Seat.findByIdAndUpdate(req.params.id, req.body)
.then(() => res.json('Seat updated!'))
.catch(err => res.status(400).json('Error: ' + err));
};

exports.deleteSeat = (req, res) => {
Seat.findByIdAndDelete(req.params.id)
.then(() => res.json('Seat deleted.'))
.catch(err => res.status(400).json('Error: ' + err));
};