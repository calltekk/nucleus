import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import HomePage from "./pages/1-HomePage";
import PomodoroTimer from "./components/timer";



function App() {
  return (
    <>
      <HomePage />
    </>
  )
};

export default App;