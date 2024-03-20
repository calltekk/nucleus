import React from "react";
import { CircleCheckBig } from "lucide-react";

function CompletedTasks(props) {
    // console.log("Props received in AnotherComponent:", props);
  return (
    <div className="bg-slate-300 bg-opacity-5 p-11 rounded-xl max-w-[80vw]">
      <h1 className="text-4xl mb-10 text-center">Completed Tasks</h1>
      <div className="task-item my-3 pe-5 py-1 flex justify-center flex-wrap items-start gap-10" >
        {props.array.map(item => (
          <div className="bg-slate-300 bg-opacity-10 px-5 py-3 rounded-xl flex flex-col items-center w-40 hover:bg-opacity-20 hover:scale-110 duration-500" key={item.id}>
            <CircleCheckBig size={20} className="m-3" />
            <p className="text-center my-5">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CompletedTasks;