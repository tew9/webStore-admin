import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Home from './containers/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/signin' component={Signin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
