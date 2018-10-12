import React, { Component } from 'react';
import './App.css';
import PopulationChart from './components/PopulationChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <PopulationChart/>
        </div>
      </div>
    );
  }
}

export default App;
