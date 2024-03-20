import React from 'react'


function CompletedTasks(props) {
    console.log("Props received in AnotherComponent:", props);
  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {props.array.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default CompletedTasks