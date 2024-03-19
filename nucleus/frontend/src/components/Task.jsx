import React from "react";

function Task(props) {
  return (
    <div className="task">
      <h2>Title:{props.title}</h2>
      <h2>ID:{props.taskID}</h2>
      <p>Date:{props.tDate}</p>
      <p>Target-Date:{props.targetDate}</p>
      <p>Description:{props.tDesc}</p>
      <ul>
        <p>ToDoList:{props.toDoList}</p>
        <p>{props.toDoList}</p>
      </ul>
      <h2>Status:{props.status}</h2>
    </div>
  )
}

export default Task;