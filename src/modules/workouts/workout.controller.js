const Workout = require('./workout.model');

// CREATE workout
exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({
      user: req.user.id,
      title: req.body.title,
      notes: req.body.notes,
      duration: req.body.duration
    });

    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET all workouts for logged-in user
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single workout
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user.id
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE workout
exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE workout
exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
