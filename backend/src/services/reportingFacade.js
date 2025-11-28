// src/services/reportingFacade.js

const pool = require("../config/db");

// Inventory summary
async function getInventorySummary() {
  const [[{ total_items }]] = await pool.query(
    "SELECT COUNT(*) AS total_items FROM items"
  );

  const [[{ total_quantity }]] = await pool.query(
    "SELECT COALESCE(SUM(quantity), 0) AS total_quantity FROM items"
  );

  const [[{ low_stock_items }]] = await pool.query(
    "SELECT COUNT(*) AS low_stock_items FROM items WHERE quantity < min_stock_level"
  );

  return {
    total_items,
    total_quantity,
    low_stock_items
  };
}

// Supplier summary
async function getSupplierSummary() {
  const [[{ total_suppliers }]] = await pool.query(
    "SELECT COUNT(*) AS total_suppliers FROM suppliers"
  );
  return { total_suppliers };
}

// Alerts summary
async function getAlertSummary() {
  const [rows] = await pool.query(
    "SELECT severity, COUNT(*) AS count FROM alerts GROUP BY severity"
  );
  return rows;
}

// 🎯 Facade — combine all summaries
async function getDashboardSummary() {
  const [inventory, suppliers, alerts] = await Promise.all([
    getInventorySummary(),
    getSupplierSummary(),
    getAlertSummary()
  ]);

  return {
    inventory,
    suppliers,
    alerts
  };
}

module.exports = {
  getInventorySummary,
  getSupplierSummary,
  getAlertSummary,
  getDashboardSummary
};
