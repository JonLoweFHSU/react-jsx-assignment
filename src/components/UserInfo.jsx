// src/components/UserInfo.jsx

import React from 'react';

function UserInfo({ name, age, profession }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p> {/* Display profession */}
    </div>
  );
}

export default UserInfo;
