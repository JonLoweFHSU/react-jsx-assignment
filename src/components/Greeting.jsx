// src/components/Greeting.jsx

import React, { useState } from 'react';

function Greeting() {
  const [message, setMessage] = useState('Welcome to React!');

  const handleChange = (e) => {
    setMessage(e.target.value);  // Update message with the input value
  };

  return (
    <div>
      <h1>{message}</h1>
      <input 
        type="text" 
        value={message} 
        onChange={handleChange} 
        placeholder="Change the greeting message" 
      />
    </div>
  );
}

export default Greeting;
