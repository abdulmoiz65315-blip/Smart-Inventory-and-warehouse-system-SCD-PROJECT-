import React from "react";

export default function Navbar({ setView }) {
  return (
    <nav
      style={{
        padding: "12px 0",
        marginTop: "8px",
        marginBottom: "8px",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        fontSize: "14px",
      }}
    >
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setView("dashboard")}
      >
        Dashboard
      </span>

      <span style={{ cursor: "pointer" }} onClick={() => setView("items")}>
        Items
      </span>

      <span style={{ cursor: "pointer" }} onClick={() => setView("addItem")}>
        Add Item
      </span>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => setView("suppliers")}
      >
        Suppliers
      </span>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => setView("addSupplier")}
      >
        Add Supplier
      </span>

      <span style={{ cursor: "pointer" }} onClick={() => setView("alerts")}>
        Alerts
      </span>
    </nav>
  );
}
