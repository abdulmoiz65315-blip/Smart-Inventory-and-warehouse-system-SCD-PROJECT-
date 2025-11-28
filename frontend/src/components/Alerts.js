import React, { useEffect, useState } from "react";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  const loadAlerts = async () => {
    const res = await fetch("http://localhost:5000/api/alerts");
    const data = await res.json();
    setAlerts(data);
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <button onClick={loadAlerts}>Refresh</button>

      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Message</th>
            <th>Severity</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((a) => (
            <tr key={a.id}>
              <td>{a.item_id}</td>
              <td>{a.message}</td>
              <td>{a.severity}</td>
              <td>{a.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
