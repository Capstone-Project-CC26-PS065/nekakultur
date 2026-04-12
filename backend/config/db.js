const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "nekakultur_db",
  "root",
  "",
  {
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ DB Connected");
  } catch (err) {
    console.log("❌ DB Error:", err);
    throw err;
  }
};

module.exports = { sequelize, connectDB };