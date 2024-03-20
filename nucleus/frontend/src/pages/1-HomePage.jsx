import React from "react";
import TaskList from "../components/TaskList";
import Timer from "../components/timer";


function HomePage() {
  	return (
<<<<<<< HEAD
		<>
			<Header />
			<div id="home" className="min-h-dvh border-2 flex flex-col lg:flex-row justify-evenly items-center">
=======
		<div>
			<div id="home" className="h-dvh grid grid-rows-12 grid-cols-12 gap-5">
>>>>>>> 7c2a19d53b135471ab1257626d11cd57f15c7741
				<TaskList />	
				<Timer />
			</div>
		</div>
  	)
};

export default HomePage;