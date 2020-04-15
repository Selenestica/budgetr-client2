import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./VerifyEmail.module.css";

function VerifyEmail(props) {
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const { email } = props.match.params;
    const { token } = props.match.params;
    const url = "http://localhost:3301/auth/verify-email";
    axios
      .post(url, {
        email: email,
        token: token,
      })
      .then((res) => {
        if (res.status === 200) {
          setMessage(
            "Your account has been made ready for you! Click the link below to log in to your brand spanking new account!"
          );
          setVerified(true);
        } else {
          error();
        }
      });
  }, []);

  const error = () => {
    setMessage(
      "We couldn't verify your email for some reason. Can you try again?"
    );
    setVerified(false);
  };

  return (
    <>
      {!verified ? (
        <div>
          <p>{message}</p>
          <Link to="/register">Back to register</Link>
        </div>
      ) : (
        <div>
          <p>{message}</p>
          <Link to="/login">Login</Link>
        </div>
      )}
    </>
  );
}

export default VerifyEmail;
