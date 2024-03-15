import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { CircleCheckBig , CircleX, CirclePlus, Save, PenLine } from 'lucide-react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // state for empty array of tasks
  const [newTaskText, setNewTaskText] = useState(""); // set initial text of a new task as an empty string
  const [isModalOpen, setIsModalOpen] = useState(false); // set state of modal open to false
  const [editingTaskIndex, setEditingTaskIndex] = useState(null); // state for editing tasks
  const inputRef = useRef(null);

useEffect(() => {
  if (isModalOpen && inputRef.current) {
    inputRef.current.focus();
  }
}, [isModalOpen])

  const openModal = () => {
    setIsModalOpen(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewTaskText("");
    setEditingTaskIndex(null); // Reset editing state
  };

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTaskText }]);
      setNewTaskText("");
      setIsModalOpen(false);
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (index) => {
    setEditingTaskIndex(index);
    setNewTaskText(tasks[index].text); // Set the text of the editing task
    openModal();
  };

  const updateTask = () => {
    if (newTaskText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = { ...updatedTasks[editingTaskIndex], text: newTaskText };
      setTasks(updatedTasks);
      closeModal();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editingTaskIndex !== null) {
        updateTask(); // If editing, update the task
      } else {
        addTask(); // Otherwise, add a new task
      }
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, removed);

    setTasks(newTasks);
  };

  const updateAddButton = () => {
    if (editingTaskIndex !== null) {
      return (
        <Save size={20} />
      )
    } else if (editingTaskIndex == null){
      return (
        <CirclePlus size={20} />
      )
    }
  }

  return (
    <div className="max-w-[30%]">
      <div className="flex justify-between items-center">
        <h3 className="text-5xl me-20">Task List</h3>
        <button className="border-2 me-5 px-3 py-1 rounded-full bg-green-300 hover:bg-green-500 duration-500 text-slate-950" onClick={openModal}><CirclePlus className="inline" size={20} /></button>
      </div>
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
                        {editingTaskIndex === index ? (
                          <input
                            className="rounded-lg border-2 border-slate-500 w-full px-5 py-2"
                            type="text"
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={inputRef}
                          />
                        ) : (
                          <p className="rounded-lg border-2 border-slate-500 w-full px-5 py-2">{task.text}</p>   
                        )}
                        <div className="flex justify-start items-center">
                          <button className="group-hover:visible group-hover:scale-100 invisible scale-0 origin-left duration-500 ms-3 border-2 border-green-500 hover:bg-emerald-600 rounded-full p-2 my-auto dark:text-slate-50 hover:text-slate-50" onClick={() => removeTask(task.id)}><CircleCheckBig size={15}/></button>
                          <button className="group-hover:visible group-hover:scale-100 invisible scale-0 origin-left duration-500 ms-3 border-2 border-blue-500 hover:bg-sky-500 rounded-full p-2 my-auto dark:text-slate-50 hover:text-slate-50" onClick={() => editTask(index)}><PenLine size={15} /></button>
                        </div>
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


      {/* Modal */}
      {isModalOpen && (
        <div className="task-modal my-3">
          <div className="modal-content flex items-center">
            <span className="close me-3 rounded-full p-2 border-2 border-rose-800 hover:bg-rose-500 duration-500 cursor-pointer dark:text-slate-50 hover:text-slate-50" onClick={closeModal}><CircleX size={20} /></span>
            <input
              className="py-2 px-5 rounded-full w-fit border-2"
              type="text"
              placeholder="Enter Task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            <button className="ms-3 rounded-full p-2 border-2 border-green-500 hover:bg-emerald-600 duration-500 cursor-pointer dark:text-slate-50 hover:text-slate-50" onClick={editingTaskIndex !== null ? updateTask : addTask}>
              {updateAddButton(editingTaskIndex)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
