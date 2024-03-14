import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const TaskList = () => {
  const [tasks, setTasks] = useState([]); //set task list as empty array
  const [newTaskText, setNewTaskText] = useState(''); //set state of new task as an empty string
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
    setNewTaskText(''); // Reset input field when modal is closed
  };

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTaskText }]);
      setNewTaskText('');
      setIsModalOpen(false); // Close modal after adding task
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
      <h3>Task List</h3>
      <button onClick={openModal}>Add Task</button>
      <div className="task-container">
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
                    className="task-item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <span>{task.text}</span>
                    <button onClick={() => removeTask(task.id)}>Delete</button>
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
        <div className="task-modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <input 
              type="text" 
              placeholder="Enter Task" 
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyDown={handleKeyDown} // Handle key down event
              ref={inputRef} // Set ref for the input field
            />
            <button onClick={addTask}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
