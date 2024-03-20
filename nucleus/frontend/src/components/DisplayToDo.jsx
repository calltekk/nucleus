import React from "react";
import CompletedTasks from "../components/CompletedTasks";


function DisplayToDo() {
  const storedArray = JSON.parse(localStorage.getItem("completedTasks")) || [];

  return (
    <div className="h-dvh flex flex-col lg:flex-row flex-wrap gap-3 items-start py-10 justify-evenly"> 
      <CompletedTasks array={storedArray}/>
    </div>
  )
}

export default DisplayToDo;