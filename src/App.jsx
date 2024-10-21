import React, { useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { useEffect } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUser, setloggedInUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUser(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (employee) => employee.email === email && employee.pass === password
      );
      if (employee) {
        setUser("employee");
        setloggedInUser(employee);
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="bg-zinc-900">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </div>

  );
}

export default App;
