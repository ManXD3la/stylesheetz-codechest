import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import NeonBlossomPage from './pages/NeonBlossom/NeonBlossomPage';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route path='/' component={NeonBlossomPage} />
        </Switch>
      </main>
    );
  }
};

export default App;
