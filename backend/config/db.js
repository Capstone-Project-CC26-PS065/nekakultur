const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
});

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
