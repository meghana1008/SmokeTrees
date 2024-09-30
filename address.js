// models/address.js
const { DataTypes } = require('sequelize');  // Import DataTypes here
const sequelize = require('../config/database');  // Import the database connection
const User = require('./user');  // Import the User model to set up the relation

// Define the Address model
const Address = sequelize.define('Address', {
  address: {
    type: DataTypes.STRING,  // Use DataTypes here
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,  // Foreign key to User model
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

module.exports = Address;
