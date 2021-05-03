import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NeonBlossomPage from './pages/NeonBlossom/NeonBlossomPage';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
        <Switch>
          <Route exact path='/p1' component={NeonBlossomPage} />
        </Switch>
      </main>
    );
  }
};

export default App;
