import React from 'react';

function UserInfo({ name, age, profession, handleClick }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Profession: {profession}</h3>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default UserInfo;
