const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  theater: {
    type: Schema.Types.ObjectId,
    ref: 'Theater',
    required: true
  },
  row: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['Standard', 'Premium'],
    required: true
  },
  status: {
    type: String,
    enum: ['Available', 'Booked'],
    required: true,
    default: 'Available'
  }
});

module.exports = mongoose.model('Seat', seatSchema);
