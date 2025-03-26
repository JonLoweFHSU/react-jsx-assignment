// src/components/UserInfo.jsx

import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      luckyNumber: Math.floor(Math.random() * 100) + 1, // Initialize with random number
    };
  }

  generateNewLuckyNumber = () => {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 100) + 1, // Generate a new random number
    });
  };

  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Profession: {this.props.profession}</h3>
        <h3>Your lucky number is: {this.state.luckyNumber}</h3>
        <button onClick={this.generateNewLuckyNumber}>Generate New Lucky Number</button>
      </div>
    );
  }
}

export default UserInfo;
