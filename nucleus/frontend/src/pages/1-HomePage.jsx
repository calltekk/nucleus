import React from "react";
import TaskList from "../components/TaskList";
import PomodoroTimer from "../components/timer";


function HomePage() {
  	return (
		<div>
			<div id="home" className="flex flex-col-reverse lg:flex-row justify-evenly items-center lg:items-start gap-10 px-5 py-10">
				<TaskList />	
				<PomodoroTimer />
			</div>
		</div>
  	)
};

export default HomePage;