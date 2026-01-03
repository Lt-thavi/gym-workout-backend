const express = require('express');
const cors = require('cors');
const userRoutes = require('./modules/users/user.routes');
const workoutRoutes = require('./modules/workouts/workout.routes');
const exerciseRoutes = require("./modules/exercises/exercise.routes");
const planRoutes = require("./modules/plans/plan.routes");
const progressRoutes = require("./modules/progress/progress.routes");
const scheduleRoutes = require("./modules/schedules/schedule.routes");




const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/schedules", scheduleRoutes);



// health check
app.get('/', (req, res) => {
  res.json({ status: 'Gym Workout API running' });
});

module.exports = app;
