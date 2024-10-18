import React from "react";
import Header from "../Others/Header";
import TaskList from "../Tasklist/TaskList";

function EmployeeDashboard() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="flex justify-between flex-nowrap items-center gap-4 px-10 mt-5">
        <div className="w-1/2 bg-purple-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">0</h1>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="w-1/2 bg-red-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">0</h1>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="w-1/2 bg-green-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">0</h1>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
        <div className="w-1/2 bg-yellow-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">0</h1>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
      </div>
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;
