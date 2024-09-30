const { DataTypes } = require('sequelize');  // Import DataTypes here
const sequelize = require('../config/database');  // Import the database connection

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,  // Use DataTypes here
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = User;