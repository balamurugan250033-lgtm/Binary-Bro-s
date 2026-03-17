const express = require('express');
const db = require('../db');
const Event = require('../models/Event');
const User = require('../models/User');
const { auth } = require('./auth');

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    if (process.env.MONGODB_URI) {
      const events = await Event.find().populate('registeredUsers', 'name email');
      return res.json(events);
    }

    const data = db.data;
    // populate registeredUsers
    const events = data.events.map(event => {
      return {
        ...event,
        registeredUsers: event.registeredUsers.map(userId => {
           const u = data.users.find(user => user._id === userId);
           return u ? { name: u.name, email: u.email, _id: u._id } : { _id: userId };
        })
      }
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create event (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const data = db.data;
    const user = data.users.find(u => u._id === req.user.id);
    if (!user || user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    
    const event = {
      _id: db.generateId(),
      ...req.body,
      registeredUsers: [],
      points: req.body.points || 10,
      createdAt: new Date().toISOString()
    };
    
    data.events.push(event);
    db.save(data);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Register for event
router.post('/register/:id', auth, async (req, res) => {
  try {
    const data = db.data;
    const eventIndex = data.events.findIndex(e => e._id === req.params.id);
    if (eventIndex === -1) return res.status(404).json({ error: 'Event not found' });
    
    const event = data.events[eventIndex];
    if (event.registeredUsers.length >= event.capacity) return res.status(400).json({ error: 'Event full' });
    if (event.registeredUsers.includes(req.user.id)) return res.status(400).json({ error: 'Already registered' });
    
    event.registeredUsers.push(req.user.id);
    
    const userIndex = data.users.findIndex(u => u._id === req.user.id);
    if (userIndex !== -1) {
      data.users[userIndex].registeredEvents.push(event._id);
      data.users[userIndex].points += (event.points || 10);
    }
    
    db.save(data);
    
    res.json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update event
router.put('/:id', auth, async (req, res) => {
  try {
    const data = db.data;
    const user = data.users.find(u => u._id === req.user.id);
    if (!user || user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    
    const eventIndex = data.events.findIndex(e => e._id === req.params.id);
    if (eventIndex === -1) return res.status(404).json({ error: 'Event not found' });
    
    data.events[eventIndex] = { ...data.events[eventIndex], ...req.body };
    db.save(data);
    
    res.json(data.events[eventIndex]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete event
router.delete('/:id', auth, async (req, res) => {
  try {
    const data = db.data;
    const user = data.users.find(u => u._id === req.user.id);
    if (!user || user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    
    data.events = data.events.filter(e => e._id !== req.params.id);
    db.save(data);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;