import React from "react";
import TaskList from "../components/TaskList";
import Timer from "../components/timer";
import Header from "../components/Header";



function HomePage() {
  	return (
		<>
			<Header />
			<div id="home" className="h-dvh grid grid-rows-12 grid-cols-12 gap-5">
				<TaskList />	
				<Timer />
			</div>
		</>
  	)
};

export default HomePage;