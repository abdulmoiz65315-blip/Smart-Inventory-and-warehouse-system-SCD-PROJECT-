// src/routes/itemRoutes.js

const express = require("express");
const router = express.Router();

const { getAllItems, createItem } = require("../services/itemService");

// GET /api/items
router.get("/", async (req, res) => {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// POST /api/items
router.post("/", async (req, res) => {
  try {
    const item = await createItem(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(400).json({ error: "Failed to create item" });
  }
});

module.exports = router;
