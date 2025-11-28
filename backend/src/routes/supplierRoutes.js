// src/routes/supplierRoutes.js

const express = require("express");
const router = express.Router();

const {
  getAllSuppliers,
  createSupplier
} = require("../services/supplierService");

// GET /api/suppliers
router.get("/", async (req, res) => {
  try {
    const suppliers = await getAllSuppliers();
    res.json(suppliers);
  } catch (err) {
    console.error("Error fetching suppliers:", err);
    res.status(500).json({ error: "Failed to fetch suppliers" });
  }
});

// POST /api/suppliers
router.post("/", async (req, res) => {
  try {
    const supplier = await createSupplier(req.body);
    res.status(201).json(supplier);
  } catch (err) {
    console.error("Error creating supplier:", err);
    res.status(400).json({ error: "Failed to create supplier" });
  }
});

module.exports = router;
