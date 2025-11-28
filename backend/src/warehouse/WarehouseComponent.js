// src/warehouse/WarehouseComponent.js

class WarehouseComponent {
  constructor(name) {
    this.name = name;
  }

  add(component) {
    // Leaf nodes will not implement this
    throw new Error("add() not implemented");
  }

  remove(component) {
    // Leaf nodes will not implement this
    throw new Error("remove() not implemented");
  }

  getChildren() {
    // Leaf nodes will not implement this
    throw new Error("getChildren() not implemented");
  }

  display(indent = 0) {
    // Har subclass isko override karega
    throw new Error("display() not implemented");
  }
}

module.exports = WarehouseComponent;
