// src/App.js

import React, { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import Suppliers from "./components/Suppliers";
import AddSupplier from "./components/AddSupplier";
import Alerts from "./components/Alerts";

const API_BASE = "http://localhost:5000";

function App() {
  const [view, setView] = useState("dashboard");

  const [summary, setSummary] = useState(null);
  const [items, setItems] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ----- Backend se data load karna -----
  async function loadAll() {
    try {
      setLoading(true);
      setError("");

      const [summaryRes, itemsRes, suppliersRes] = await Promise.all([
        fetch(`${API_BASE}/api/report/summary`).then((r) => r.json()),
        fetch(`${API_BASE}/api/items`).then((r) => r.json()),
        fetch(`${API_BASE}/api/suppliers`).then((r) => r.json()),
      ]);

      setSummary(summaryRes);
      setItems(itemsRes);
      setSuppliers(suppliersRes);
    } catch (err) {
      console.error(err);
      setError("Backend se data load nahi ho raha. Server check karo.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  // Item / Supplier create hone ke baad kya karna hai
  function handleItemCreated() {
    loadAll();
    setView("items");
  }

  function handleSupplierCreated() {
    loadAll();
    setView("suppliers");
  }

  let content = null;

  if (view === "dashboard") {
    content = <Dashboard summary={summary} loading={loading} />;
  } else if (view === "items") {
    content = <Items items={items} loading={loading} />;
  } else if (view === "suppliers") {
    content = <Suppliers suppliers={suppliers} loading={loading} />;
  } else if (view === "addItem") {
    content = <AddItem onCreated={handleItemCreated} />;
  } else if (view === "addSupplier") {
    content = <AddSupplier onCreated={handleSupplierCreated} />;
  } else if (view === "alerts") {
    content = (
      <Alerts alerts={(summary && summary.alerts) || []} loading={loading} />
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Smart Inventory & Warehouse System</h1>
        <p className="subtitle">
          SCD Project — Express + MySQL + React (Design Patterns)
        </p>
      </header>

      <Navbar setView={setView} />

      <button className="nav-btn refresh" onClick={loadAll}>
        Refresh Data
      </button>

      {error && <div className="error-box">{error}</div>}

      <main className="main">
        {loading && <div className="loading">Loading...</div>}
        {!loading && content}
      </main>

      <footer className="footer">
        Backend: Node.js + Express + MySQL | Frontend: React | Patterns:
        Factory, Composite, Decorator, Facade, Observer-style Alerts
      </footer>
    </div>
  );
}

export default App;
