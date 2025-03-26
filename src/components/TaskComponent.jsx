// src/components/TaskComponent.jsx

import React, { useState } from 'react';

function TaskComponent({ tasks, deleteTask }) {
  const [search, setSearch] = useState('');
  const [sortedTasks, setSortedTasks] = useState(tasks);

  // Filter tasks based on search input
  const filteredTasks = sortedTasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort tasks alphabetically
  const handleSort = () => {
    const sorted = [...sortedTasks].sort((a, b) => a.name.localeCompare(b.name));
    setSortedTasks(sorted);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSort}>Sort by Name</button>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.name}> {/* Use task.name as the key */}
            {task.name} - {task.description}
            <button onClick={() => {
              if (window.confirm(`Are you sure you want to delete "${task.name}"?`)) {
                deleteTask(task.name);
              }
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComponent;
