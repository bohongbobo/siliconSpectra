import React, { Component } from 'react';
import './App.css';
import Addtodos from './components/Addtodos.js'

class App extends Component {
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center cyan-text">TO DO LIST</h1>
        <Addtodos />>
      </div>
    );
  }
  
}

export default App;