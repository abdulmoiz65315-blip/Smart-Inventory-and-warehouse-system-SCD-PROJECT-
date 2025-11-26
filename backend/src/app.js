// src/app.js


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const itemRoutes = require("./routes/itemRoutes");
app.use("/api/items", itemRoutes);


// Test DB connection
(async () => {
  try {
    const [rows] = await pool.query("SELECT 1 AS test");
    console.log("✅ MySQL connected, test query:", rows[0]);
  } catch (err) {
    console.error("❌ MySQL connection error:", err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("Smart Inventory & Warehouse Backend (MySQL) Running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
