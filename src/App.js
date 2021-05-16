import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import DateTab from './components/DateTab/DateTab';
import NeonBlossomPage from './pages/NeonBlossom/NeonBlossomPage';
import InterKMTimePage from './pages/InterKMTime/InterKMTimePage';
import FutureFeedbackFormPage from './pages/FutureFeedbackForm/FutureFeedbackFormPage';

class App extends Component {
  render() {
    return (
      <main className="App">
        <DateTab />
        <Switch>
          <Route exact path='/' component={NeonBlossomPage} />
          <Route exact path='/p2' component={InterKMTimePage} />
          <Route exact path='/p3' component={FutureFeedbackFormPage} />
        </Switch>
      </main>
    );
  }
};

export default App;
