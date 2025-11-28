// src/warehouse/WarehouseBin.js

const WarehouseComponent = require("./WarehouseComponent");

class WarehouseBin extends WarehouseComponent {
  constructor(name, capacity = 0) {
    super(name);
    this.capacity = capacity; // optional info: kitna stock aa sakta hai
  }

  // Leaf nodes ke paas children nahi hote,
  // isliye ye methods meaningful kaam nahi karte
  add() {
    throw new Error("Cannot add child to a leaf WarehouseBin");
  }

  remove() {
    throw new Error("Cannot remove child from a leaf WarehouseBin");
  }

  getChildren() {
    return [];
  }

  // Sirf apna naam + capacity print karega
  display(indent = 0) {
    console.log(
      `${" ".repeat(indent)}- Bin: ${this.name} (capacity: ${this.capacity})`
    );
  }
}

module.exports = WarehouseBin;
