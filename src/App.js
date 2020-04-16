/*
import { setAuthenticationHeader } from './utils/authentication'

const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)
*/

// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENT IMPORTS
import Landing from "./components/Landing";
import Register from "./components/Register/Register";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import SavingGoals from "./components/SavingGoals";
import AccountsDisplay from "./components/AccountsDisplay";
import Layout from "./components/Layout";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import SignIn from "./components/SignIn";

// CSS IMPORTS
import "./css/index.css";
import "./css/Income.css";
import "./css/App.css";
import "./css/Nav-bar.css";
import "materialize-css/dist/css/materialize.min.css";
import "./css/SavingGoals.css";
import "./css/Login.css";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/your-accounts" component={AccountsDisplay} />
        <Route exact path="/your-spending" component={Expenses} />
        <Route exact path="/your-income" component={Income} />
        <Route exact path="/your-saving" component={SavingGoals} />
        <Route path="/verify-email/:email/:token" component={VerifyEmail} />
      </Switch>
    );

    return (
      <>
        <Layout>{routes}</Layout>
      </>
    );
  }
}

export default App;
