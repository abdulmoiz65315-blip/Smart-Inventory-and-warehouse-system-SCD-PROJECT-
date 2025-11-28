import React, { useEffect, useState } from "react";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  const loadSuppliers = async () => {
    const res = await fetch("http://localhost:5000/api/suppliers");
    const data = await res.json();
    setSuppliers(data);
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  return (
    <div>
      <h2>Suppliers List</h2>
      <button onClick={loadSuppliers}>Refresh</button>

      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Supplier Name</th>
            <th>Contact Person</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.contact_person}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
