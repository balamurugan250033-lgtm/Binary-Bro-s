const express = require('express');
const Event = require('../models/Event');
const User = require('../models/User');
const { auth } = require('./auth');

const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('registeredUsers', 'name email');
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create event (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Register for event
router.post('/register/:id', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    if (event.registeredUsers.length >= event.capacity) return res.status(400).json({ error: 'Event full' });
    if (event.registeredUsers.includes(req.user.id)) return res.status(400).json({ error: 'Already registered' });
    
    event.registeredUsers.push(req.user.id);
    await event.save();
    
    const user = await User.findById(req.user.id);
    user.registeredEvents.push(event._id);
    user.points += event.points;
    await user.save();
    
    res.json({ message: 'Registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update event
router.put('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete event
router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'coordinator') return res.status(403).json({ error: 'Access denied' });
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;