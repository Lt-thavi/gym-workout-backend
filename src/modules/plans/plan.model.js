const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    goal: {
      type: String
    },
    durationWeeks: {
      type: Number
    },
    workouts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout"
      }
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plan", planSchema);
