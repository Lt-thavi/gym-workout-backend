const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    workout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
      required: true
    },
    scheduledDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["planned", "completed", "missed"],
      default: "planned"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Schedule", scheduleSchema);
