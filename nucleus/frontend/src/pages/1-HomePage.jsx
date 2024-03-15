import React from "react";
import TaskList from "../components/TaskList";
import Timer from "../components/timer";

function HomePage() {
  	return (
		<div id="home" className="h-dvh border-2 grid grid-rows-12 grid-cols-12 gap-5">
			<TaskList />	
			<Timer />
		</div>
  	)
};

export default HomePage;