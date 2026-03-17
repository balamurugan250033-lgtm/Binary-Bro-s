const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // Check MySQL first
    if (User) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) return res.status(400).json({ error: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ name, email, password: hashedPassword });
      return res.status(201).json({ message: 'User registered' });
    }

    // Fallback to local JSON
    const data = db.data;
    if (data.users.find(u => u.email === email)) {
       return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      _id: db.generateId(),
      name,
      email,
      password: hashedPassword,
      role: 'student',
      points: 0,
      registeredEvents: [],
      createdAt: new Date().toISOString()
    };
    
    data.users.push(user);
    db.save(data);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.log('Registration error:', err);
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (User) {
      const user = await User.findOne({ where: { email } });
      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'fallback_secret');
      return res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    }

    // Fallback to local JSON
    const data = db.data;
    const user = data.users.find(u => u.email === email);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'fallback_secret');
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Middleware to verify token
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Access denied' });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = { router, auth };