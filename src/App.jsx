// src/App.jsx

import React, { useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';

function App() {
  const [name, setName] = useState('Jon');
  const [age, setAge] = useState(25);
  const [profession, setProfession] = useState('Developer');
  const [tasks, setTasks] = useState([
    { name: 'Buy groceries', description: 'Milk, eggs, bread' },
    { name: 'Read a book', description: 'JavaScript for beginners' },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
  };

  return (
    <div className="App">
      <Greeting username={name} />
      <UserInfo name={name} age={age} profession={profession} />
      <TaskForm addTask={addTask} />
      <TaskComponent tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
