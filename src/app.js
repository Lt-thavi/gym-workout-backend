const express = require('express');
const cors = require('cors');
const userRoutes = require('./modules/users/user.routes');
const workoutRoutes = require('./modules/workouts/workout.routes');



const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/workouts', workoutRoutes);



// health check
app.get('/', (req, res) => {
  res.json({ status: 'Gym Workout API running' });
});

module.exports = app;
