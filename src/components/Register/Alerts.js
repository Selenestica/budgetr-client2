import React from "react";
import Alert from "@material-ui/lab/Alert";

function Alerts(props) {
  return (
    <>
      {props.passwordMatch === true && (
        <Alert severity="error">Passwords do not match!</Alert>
      )}
      {props.missingField === true && (
        <Alert severity="error">
          One or more fields above is missing required information.
        </Alert>
      )}
      {props.invalidEmail === true && (
        <Alert severity="error">
          Invalid email. Please make sure to give a valid email address.
        </Alert>
      )}
      {props.invalidPhone === true && (
        <Alert severity="error">
          Invalid phone number. Please make sure to give a ten digit phone
          number, starting with your three digit area code.
        </Alert>
      )}
      {props.emailSent === true && (
        <Alert severity="success">
          A verification email has been sent to you, escorted by Budgetr's most
          elite cyborg bodyguards. Please check your inbox to complete
          registration. See you soon!
        </Alert>
      )}
      {props.invalidPassword === true && (
        <Alert severity="error">
          Your password must be 10 to 30 characters long, contain at least one
          number, one lowercase letter, one uppercase letter, and one special
          character.
        </Alert>
      )}
    </>
  );
}

export default Alerts;
