import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users';
import Login from './components/auth/Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
