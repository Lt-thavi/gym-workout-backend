const Exercise = require("./exercise.model");

// CREATE
exports.createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(exercise);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ ALL
exports.getExercises = async (req, res) => {
  const exercises = await Exercise.find();
  res.json(exercises);
};

// READ ONE
exports.getExerciseById = async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);
  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" });
  }
  res.json(exercise);
};

// UPDATE
exports.updateExercise = async (req, res) => {
  const exercise = await Exercise.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(exercise);
};

// DELETE
exports.deleteExercise = async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id);
  res.json({ message: "Exercise deleted" });
};
