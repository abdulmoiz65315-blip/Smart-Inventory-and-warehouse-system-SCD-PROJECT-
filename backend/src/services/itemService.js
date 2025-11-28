// src/services/itemService.js

const pool = require("../config/db");
const ItemFactory = require("../factories/ItemFactory");
const { createLowStockAlert } = require("./alertService");

// GET all items
async function getAllItems() {
  const [rows] = await pool.query("SELECT * FROM items");
  return rows;
}

// CREATE item
async function createItem(data) {
  // Factory se item structure banta hai
  const item = ItemFactory.createItem(data);

  const sql = `
    INSERT INTO items
      (id, name, sku, category, quantity, min_stock_level, warehouse_location_id, labels)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    item.id,
    item.name,
    item.sku,
    item.category,
    item.quantity,
    item.min_stock_level,
    item.warehouse_location_id,
    item.labels
  ];

  // DB me insert
  await pool.query(sql, params);

  // Low stock ho to alert create karo
  if (item.quantity < item.min_stock_level) {
    await createLowStockAlert(item);
  }

  return item;
}

module.exports = {
  getAllItems,
  createItem
};
