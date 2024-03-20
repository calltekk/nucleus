import { useState } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import HomePage from "./pages/1-HomePage";
import TasksTimer from "./pages/2-Tasks-Timer";
import TasksFullscreen from "./pages/3-Tasks";
import TaskCreation from "./pages/4-Task-Creation";
import SignUp from "./pages/5-SignUp";
import LogIn from "./pages/6-LogIn";
import './assets/css/form.css';


=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/1-HomePage";
import TasksFullscreen from "./pages/2-Tasks";
import TaskCreation from "./pages/3-Task-Creation";
import Header from "./components/Header";
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741


function App() {
  const { user } = useAuthContext();
  return (
<<<<<<< HEAD
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<HomePage />}
        />
        <Route 
          path="/signup"
          element={!user ? <SignUp />: <Navigate to="/" />}
        />
        <Route 
          path="/login"
          element={ !user ? <LogIn />: <Navigate to="/" /> }
        />
      </Routes>
    
    </BrowserRouter>
      
      
      <TasksTimer />
      <TasksFullscreen />
      <TaskCreation />
      

    </>
=======
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="tasks" element={<TasksFullscreen />}/>
        <Route path="newtask" element={<TaskCreation />}/>
      </Routes>
    </Router>
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741
  )
};

export default App;