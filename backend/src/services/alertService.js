// src/services/alertService.js
const pool = require("../config/db");

async function createLowStockAlert(item) {
  const message = `Low stock for ${item.name} (${item.sku}): quantity=${item.quantity}, min=${item.min_stock_level}`;

  const sql = `
    INSERT INTO alerts (item_id, message, severity)
    VALUES (?, ?, ?)
  `;

  const params = [item.id, message, "LOW_STOCK"];

  await pool.query(sql, params);
}

module.exports = {
  createLowStockAlert
};
