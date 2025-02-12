// src/App.jsx

import React, { useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';

function App() {
  const [name, setName] = useState('Jon');
  const [age, setAge] = useState(25);
  const [profession, setProfession] = useState('Developer'); // Profession state

  // Lucky number state
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);

  // Create an array of tasks
  const tasks = ['Learn React', 'Write Code', 'Attend Meeting', 'Complete Assignment', 'Go for a Walk'];

  // Function to get a random task
  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="App">
      <Greeting />
      <UserInfo name={name} age={age} profession={profession} /> {/* Pass profession */}
      
      {/* Display the current date */}
      <h3>Today's Date: {currentDate}</h3>

      {/* Display the random task */}
      <h3>Random Task: {getRandomTask()}</h3>

      {/* Show lucky number */}
      <h3>Your lucky number is: {luckyNumber}</h3>
      
      <TaskComponent />
    </div>
  );
}

export default App;
