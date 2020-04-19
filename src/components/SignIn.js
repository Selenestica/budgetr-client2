import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Alert } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { setAuthenticationHeader } from "../utils/authentication";
import { connect } from "react-redux";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    cursor: "pointer",
    backgroundColor: "whitesmoke",
  },
}));

function SignIn(props) {
  const [loginInfo, setLoginInfo] = useState([]);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3301/users/login",
        loginInfo
      );
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem("jsonwebtoken", token);
        setAuthenticationHeader(token);
        props.onLoginSuccess(token);
        window.location.href = "/your-accounts";
      } else if (res.status === 500) {
        console.log("There was some kind of error :(");
        setLoginFailed(true);
      }
    } catch {
      setLoginFailed(true);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={handleChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {loginFailed ? (
            <Alert severity="error">
              Your email or password was incorrect.
            </Alert>
          ) : null}
          <div className={classes.submit} onClick={onHandleLogin}>
            Sign In
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSuccess: (token) =>
      dispatch({ type: "ON_LOGIN_SUCCESS", token: token }),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
