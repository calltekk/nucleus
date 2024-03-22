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
    <div className="flex justify-center items-center h-full">
      <div className="w-1/2 mr-8">
        <div className="mt-1">
          <div className="h-96 w-full">
            <PomodoroChart pomodoroData={pomodoroData} />
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="mt-80">
          <h2 className="text-white">My Calendar</h2>
          <div className="h-96 w-full">
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
