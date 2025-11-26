// src/services/itemService.js
const pool = require("../config/db");
const ItemFactory = require("../factories/ItemFactory");

async function getAllItems() {
  const [rows] = await pool.query("SELECT * FROM items");
  return rows;
}

async function createItem(data) {
  // ItemFactory se object banao
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

  await pool.query(sql, params);

  return item;
}

module.exports = {
  getAllItems,
  createItem
};
