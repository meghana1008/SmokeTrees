const User = require('./user');
const Address = require('./address');
const sequelize = require('../config/database');

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

sequelize.sync({ force: false })
  .then(() => console.log('Database & tables created!'));

module.exports = { User, Address };