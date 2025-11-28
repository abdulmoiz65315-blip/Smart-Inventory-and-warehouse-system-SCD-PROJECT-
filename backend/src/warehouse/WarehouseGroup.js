// src/warehouse/WarehouseGroup.js

const WarehouseComponent = require("./WarehouseComponent");

class WarehouseGroup extends WarehouseComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter((child) => child !== component);
  }

  getChildren() {
    return this.children;
  }

  // Composite node apna naam print karega
  // aur phir apne saare child components ko display() bulayega
  display(indent = 0) {
    console.log(`${" ".repeat(indent)}- ${this.name}`);
    this.children.forEach((child) => child.display(indent + 2));
  }
}

module.exports = WarehouseGroup;
