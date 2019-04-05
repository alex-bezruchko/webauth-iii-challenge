import React, { Component } from 'react';
import './App.css';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Users from './components/users/Users';
import Login from './components/auth/Login';
import Button from 'react-bootstrap/Button';

class App extends Component {

  logOut = () => {
    localStorage.setItem('jwt', "");
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="App">
        <nav>

          <NavLink to="/login"><Button variant="info">Login</Button></NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/users"><Button variant="success">Users</Button></NavLink>
          &nbsp; | &nbsp;
          <Button variant="danger" onClick={this.logOut}>Log Out</Button>
        </nav>
        <div className="container">

          <Route path="/login" component={Login}/>
          <Route path="/users" component={Users}/>

        </div>
      </div>
    );
  }
}

export default withRouter(App);
