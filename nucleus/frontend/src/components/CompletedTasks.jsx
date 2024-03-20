import React from "react";
import { CircleCheckBig } from "lucide-react";
import moment from "moment";

function CompletedTasks(props) {

  const readableDate = (item) => {
    if (!item.completedOn) {
      return ("")
    } else {
      return (moment(item.completedOn).format("DD/MM/YY HH:mm"))
    }
  }

  return (
    <div className="bg-slate-300 bg-opacity-5 p-11 rounded-xl max-w-[80vw]">
      <h1 className="text-4xl mb-10 text-center">Completed Tasks</h1>
      <div className="task-item my-3 pe-5 py-1 flex justify-center flex-wrap items-start gap-10" >
        {props.array.map(item => (
          <div className="bg-slate-300 bg-opacity-10 px-5 py-3 rounded-xl flex flex-col items-center w-40 hover:bg-opacity-20 hover:scale-110 duration-500" key={item.id}>
            <CircleCheckBig size={20} className="m-3" />
            <span className="text-xs text-center">Completed:</span>
            <span className="text-sm text-center">{readableDate(item)}</span>
            <p className="text-center my-5">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CompletedTasks;