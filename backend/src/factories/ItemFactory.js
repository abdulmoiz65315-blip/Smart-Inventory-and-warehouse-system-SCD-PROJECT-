// src/factories/ItemFactory.js
const { v4: uuidv4 } = require("uuid");

class ItemFactory {
  static createItem(data) {
    return {
      id: uuidv4(),
      name: data.name,
      sku: data.sku,
      category: data.category || null,
      quantity: data.quantity || 0,
      min_stock_level: data.min_stock_level || 10,
      warehouse_location_id: data.warehouse_location_id || null,
      labels: data.labels || null
    };
  }
}

module.exports = ItemFactory;
