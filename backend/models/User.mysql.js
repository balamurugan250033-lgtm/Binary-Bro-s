const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize ? sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('student', 'coordinator'),
    defaultValue: 'student'
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}) : null;

module.exports = User;
