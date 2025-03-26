// src/components/Greeting.jsx

import React, { useState } from 'react';

function Greeting({ username }) {
  const [message, setMessage] = useState(`Hello, ${username}!`);

  const handleChangeGreeting = () => {
    setMessage(`Welcome back, ${username}!`);
  };

  return (
    <div>
      <h1>{message}</h1>
      <p>Today's date: {new Date().toLocaleDateString()}</p>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
}

export default Greeting;
