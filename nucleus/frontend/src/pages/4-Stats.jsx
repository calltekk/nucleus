import React from "react";

import PomodoroChart from "../components/Charts";

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
        data: [0, 0, 0, 0, 0, 0, 0], // Sample pomodoro data
      },
    ],
  };

  return (
    <div className="">
      <PomodoroChart pomodoroData={pomodoroData} />
    </div>
  );
};

export default Stats;
