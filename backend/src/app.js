// backend/src/app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const itemRoutes = require("./routes/itemRoutes");
const supplierRoutes = require("./routes/supplierRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test DB connection
(async () => {
  try {
    const [rows] = await pool.query("SELECT 1 AS test");
    console.log("🟢 MySQL connected, test query:", rows[0]);
  } catch (err) {
    console.error("🔴 MySQL connection error:", err.message);
  }
})();

// Base route
app.get("/", (req, res) => {
  res.send("Smart Inventory & Warehouse Backend (MySQL) Running");
});

// API Routes
app.use("/api/items", itemRoutes);
app.use("/api/suppliers", supplierRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
