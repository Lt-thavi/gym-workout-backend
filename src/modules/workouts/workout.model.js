const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    notes: {
      type: String
    },
    duration: {
      type: Number // minutes
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
