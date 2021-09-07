import React, { useEffect, useState } from "react";
// import { Card, Input } from 'antd';
import { Button, Card, Checkbox, Input } from "antd";
import LoginImage from "../Login.svg";
import "../Component/Login.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [isError, setIsError] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const handleDetails = () => {
    if (email === "" || password === "") {
      setIsError(true);
      setErrorMsg("Fill the required fields");
    } else {
      let registered = JSON.parse(localStorage.getItem("userRegistration"));
      // console.log(registered)
      if (registered.email === email && registered.password === password) {
        setLogin(!login);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ email: email, islogin: true })
        );
        props.history.push("homepage");
      } else {
        setIsError(false);
        setErrorMsg("Invalid Credentials");
      }
    }
  };

  useEffect(() => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser !== null && loggedInUser.islogin) {
      props.history.push("homepage");
    }
  }, []);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password)
  };
  console.log(login);
  return (
    <div className="login">
      <div className="login-left">
        <Card className={!props.darkMode ? "card":"dark-card"}>
          <div className="login-top">
            <p style={{ color: "red" }}>{errorMsg}</p>
            <h1 style={{color:!props.darkMode?"black":"white"}}>Login</h1>
            <p> See your growth and get consulting support</p>
          </div>
          <div className="login-input">
            <div className="login-input-options">
              <label>Email*</label>
              <Input
              className={!props.darkMode ? "input-light":"input-dark"}
                type="text"
                style={{color:props.darkMode ?"white":"black"}}
                placeholder="mail@website.com"
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className="login-input-options">
              <label>Password*</label>
              <Input
              className={!props.darkMode ? "input-light":"input-dark"}
                type="password"
                style={{color:props.darkMode ?"white":"black"}}
                placeholder="Min. 8 characters"
                onChange={(e) => handlePassword(e)}
              />
            </div>
          </div>
          <div className="login-bottom">
            <div className="login-bottom-options">
              <Checkbox checked /> I agree to terms & Conditions
            </div>
            <div className="login-bottom-options">
              <Button onClick={() => handleDetails()}> Login</Button>
            </div>
            <div className="login-bottom-options">
              <label>
                Not registered yet ?
                <span>
                  <Link to="/signup">Create an Account</Link>
                </span>
              </label>
            </div>
          </div>
        </Card>
      </div>
      <div className={!props.darkMode? "login-right":"dark-login"}>
        <div className="login-right-top">
          <img className="image" src={LoginImage} />
        </div>
        <div className="login-right-bottom">
          <h1 style={{color:props.darkMode?"grey":"white"}}>
            Turn your ideas
            <br /> into reality.
          </h1>
          <p style={{color:props.darkMode?"grey":"white"}}>
            Consistent Quality and exprience across all
            <br /> platforms and devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
