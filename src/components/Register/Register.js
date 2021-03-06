import React, { useState } from "react";
import classes from "./Register.module.css";
import { TextField } from "@material-ui/core";
import Alerts from "./Alerts";
import axios from "axios";

function Register() {
  const [registerInfo, setRegisterInfo] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [missingField, setMissingField] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleChange = async (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleRegister = () => {
    const url = "http://localhost:3301/users/register";
    const mailFormat = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const passwordFormat = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,30}$/;
    if (
      !registerInfo.first ||
      !registerInfo.last ||
      !registerInfo.phone_number ||
      !registerInfo.password ||
      !registerInfo.first.trim() ||
      !registerInfo.last.trim() ||
      !registerInfo.phone_number.trim() ||
      !registerInfo.password.trim()
    ) {
      setMissingField(true);
    } else {
      if (registerInfo.password.match(passwordFormat)) {
        if (registerInfo.password === registerInfo.password2) {
          try {
            if (
              registerInfo.email.match(mailFormat) &&
              registerInfo.phone_number.match(phoneFormat)
            ) {
              axios.post(url, registerInfo);
              setEmailSent(true);
            } else if (
              !registerInfo.email.match(mailFormat) &&
              !registerInfo.phone_number.match(phoneFormat)
            ) {
              setInvalidEmail(true);
              setInvalidPhone(true);
            } else if (!registerInfo.email.match(mailFormat)) {
              setInvalidEmail(true);
            } else if (!registerInfo.phone_number.match(phoneFormat)) {
              setInvalidPhone(true);
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          setPasswordMatch(true);
        }
      } else {
        setInvalidPassword(true);
      }
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
            <TextField
              type="password"
              onChange={handleChange}
              name="password2"
              fullWidth
              id="standard-basic"
              label="password"
            />
            <button onClick={onHandleRegister}>Register</button>
            <Alerts
              passwordMatch={passwordMatch}
              invalidPassword={invalidPassword}
              missingField={missingField}
              invalidPhone={invalidPhone}
              emailSent={emailSent}
              invalidEmail={invalidEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
