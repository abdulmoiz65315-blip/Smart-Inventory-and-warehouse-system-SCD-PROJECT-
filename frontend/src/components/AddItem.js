import React, { useState } from "react";

export default function AddItem() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    category: "",
    quantity: "",
    min_stock_level: "",
    warehouse_location_id: "",
    labels: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveItem = async () => {
    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Item added!");
  };

  return (
    <div>
      <h2>Add New Item</h2>

      <input placeholder="Name" name="name" onChange={handleChange} /> <br />
      <input placeholder="SKU" name="sku" onChange={handleChange} /> <br />
      <input placeholder="Category" name="category" onChange={handleChange} /> <br />
      <input placeholder="Quantity" name="quantity" onChange={handleChange} /> <br />
      <input placeholder="Min Stock Level" name="min_stock_level" onChange={handleChange} /> <br />
      <input placeholder="Warehouse Location" name="warehouse_location_id" onChange={handleChange} /> <br />
      <input placeholder="Labels" name="labels" onChange={handleChange} /> <br />

      <button onClick={saveItem}>Add Item</button>
    </div>
  );
}
