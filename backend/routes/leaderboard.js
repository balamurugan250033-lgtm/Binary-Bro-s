const express = require('express');
const db = require('../db');
const User = require('../models/User');

const router = express.Router();

// Get leaderboard
router.get('/', async (req, res) => {
  try {
    if (process.env.MONGODB_URI) {
      const students = await User.find({ role: 'student' })
        .sort({ points: -1 })
        .select('name email points');
      return res.json(students);
    }

    const data = db.data;
    let students = data.users.filter(u => u.role === 'student');
    students = students.sort((a, b) => b.points - a.points);
    
    // Select specific fields
    students = students.map(u => ({
      _id: u._id,
      name: u.name,
      email: u.email,
      points: u.points
    }));
    
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;