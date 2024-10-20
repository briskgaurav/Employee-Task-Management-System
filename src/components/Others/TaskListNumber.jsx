import React from 'react'

function TaskListNumber({data}) {
  return (
    <div className="flex justify-between flex-nowrap items-center gap-4 px-10 mt-5">
        
        <div className="w-1/2 bg-purple-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">{data.taskcount.active}</h1>
          <h3 className="text-white text-xl font-medium">Active Task</h3>
        </div>
        <div className="w-1/2 bg-red-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">{data.taskcount.failed}</h1>
          <h3 className="text-white text-xl font-medium">Failed Task</h3>
        </div>
        <div className="w-1/2 bg-green-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">{data.taskcount.completed}</h1>
          <h3 className="text-white text-xl font-medium">Completed Task</h3>
        </div>
        <div className="w-1/2 bg-yellow-400 px-10 py-6 rounded-xl">
          <h1 className="text-white text-4xl font-bold">{data.taskcount.newTask}</h1>
          <h3 className="text-white text-xl font-medium">New Task</h3>
        </div>
      </div>
  )
}

export default TaskListNumber