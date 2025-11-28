// src/factories/SupplierFactory.js
const { v4: uuidv4 } = require("uuid");

class SupplierFactory {
  static createSupplier(data) {
    return {
      id: uuidv4(),
      name: data.name,
      contact_person: data.contact_person || null,
      email: data.email || null,
      phone: data.phone || null
    };
  }
}

module.exports = SupplierFactory;
