import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/timer";


function App() {
  return (
    <>
      <h1 className="border-2 p-5 text-5xl rounded-lg mx-auto my-10">Nucleus</h1>
      <PomodoroTimer />
      <TaskList />
    </>
  )
};

export default App;