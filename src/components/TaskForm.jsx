import React, { useState } from 'react';

function TaskForm() {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Task:', task);
    setTask(''); // Clear input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter Task Name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
