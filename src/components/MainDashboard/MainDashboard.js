import React from "react";
import { useState } from "react";
import axios from "axios";
import classes from "./MainDashboard.module.css";

function MainDashboard() {
  const openPlaid = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3301/plaid");
      console.log(res.status, res.config.url);
      if (res.status === 200) {
        window.location.href = res.config.url;
      }
    } catch {
      console.log("Couldn't go to Plaid for some reason :(");
    }
  };

  return (
    <>
      <h4>Link your bank account to Budgetr</h4>
      <p>
        We use Plaid to securely link your bank account to this app. For more
        information about Plaid, click{" "}
        <a href="https://plaid.com/what-is-plaid/">here</a>.
      </p>
      <button
        onClick={openPlaid}
        className="waves-effect waves-light btn purple lighten-3"
      >
        Link
      </button>
    </>
  );
}

export default MainDashboard;
