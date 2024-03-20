import React from 'react'


function CompletedTasks(props) {
    console.log("Props received in AnotherComponent:", props);
  return (
    // <div>
    //   <h2>Completed Tasks</h2>
    //   <ul>
    //     {props.array.map(item => (
    //       <li key={item.id}>{item.text}</li>
    //     ))}
    //   </ul>
    // </div>

    <>
        <div>
            <h1 className="text-4xl mb-10">Completed Tasks</h1>
            <div className="task-item my-3 pe-5 py-1 flex justify-between flex-col items-center group" >
            {props.array.map(item => (
                <p className="rounded-lg border-2 border-slate-500 min-w-56 max-w-56 px-5 py-2 my-3" key={item.id}>{item.text}</p>
                ))}
          </div>
        </div>
    </>
  )
}

export default CompletedTasks