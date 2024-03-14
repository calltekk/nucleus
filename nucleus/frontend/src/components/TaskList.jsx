import React, { useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


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

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, removed);

    setTasks(newTasks);
  };

  return (
    <div>
      <h3 className="text-5xl mb-5">Task List</h3>
      <div className="task-container max-h-dvh my-3 overflow-auto">
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <div
            className="task-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <div
                    className="task-item my-3 pe-5 py-1 flex justify-between items-center group"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span className="rounded-full border-2 border-slate-500 w-full px-5 py-2">{task.text}</span>
                    <button className="group-hover:visible group-hover:scale-100 invisible scale-0 origin-left duration-500 mx-5 border-2 border-red-500 bg-red-200 text-sm rounded-full px-3 py-1 my-auto text-slate-900" onClick={() => removeTask(task.id)}>Delete</button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
      </div>
      <button className="mt-5 border-2 px-3 py-1 rounded-full bg-green-300 hover:bg-green-500 duration-500 text-slate-950" onClick={openModal}>Add Task</button>


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
