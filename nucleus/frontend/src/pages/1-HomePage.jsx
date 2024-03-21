import React from "react";
import TaskList from "../components/TaskList";
import PomodoroTimer from "../components/timer";


function HomePage() {
  	return (
		<div>
			<div id="home" className="min-h-dvh flex flex-col lg:flex-row justify-evenly items-center gap-5 p-5">
				<TaskList />	
				<PomodoroTimer />
			</div>
		</div>
  	)
};

export default HomePage;