const fs = require('fs');
const path = require('path');

const dbFile = path.join(__dirname, 'data.json');

// Initial seed
const defaultEvents = [
  {
    _id: "evt_1",
    title: "Intro to Algorithms",
    description: "Learn basic algorithms and data structures.",
    date: new Date("2024-05-15").toISOString(),
    time: "10:00 AM",
    location: "Online",
    capacity: 100,
    registeredUsers: [],
    points: 10
  },
  {
    _id: "evt_2",
    title: "Web Development Bootcamp",
    description: "Full-stack development workshop.",
    date: new Date("2024-05-20").toISOString(),
    time: "2:00 PM",
    location: "Main Hall",
    capacity: 50,
    registeredUsers: [],
    points: 20
  }
];

if (!fs.existsSync(dbFile)) {
  fs.writeFileSync(dbFile, JSON.stringify({ users: [], events: defaultEvents }, null, 2));
}

function readData() {
  return JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2));
}

function generateId() {
  return Math.random().toString(36).substring(2, 15);
}

module.exports = {
  get data() {
    return readData();
  },
  save: (data) => writeData(data),
  generateId
};
