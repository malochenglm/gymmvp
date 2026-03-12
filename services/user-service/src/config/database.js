const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "user_service_db",
  "admin",
  "admin123",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = sequelize;