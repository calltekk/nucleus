import React from "react";
import PomodoroChart from "../components/Charts";
import MyCalendar from "../components/Calendar";

const Stats = () => {
  // Sample data for demonstration purposes
  const pomodoroData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Pomodoros Completed",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  };

  return (
    <div className="flex justify-evenly items-center gap-10 px-5 py-10">
      <div className="bg-slate-300 bg-opacity-5 p-11 rounded-xl hover:bg-slate-300 hover:bg-opacity-10 duration-500 flex flex-col lg:flex-row gap-20">
        <div className="max-w-[60vw] lg:max-w-[50vw]">
          <h3 className="text-3xl lg:text-5xl me-16 lg:me-20 mb-7">Pomodoro Stats</h3>
          <div className="lg:max-h-[800px] max-w-[700px]">
            <PomodoroChart pomodoroData={pomodoroData} /> 
          </div> 
        </div>
        <div className="max-w-[60vw] lg:max-w-[50vw]">
          <h3 className="text-3xl lg:text-5xl me-16 lg:me-20 mb-7">My Calendar</h3>
          <div className="pt-7">
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
