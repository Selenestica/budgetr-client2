import React, { useState } from "react";
import classes from "./Register.module.css";
import { TextField } from "@material-ui/core";
import axios from "axios";

function Register() {
  const [registerInfo, setRegisterInfo] = useState([]);

  const handleChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const onHandleRegister = () => {
    const url = "http://localhost:3301/add-user";
    const mailFormat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    try {
      if (registerInfo.email.match(mailFormat)) {
        axios.post(url, registerInfo);
      } else {
        console.log("Invalid email!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l8 offset-l2">
            <h1>Register</h1>
            <p>
              <i>...and start bud getting today!</i>
            </p>
            <TextField
              type="text"
              onChange={handleChange}
              name="first"
              fullWidth
              id="standard-basic"
              label="first name"
            />
            <TextField
              type="text"
              onChange={handleChange}
              name="last"
              fullWidth
              id="standard-basic"
              label="last name"
            />
            <TextField
              type="text"
              onChange={handleChange}
              name="display_name"
              fullWidth
              id="standard-basic"
              label="what name do you prefer to go by?"
            />
            <TextField
              type="email"
              onChange={handleChange}
              name="email"
              fullWidth
              id="standard-basic"
              label="email"
            />
            <TextField
              type="text"
              onChange={handleChange}
              name="phone_number"
              fullWidth
              id="standard-basic"
              label="phone number"
            />
            <TextField
              type="password"
              onChange={handleChange}
              name="password"
              fullWidth
              id="standard-basic"
              label="password"
            />
            <button onClick={onHandleRegister}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
