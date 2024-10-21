import React from "react";
import Completed from "./Completed";
import Active from "./Active";
import Failed from "./Failed";
import New from "./New";

function TaskList({ data }) {
        console.log(data)
  return (
    <div
      id="tasklist"
      className="w-full h-[52%] rounded-xl mt-10 px-10 flex items-center gap-4 flex-nowrap overflow-x-auto"
    >
      {data.tasks.map((elem,index)=>{
        if(elem.active) return <Active data={elem} key={index}/> 
        if(elem.completed) return <Completed data={elem} key={index}/> 
        if(elem.failed) return <Failed data={elem} key={index}/> 
        if(elem.new) return <New data={elem} key={index} /> 
      })}
    </div>
  );
}

export default TaskList;
