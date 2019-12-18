import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Login from './pages/Login/Login'
import './App.css';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
