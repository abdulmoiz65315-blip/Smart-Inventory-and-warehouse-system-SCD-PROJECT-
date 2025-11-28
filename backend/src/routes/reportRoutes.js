// src/routes/reportRoutes.js

const express = require("express");
const router = express.Router();

const { getDashboardSummary } = require("../services/reportingFacade");

// GET /api/report/summary
router.get("/summary", async (req, res) => {
  try {
    const summary = await getDashboardSummary();
    res.json(summary);
  } catch (err) {
    console.error("Error generating report summary:", err);
    res.status(500).json({ error: "Failed to generate report summary" });
  }
});

module.exports = router;
