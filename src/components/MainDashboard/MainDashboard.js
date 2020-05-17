import React from "react";
import { useState } from "react";
import axios from "axios";
import classes from "./MainDashboard.module.css";
import Container from "@material-ui/core/Container";

function MainDashboard() {
  const openPlaid = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jsonwebtoken");
    try {
      const res = await axios.get("http://localhost:3301/plaid", token);
      console.log(res.status, res.config.url);
      if (res.status === 200) {
        console.log(res);
        window.location.href = res.config.url;
      }
    } catch {
      console.log("Couldn't go to Plaid for some reason :(");
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <div>
          <h4>Link your bank account to Budgetr</h4>
          <p>
            We use Plaid to securely link your bank account to this app. For
            more information about Plaid, click{" "}
            <a href="https://plaid.com/what-is-plaid/">here</a>.
          </p>
          <button
            onClick={openPlaid}
            className="waves-effect waves-light btn purple lighten-3"
          >
            Link
          </button>
        </div>
      </Container>
    </>
  );
}

export default MainDashboard;
