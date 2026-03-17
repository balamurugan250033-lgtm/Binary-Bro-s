const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

let sequelize;

if (process.env.MYSQL_URL) {
  // Use connection string if available (common for Render/Railway/Heroku MySQL)
  sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false
  });
} else if (process.env.MYSQL_HOST) {
  // Use individual parameters
  sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || 'gfg_db',
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || '',
    {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
      logging: false
    }
  );
}

module.exports = sequelize;
