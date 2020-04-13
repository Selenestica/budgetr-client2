import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./VerifyEmail.module.css";

function VerifyEmail(props) {
  const [verified, setVerified] = useState(null);

  useEffect(() => {
    const { email } = props.match.params;
    const { token } = props.match.params;
    console.log(email, token);
    const url = "http://localhost:3000/auth/verify-email";
    axios
      .post(url, {
        email: email,
        token: token,
      })
      .then((res) => {
        console.log(res.status);
        setVerified(true);
      })
      .catch(setVerified(false));
  });

  return (
    <>
      {verified ? (
        <div>
          Your account has been made ready for you! Click{" "}
          <Link to="/login">here</Link> to log in to your brand spanking new
          account!
        </div>
      ) : (
        verified === false && (
          <div>
            We couldn't verify your email for some reason. Can you try again?{" "}
            <Link to="/register">Back to register</Link>
          </div>
        )
      )}
    </>
  );
}

export default VerifyEmail;
