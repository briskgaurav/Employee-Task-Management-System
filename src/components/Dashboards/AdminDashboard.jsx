import React from "react";
import Header from "../Others/Header";
import AdminForm from "../Others/AdminForm";
import AdminTasks from "../Tasklist/AdminTasks";

function AdminDashboard() {
  return (
    <div className="h-screen w-full">
      <Header />
      <AdminForm />
      <AdminTasks />
    </div>
  );
}

export default AdminDashboard;
