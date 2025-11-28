// src/services/supplierService.js

const pool = require("../config/db");
const SupplierFactory = require("../factories/SupplierFactory");

// GET all suppliers
async function getAllSuppliers() {
  const [rows] = await pool.query("SELECT * FROM suppliers");
  return rows;
}

// CREATE supplier
async function createSupplier(data) {
  // Factory se supplier structure banta hai
  const supplier = SupplierFactory.createSupplier(data);

  const sql = `
    INSERT INTO suppliers (id, name, contact_person, email, phone)
    VALUES (?, ?, ?, ?, ?)
  `;

  const params = [
    supplier.id,
    supplier.name,
    supplier.contact_person,
    supplier.email,
    supplier.phone
  ];

  await pool.query(sql, params);

  return supplier;
}

module.exports = {
  getAllSuppliers,
  createSupplier
};
