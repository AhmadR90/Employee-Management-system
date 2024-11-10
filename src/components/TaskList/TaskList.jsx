import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto py-5 w-full  mt-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((elem)=>{
        if(elem.active){
          return <AcceptTask data={elem}/>
        }
        if(elem.newTask){
          return <NewTask data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask data={elem}/>
        }
        if(elem.failed){
          return <FailedTask data={elem}/>
        }
      })}
      
      
    </div>
  );
};

export default TaskList;
