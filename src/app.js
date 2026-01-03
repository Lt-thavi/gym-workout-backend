const express = require('express');
const cors = require('cors');
const userRoutes = require('./modules/users/user.routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);


// health check
app.get('/', (req, res) => {
  res.json({ status: 'Gym Workout API running' });
});

module.exports = app;
