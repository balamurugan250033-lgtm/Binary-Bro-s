const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Event = require('./models/Event');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const seedData = async () => {
  // Clear existing data
  await User.deleteMany({});
  await Event.deleteMany({});

  // Create users
  const users = [];
  for (let i = 1; i <= 20; i++) {
    const hashedPassword = await bcrypt.hash('password', 10);
    const user = new User({
      name: `Student ${i}`,
      email: `student${i}@example.com`,
      password: hashedPassword,
      points: Math.floor(Math.random() * 100),
    });
    users.push(await user.save());
  }

  // Create coordinator
  const coordinatorPassword = await bcrypt.hash('password', 10);
  const coordinator = new User({
    name: 'Coordinator',
    email: 'coordinator@gfg.com',
    password: coordinatorPassword,
    role: 'coordinator',
  });
  await coordinator.save();

  // Create events
  const events = [
    { title: 'DSA Workshop', description: 'Learn DSA basics', date: new Date('2026-04-01'), time: '10:00 AM', location: 'Room 101', capacity: 50, points: 20 },
    { title: 'Coding Contest', description: 'Monthly coding challenge', date: new Date('2026-04-15'), time: '2:00 PM', location: 'Lab 1', capacity: 30, points: 30 },
    { title: 'Web Dev Seminar', description: 'Frontend technologies', date: new Date('2026-05-01'), time: '11:00 AM', location: 'Auditorium', capacity: 100, points: 15 },
    { title: 'Interview Prep', description: 'Mock interviews', date: new Date('2026-05-10'), time: '3:00 PM', location: 'Room 202', capacity: 25, points: 25 },
    { title: 'Hackathon', description: '24-hour coding event', date: new Date('2026-06-01'), time: '9:00 AM', location: 'Main Hall', capacity: 200, points: 50 },
  ];

  for (const eventData of events) {
    const event = new Event(eventData);
    // Register some users
    const numToRegister = Math.floor(Math.random() * 10) + 1;
    const registered = users.slice(0, numToRegister);
    event.registeredUsers = registered.map(u => u._id);
    await event.save();
    
    for (const user of registered) {
      user.registeredEvents.push(event._id);
      user.points += event.points;
      await user.save();
    }
  }

  console.log('Data seeded');
  process.exit();
};

seedData();