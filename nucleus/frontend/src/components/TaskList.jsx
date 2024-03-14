import React, { useState, useRef } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]); //set task list as empty array
  const [newTaskText, setNewTaskText] = useState(""); //set state of new task as an empty string
  const [isModalOpen, setIsModalOpen] = useState(false); //set state of is modal open to false
  const inputRef = useRef(null); // Ref for the input element

  const openModal = () => {
    setIsModalOpen(true);
    if (inputRef.current) {
      inputRef.current.focus(); // Focus on the input field when modal is opened
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewTaskText(""); // Reset input field when modal is closed
  };

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTaskText }]);
      setNewTaskText("");
      setIsModalOpen(false); // Close modal after adding task
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div>
      <h3 className="text-5xl mb-5">Task List</h3>
      <div className="task-container max-h-dvh my-3 overflow-auto">
        {tasks.map(task => (
          <div key={task.id} className="task-item pe-5 py-1 flex justify-between group">
            <span className="rounded-full border-2 w-full p-5">{task.text}</span>
            <button className="group-hover:visible group-hover:scale-100 invisible scale-0 origin-left duration-500 mx-5 border-2 border-red-500 bg-red-200 text-sm rounded-full px-3 py-1 my-auto text-slate-900" onClick={() => removeTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button className="mt-5 border-2 px-3 py-1 rounded-lg bg-green-300 hover:bg-green-500 duration-500 text-slate-950" onClick={openModal}>Add Task</button>


      {/* Modal */}
      {isModalOpen && (
        <div className="task-modal my-3">
          <div className="modal-content flex justify-start items-center">
            <span className="close me-2 rounded-full px-4 py-1 bg-red-800 hover:bg-red-700 duration-500 cursor-pointer text-slate-50 text-sm" onClick={closeModal}>&times;</span>
            <input
              className="py-1 px-5 rounded-full w-fit"
              type="text" 
              placeholder="Enter Task" 
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={handleKeyDown} // Handle key down event
              ref={inputRef} // Set ref for the input field
            />
            <button className="mx-2 rounded-full px-3 py-1 bg-green-800 hover:bg-green-700 duration-500 cursor-pointer text-slate-50 text-sm " onClick={addTask}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
