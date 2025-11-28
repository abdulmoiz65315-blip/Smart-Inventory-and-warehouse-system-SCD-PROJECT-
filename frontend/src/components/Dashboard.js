import React from "react";

function Card({ title, value, subtitle }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-value">{value}</div>
      {subtitle && <div className="card-subtitle">{subtitle}</div>}
    </div>
  );
}

export default function Dashboard({ summary, loading }) {
  if (loading && !summary) {
    return <p>Loading summary...</p>;
  }

  if (!summary) {
    return <p>No summary data yet.</p>;
  }

  const { inventory, suppliers, alerts } = summary;

  return (
    <div>
      <h2>Dashboard Summary</h2>
      <div className="card-grid">
        <Card
          title="Total Items"
          value={inventory.total_items}
          subtitle="Unique SKUs"
        />
        <Card
          title="Total Quantity"
          value={inventory.total_quantity}
          subtitle="All items quantity"
        />
        <Card
          title="Low Stock Items"
          value={inventory.low_stock_items}
          subtitle="Below minimum stock"
        />
        <Card
          title="Suppliers"
          value={suppliers.total_suppliers}
          subtitle="Registered suppliers"
        />
      </div>

      <h3 style={{ marginTop: 24 }}>Alerts by Severity</h3>
      {alerts && alerts.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Severity</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((a) => (
              <tr key={a.severity}>
                <td>{a.severity}</td>
                <td>{a.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No alerts yet.</p>
      )}
    </div>
  );
}
