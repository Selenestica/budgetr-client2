import React, { useState } from "react";
import { TextField } from "@material-ui/core";

function Register() {
  const [registerInfo, setRegisterInfo] = useState([]);

  const handleChange = e => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value
    });
  };

  const onHandleRegister = () => {
    fetch("http://localhost:3301/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registerInfo)
    }).then(response => response.json());
  };

  return (
    <>
      <div className="row">
        <div className="col">
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
    </>
  );
}

export default Register;
