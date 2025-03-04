import React, { useState } from 'react';

function Greeting({ username }) {
  const [message, setMessage] = useState(`Hello, ${username}!`);

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