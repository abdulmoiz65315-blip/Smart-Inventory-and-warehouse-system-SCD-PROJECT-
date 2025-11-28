import React, { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const res = await fetch("http://localhost:5000/api/items");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      <h2>All Items</h2>
      <button onClick={loadItems}>Refresh</button>

      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Min Stock</th>
            <th>Warehouse</th>
            <th>Labels</th>
          </tr>
        </thead>

        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.sku}</td>
              <td>{i.category}</td>
              <td>{i.quantity}</td>
              <td>{i.min_stock_level}</td>
              <td>{i.warehouse_location_id}</td>
              <td>{i.labels}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
