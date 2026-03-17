const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// DB Connection
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.log('Using local JSON database (data.json) - Connect MONGODB_URI for production');
}

// Routes
app.use('/api/auth', require('./routes/auth').router);
app.use('/api/events', require('./routes/events'));
app.use('/api/leaderboard', require('./routes/leaderboard'));

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running! Access the frontend at http://localhost:5173');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});