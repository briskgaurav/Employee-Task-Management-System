import React from "react";
import Header from "../Others/Header";
import TaskList from "../Tasklist/TaskList";
import TaskListNumber from "../Others/TaskListNumber";

function EmployeeDashboard({data}) {
  return (

    <div className="h-screen w-full">
     
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
