import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = params => {
  return <h1>Welcome User {params.username} </h1>;
};

class App extends Component {
  state = {
    loggedIn: false
  };

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ color: 'green' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeStyle={{ color: 'green' }}>
                About Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/Jhon" exact activeStyle={{ color: 'green' }}>
                User Jhon
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/Peter" exact activeStyle={{ color: 'green' }}>
                User Peter
              </NavLink>
            </li>
          </ul>
          <input
            type="button"
            value={this.state.loggedIn ? 'Log Out' : 'Log in'}
            onClick={this.loginHandle}
          />

          <Route
            path="/"
            exact
            render={() => {
              return <h1>Welcome Home</h1>;
            }}
          />
          <Route
            path="/about/"
            exact
            render={() => {
              return <h1>Welcome About</h1>;
            }}
          />
          <Route
            path="/user/:username"
            exact
            strict
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
