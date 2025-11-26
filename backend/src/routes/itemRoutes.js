// src/routes/itemRoutes.js
const express = require("express");
const router = express.Router();
const { getAllItems, createItem } = require("../services/itemService");

// GET /api/items  → sab items
router.get("/", async (req, res) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    console.error("GET /items error:", err);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// POST /api/items  → new item create
router.post("/", async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error("POST /items error:", err);
    res.status(400).json({ error: "Failed to create item" });
  }
});

module.exports = router;
