// src/decorators/ItemDecorators.js

// Base helper: copy item
function cloneItem(item) {
  return { ...item };
}

// 🎨 Fragile decorator
function withFragileLabel(item) {
  const decorated = cloneItem(item);
  decorated.labels = (decorated.labels || "") + " FRAGILE";
  decorated.isFragile = true;
  return decorated;
}

// 🏋️ Heavy decorator
function withHeavyLabel(item) {
  const decorated = cloneItem(item);
  decorated.labels = (decorated.labels || "") + " HEAVY";
  decorated.isHeavy = true;
  return decorated;
}

// 🚨 Critical stock decorator
function withCriticalStockLabel(item) {
  const decorated = cloneItem(item);
  decorated.labels = (decorated.labels || "") + " CRITICAL_STOCK";
  decorated.isCritical = true;
  return decorated;
}

// Simple demo (run: node src/decorators/ItemDecorators.js)
if (require.main === module) {
  const baseItem = {
    id: "demo-1",
    name: "Glass Bottle",
    sku: "GLASS-001",
    quantity: 2,
    min_stock_level: 10,
    labels: ""
  };

  console.log("Base item:", baseItem);
  console.log("Fragile item:", withFragileLabel(baseItem));
  console.log("Heavy + Critical item:", withCriticalStockLabel(withHeavyLabel(baseItem)));
}

module.exports = {
  withFragileLabel,
  withHeavyLabel,
  withCriticalStockLabel
};
