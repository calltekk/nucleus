import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import PomodoroTimer from "./components/timer";



function App() {
  return (
    <>
      <h1 className="border-2 p-2 text-5xl rounded-lg m-1">Nucleus</h1>
    <TaskList />
    <PomodoroTimer />
    </>
  )
};

export default App;