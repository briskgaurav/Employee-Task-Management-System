import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AdminTasks() {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div className="w-full px-10 py-5">
      <div
        id="tasklist"
        className="w-full bg-zinc-800 p-5 flex flex-col gap-3 rounded-md h-48 overflow-y-auto"
      >
        {userData.map(function(elem, index) {
          return (
            <div key={index} className="w-full flex px-10 py-3 justify-between items-center font-semibold bg-zinc-300/20 rounded-md">
              <h1 className="text-white font-bold">{elem.firstname}</h1>
              <div className="flex gap-20">
              <h1 className="text-zinc-400">New Tasks: <span className="font-bold text-yellow-400">{elem.taskcount.newTask}</span></h1>
              <h1 className="text-zinc-400">Active Tasks: <span className="font-bold text-blue-400 ">{elem.taskcount.active}</span></h1>
              <h1 className="text-zinc-400">Completed Tasks: <span className="font-bold text-green-400">{elem.taskcount.completed}</span></h1>
              <h1 className="text-zinc-400">Failed Tasks: <span className="font-bold text-red-400">{elem.taskcount.failed}</span></h1>
             
              
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminTasks;
