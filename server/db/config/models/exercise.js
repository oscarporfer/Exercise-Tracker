const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  bodyPart: {
    type: String,
    required: true,
    trim: true
  },

  duration: {
    type: Number
  },

  intensityLevel: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard']
  },
  repetitions: {
    type: Number
  }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
