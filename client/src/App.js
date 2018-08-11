import React, { Component } from 'react';
import Appointment from './components/appointment.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Appointment />
      </div>
    );
  }
}

export default App;
