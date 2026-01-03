const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const controller = require('./workout.controller');

// All routes are protected
router.post('/', auth, controller.createWorkout);
router.get('/', auth, controller.getWorkouts);
router.get('/:id', auth, controller.getWorkoutById);
router.put('/:id', auth, controller.updateWorkout);
router.delete('/:id', auth, controller.deleteWorkout);

module.exports = router;
