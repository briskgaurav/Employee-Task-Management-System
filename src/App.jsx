import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);

  function handleLogin(email, password) {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
    } else if (email === "employee@example.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="bg-zinc-900">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
}

export default App;
