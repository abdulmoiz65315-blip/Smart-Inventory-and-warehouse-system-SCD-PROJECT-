// src/warehouse/WarehouseDemo.js

const WarehouseGroup = require("./WarehouseGroup");
const WarehouseBin = require("./WarehouseBin");

/**
 * Yeh function Composite Pattern ka example build karta hai:
 * Warehouse A
 *   Section 1
 *     Rack A
 *       Bin A1
 *       Bin A2
 *     Rack B
 *   Section 2
 *     Rack C
 */

function buildSampleWarehouseTree() {
  // Root warehouse
  const warehouseA = new WarehouseGroup("Warehouse A");

  // Sections
  const section1 = new WarehouseGroup("Section 1");
  const section2 = new WarehouseGroup("Section 2");

  // Racks
  const rackA = new WarehouseGroup("Rack A");
  const rackB = new WarehouseGroup("Rack B");
  const rackC = new WarehouseGroup("Rack C");

  // Bins (leaf nodes)
  const binA1 = new WarehouseBin("A1", 100);
  const binA2 = new WarehouseBin("A2", 150);
  const binB1 = new WarehouseBin("B1", 80);
  const binC1 = new WarehouseBin("C1", 120);
  const binC2 = new WarehouseBin("C2", 90);

  // Build tree:
  rackA.add(binA1);
  rackA.add(binA2);

  rackB.add(binB1);

  rackC.add(binC1);
  rackC.add(binC2);

  section1.add(rackA);
  section1.add(rackB);

  section2.add(rackC);

  warehouseA.add(section1);
  warehouseA.add(section2);

  return warehouseA;
}

// Agar yeh file direct run ki jaye (node src/warehouse/WarehouseDemo.js)
// to yeh demo print karega
if (require.main === module) {
  const warehouseTree = buildSampleWarehouseTree();

  console.log("📦 Composite Pattern Demo: Warehouse Structure\n");
  warehouseTree.display(0);
}

module.exports = {
  buildSampleWarehouseTree,
};
