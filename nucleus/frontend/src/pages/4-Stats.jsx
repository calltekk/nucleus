import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import PomodoroChart from "../components/Charts";

const Stats = () => {
  // Sample data for demonstration purposes
  const pomodoroData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Pomodoros Completed",
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.8)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [3, 5, 4, 6, 2, 7, 3], // Sample pomodoro data
      },
    ],
  };

  return (
    <div className="h-dvh">
      <PomodoroChart pomodoroData={pomodoroData} />
    </div>
  );
};

export default Stats;
