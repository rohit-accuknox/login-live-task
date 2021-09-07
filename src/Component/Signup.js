import React, { useState } from "react";
// import { Card, Input } from 'antd';
import { Button, Card, Checkbox, Input } from "antd";
import Image from "../Image.svg";
import "../Component/Signup.css";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
      if(e.target.name===""){
        console.log("error")
      }else{
      localStorage.setItem("userRegistration",JSON.stringify(userSignUp)); 
      props.history.push("/")
      }
  };

  
  return (
    <div className="Signup">
      <div className="Signup-left">
        <Card className={!props.darkMode ? "card":"dark-card"}>
          <div className="Signup-top">
            <h1 style={{color:!props.darkMode?"black":"white"}}>Sign Up</h1>
            <p> See your growth and get consulting support</p>
          </div>
          <div className="Signup-input">
            <div className="Signup-input-options">
              <label>Name*</label>
              <Input
                style={{color:props.darkMode ?"white":"black"}}
                className={!props.darkMode ? "input-light":"input-dark"}
                name="name"
                placeholder="Name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="Signup-input-options">
              <label>Email*</label>
              <Input
                style={{color:props.darkMode ?"white":"black"}}
                className={!props.darkMode ? "input-light":"input-dark"}
                name="email"
                placeholder="mail@website.com"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="Signup-input-options">
              <label>Password*</label>
              <Input
                style={{color:props.darkMode ?"white":"black"}}
                className={!props.darkMode ? "input-light":"input-dark"}
                name="password"
                placeholder="Min. 8 characters"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <div className="Signup-bottom">
            <div className="Signup-bottom-options">
              <Checkbox  checked/> I agree to terms & Conditions
            </div>
            <div className="Signup-bottom-options">
              <Button className={!props.darkMode ? "button":"darkmode-button" } onClick={handleSignUp}>Sign Up</Button>
            </div>
            <div className="Signup-bottom-options">
              <label>
                Already have an Account ?{" "}
                <span>
                  <Link to="/">Sign In</Link>
                </span>
              </label>
            </div>
          </div>
        </Card>
      </div>
      <div className={!props.darkMode? "Signup-right" :"dark-signup"}>
        <div className="Signup-right-top">
          <img className="image" src={Image} />
        </div>
        <div className="Signup-right-bottom">
          <h1>
            Turn your ideas <br />
            into reality.
          </h1>
          <p>
            Consistent Quality and exprience across all
            <br /> platforms and devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
