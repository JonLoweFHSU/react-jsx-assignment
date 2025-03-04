import React, { useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm'; // Import TaskForm

function App() {
  const [name, setName] = useState('Jon');
  const [age, setAge] = useState(25);
  const [profession, setProfession] = useState('Developer');

  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);

  // Task List
  const tasks = ['Learn React', 'Write Code', 'Attend Meeting', 'Complete Assignment', 'Go for a Walk'];

  // Handle button click alert
  const handleAlert = () => {
    alert('Alert, You clicked the button!');
  };

  return (
    <div className="App">
      {/* Task 1: Props */}
      <Greeting username="Alice" />
      <Greeting username="Bob" />

      {/* Task 2: User Info with Props */}
      <UserInfo name={name} age={age} profession={profession} handleClick={handleAlert} />

      {/* Task 3: Display List with Keys */}
      <h3>Task List:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      {/* Task 4: Lucky Number */}
      <h3>Your lucky number is: {luckyNumber}</h3>

      {/* Task 5: Controlled Form */}
      <h2>Add a New Task:</h2>
      <TaskForm />
    </div>
  );
}

export default App;

