const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB, sequelize } = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// start server
const start = async () => {
  await connectDB();

  // sync database
  await sequelize.sync({ alter: true });

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
};

start();