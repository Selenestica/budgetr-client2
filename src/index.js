/*
import { setAuthenticationHeader } from './utils/authentication'

const token = localStorage.getItem('jsonwebtoken')
setAuthenticationHeader(token)
*/

// DEPENDENCY IMPORTS
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// COMPONENT IMPORTS
import Register from "./components/Register";
import Login from "./components/Login";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Navbar from "./components/Nav-bar";
import SavingGoals from "./components/SavingGoals";
import AccountsDisplay from "./components/AccountsDisplay";
import reducer from "./store/reducer";

// CSS IMPORTS
import "./css/Income.css";
import "./css/App.css";
import "./css/Nav-bar.css";
import "materialize-css/dist/css/materialize.min.css";
import "./css/SavingGoals.css";
import "./css/Login.css";

//creating a redux store
const store = configureStore({
  reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/your-accounts" component={AccountsDisplay} />
        <Route exact path="/your-spending" component={Expenses} />
        <Route exact path="/your-income" component={Income} />
        <Route exact path="/your-saving" component={SavingGoals} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
