import React, { Component } from 'react';
import logo from './bee_logo.png';
import hive from './hive.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={hive} className="Hive-logo" alt="hive"/>
            <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to BeeRoutes</h1>
        </header>
        <p className="App-intro">
          Stay tuned for the best travel app.
        </p>
      </div>
    );
  }
}

export default App;
