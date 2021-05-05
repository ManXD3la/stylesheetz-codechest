import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import DateTab from './components/DateTab/DateTab';
import NeonBlossomPage from './pages/NeonBlossom/NeonBlossomPage';
import InterKMTimePage from './pages/InterKMTime/InterKMTimePage';

class App extends Component {
  render() {
    return (
      <main className="App">
        <DateTab />
        <Switch>
          <Route exact path='/' component={NeonBlossomPage} />
          <Route exact path='/p2' component={InterKMTimePage} />
        </Switch>
      </main>
    );
  }
};

export default App;
