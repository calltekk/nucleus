import React, { useState, useRef } from 'react';

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

  return (
    <div>
      <h3>Task List</h3>
      <button onClick={openModal}>Add Task</button>
      <div className="task-container">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </div>
        ))}
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
