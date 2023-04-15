const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const theaterController = require('../controllers/theaterController');
const seatController = require('../controllers/seatController');

router.get('/movies', movieController.getMovies);
router.get('/movies/:id', movieController.getMovieById);
router.post('/movies', movieController.createMovie);
router.put('/movies/:id', movieController.updateMovie);
router.delete('/movies/:id', movieController.deleteMovie);

router.get('/theaters', theaterController.getTheaters);
router.get('/theaters/:id', theaterController.getTheaterById);
router.post('/theaters', theaterController.createTheater);
router.put('/theaters/:id', theaterController.updateTheater);
router.delete('/theaters/:id', theaterController.deleteTheater);

router.get('/seats', seatController.getSeats);
router.get('/seats/:id', seatController.getSeatById);
router.post('/seats', seatController.createSeat);
router.put('/seats/:id', seatController.updateSeat);
router.delete('/seats/:id', seatController.deleteSeat);

module.exports = router;