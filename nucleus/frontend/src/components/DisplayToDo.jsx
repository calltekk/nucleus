import React from "react";
import dbTask from "../SampleTaskFile/SampleTask";
import Task from "./Task";


function DisplayToDo() {
  console.log(dbTask);

  return (
    <div className="h-dvh flex flex-col lg:flex-row flex-wrap gap-3 items-center justify-evenly"> 
     {dbTask.map((dbTask) =>(
      <Task 
        key={dbTask.taskID}
        title={dbTask.title}
        tDate ={dbTask.tDate}
        targetDate={dbTask.targetDate}
        tDesc={dbTask.tDesc}
        
        toDoList={dbTask.toDoList.map(toDoList =>
          <li key="toDoList">{toDoList}</li>)}       

       status={dbTask.status}
      />
    ))}
    </div>
  )
}

export default DisplayToDo;