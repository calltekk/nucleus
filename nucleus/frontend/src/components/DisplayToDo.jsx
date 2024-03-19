import React from 'react';
import dbTask from '../SampleTaskFile/SampleTask';
import Task from './Task';


function DisplayToDo() {
  console.log(dbTask);

  return (
    <div>
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

export default DisplayToDo