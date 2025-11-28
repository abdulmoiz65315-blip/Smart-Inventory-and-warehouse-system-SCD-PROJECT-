import React, { useState } from "react";

export default function AddSupplier() {
  const [form, setForm] = useState({
    name: "",
    contact_person: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveSupplier = async () => {
    await fetch("http://localhost:5000/api/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Supplier added!");
  };

  return (
    <div>
      <h2>Add Supplier</h2>

      <input placeholder="Name" name="name" onChange={handleChange} /> <br />
      <input placeholder="Contact Person" name="contact_person" onChange={handleChange} /> <br />
      <input placeholder="Email" name="email" onChange={handleChange} /> <br />
      <input placeholder="Phone" name="phone" onChange={handleChange} /> <br />

      <button onClick={saveSupplier}>Add Supplier</button>
    </div>
  );
}
