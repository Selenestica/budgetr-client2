import React from "react";
import classes from "./Navbar.module.css";
import { setAuthenticationHeader } from "../../utils/authentication";

function Navbar() {
  const token = localStorage.getItem("jsonwebtoken");
  setAuthenticationHeader(token);

  return (
    <>
      <nav>
        <div className="nav-wrapper purple lighten-3">
          <a href="/" className="brand-logo purple-text text-lighten-5">
            Budgetr
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {token && (
              <li>
                <a href="/your-spending">Your Spending</a>
              </li>
            )}
            {token && (
              <li>
                <a href="/your-income">Your Income</a>
              </li>
            )}
            {token && (
              <li>
                <a href="/your-saving">Your Saving</a>
              </li>
            )}
            {token && (
              <li>
                <a href="/your-accounts">Your Accounts</a>
              </li>
            )}
            <li>
              <a href="/login">login</a>
            </li>
            <li>
              <a href="/log-out">sign out</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Home</a>
        </li>
        {token && (
          <li>
            <a href="/your-spending">Your Spending</a>
          </li>
        )}
        {token && (
          <li>
            <a href="/your-income">Your Income</a>
          </li>
        )}
        {token && (
          <li>
            <a href="/your-saving">Your Saving</a>
          </li>
        )}
        {token && (
          <li>
            <a href="/your-accounts">Your Accounts</a>
          </li>
        )}
        <li>
          <a href="/login">login</a>
        </li>
        <li>
          <a href="/log-out">sign out</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
