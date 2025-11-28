// src/app.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");

// ROUTES IMPORTS
const itemRoutes = require("./routes/itemRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const reportRoutes = require("./routes/reportRoutes"); // NEW

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// -------------------------
// REGISTER ROUTES
// -------------------------
app.use("/api/items", itemRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/report", reportRoutes); // NEW

// -------------------------
// TEST DB CONNECTION
// -------------------------
(async () => {
  try {
    const [rows] = await pool.query("SELECT 1 AS test");
    console.log("✅ MySQL connected, test query:", rows[0]);
  } catch (err) {
    console.error("❌ MySQL connection error:", err.message);
  }
})();

// -------------------------
// DEFAULT ROUTE
// -------------------------
app.get("/", (req, res) => {
  res.send("Smart Inventory & Warehouse Backend (MySQL) Running");
});

// -------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
