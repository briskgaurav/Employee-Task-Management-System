import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";



function AdminForm() {

  const [userData, setUserData] = useContext(AuthContext);
  

  const [task,setTask] = useState('')
  const [assign,setAssign] = useState('')
  const [category,setCategory] = useState('')
  const [date,setDate] = useState('')
  const [description,setDescription] = useState('')

  const [newTasks, setNewTasks] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    setNewTasks({task, category, date, description,active:false,newTask:true,completed:false,failed:false})

    const data = userData
    
    data.forEach((item) => {
      if(assign == item.firstname){
        item.tasks.push(newTasks)
        item.taskcount.newTask += 1;
      }
    })
    setUserData(data);
    console.log(data)

    setAssign('');
    setCategory('');
    setDate('');
    setDescription('');
    setTask('');

    
  }

  return (
    <div className=" h-fit px-10">
      <form onSubmit={(e)=>{handleSubmit(e)}} className="flex p-5 bg-zinc-800 rounded-lg gap-3">
        <div className="w-full gap-3">
          <div className="flex flex-col gap-1 w-1/2 mb-2">
            <h1 className="text-zinc-400 font-semibold">Task Title</h1>
            <input value={task} onChange={(e)=>{setTask(e.target.value)}}
              className="bg-transparent text-zinc-200 border-2 rounded-md px-2 py-1 border-zinc-500"
              type="text"
              placeholder="Make a task title"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 mb-2">
            <h1 className="text-zinc-400 font-semibold">Date</h1>
            <input value={date} onChange={(e)=>{setDate(e.target.value)}}
              className="bg-transparent text-zinc-200 border-2 rounded-md px-2 py-1 border-zinc-500"
              type="date"
              placeholder="Make a task title"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 mb-2">
            <h1 className="text-zinc-400 font-semibold">Assign To</h1>
            <input value={assign} onChange={(e)=>{setAssign(e.target.value)}}
              className="bg-transparent text-zinc-200 border-2 rounded-md px-2 py-1 border-zinc-500"
              type="text"
              placeholder="Emoloyee name"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2">
            <h1 className="text-zinc-400 font-semibold">Category</h1>
            <input value={category} onChange={(e)=>{setCategory(e.target.value)}}
              className="bg-transparent text-zinc-200 border-2 rounded-md px-2 py-1 border-zinc-500"
              type="text"
              placeholder="design, development, etc"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-zinc-400">Description</h1>
          <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} className="bg-transparent mb-2 w-full border-2 rounded-md px-2 border-zinc-500" id="" cols="50" rows="9"></textarea>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md w-full">Create Task</button>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;
