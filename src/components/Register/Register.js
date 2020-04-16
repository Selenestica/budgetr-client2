import React, { useState } from "react";
import classes from "./Register.module.css";
import { TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
            {passwordMatch === true && (
              <Alert severity="error">Passwords do not match!</Alert>
            )}
            {missingField === true && (
              <Alert severity="error">
                One or more fields above is missing required information.
              </Alert>
            )}
            {invalidEmail === true && (
              <Alert severity="error">
                Invalid email. Please make sure to give a valid email address.
              </Alert>
            )}
            {invalidPhone === true && (
              <Alert severity="error">
                Invalid phone number. Please make sure to give a ten digit phone
                number, starting with your three digit area code.
              </Alert>
            )}
            {emailSent === true && (
              <Alert severity="success">
                A verification email has been sent to you, escorted by Budgetr's
                most elite cyborg bodyguards. Please check your inbox to
                complete registration. See you soon!
              </Alert>
            )}
            {invalidPassword === true && (
              <Alert severity="error">
                Your password must be 10 to 30 characters long, contain at least
                one number, one lowercase letter, one uppercase letter, and one
                special character.
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
