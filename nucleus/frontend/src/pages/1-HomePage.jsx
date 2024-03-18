import React from "react";
import TaskList from "../components/TaskList";
import Timer from "../components/timer";
import Header from "../components/Header";



function HomePage() {
  	return (
		<>
			<Header />
			<div id="home" className="min-h-dvh border-2 flex flex-col lg:flex-row justify-evenly items-center">
				<TaskList />	
				<Timer />
			</div>
		</>
  	)
};

export default HomePage;