import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login/Login'
import './App.css';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Account from './pages/Account/Account';
import Settings from './pages/Settings/Settings';
import Billing from './pages/Billing/Billing';
import Inventory from './pages/Inventory/Inventory';
import Home from './pages/Home/Home';
import Customers from './pages/Customers/Customers';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
