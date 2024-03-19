import React from 'react'
import Header from './Header';
import Footer from './Footer';
import DisplayToDo from './DisplayToDo';
import './task.css'

function TaskMain() {
  return (
    <div>
        <Header />   
        <DisplayToDo />
        <Footer />
    </div>
  )
}

export default TaskMain;