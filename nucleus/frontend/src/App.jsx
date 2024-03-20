import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import HomePage from "./pages/1-HomePage";
import TasksFullscreen from "./pages/2-Tasks";
import TaskCreation from "./pages/3-Task-Creation";
import Header from "./components/Header";
import SignUp from "./pages/5-SignUp";
import LogIn from "./pages/6-LogIn";
import './assets/css/form.css';


function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="tasks" element={<TasksFullscreen />}/>
        <Route path="newtask" element={<TaskCreation />}/>
        <Route path="/signup" element={!user ? <SignUp />: <Navigate to="/" />}/>
        <Route path="/login" element={ !user ? <LogIn />: <Navigate to="/" /> }/>
      </Routes>
    </Router>
  )
};

export default App;