import React from "react";

import { Button, Switch } from "antd";
import "../Component/Homepage.css";
import "antd/dist/antd.css";

import { CrownOutlined } from "@ant-design/icons";

const Homepage = (props) => {
  console.log(props);
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    props.history.push("/");
  };

  const changeMode = () => {
    props.setDarkMode(!props.darkMode);
    localStorage.setItem("isDark", JSON.stringify(!props.darkMode));
  };
  return (
    <div className={props.darkMode ? "homepage" : "darkhomepage"}>
      <div className="homepage-left">
        <div className="homepage-left-top">
          <div className="homepage-left-options">
            <Button onClick={() => logout()}>Logout</Button>
          </div>
          <div className="homepage-left-options">
            <Switch onChange={changeMode} checked={props.darkMode} />
          </div>
        </div>
        <div className="homepage-left-bottom">
          <div className="homepage-icon">
            <CrownOutlined
              className={props.darkMode ? "icon" : "icon-darkmode"}
            />
          </div>
          <div className="homepage-name">
            <h1 className={props.darkMode ? " title" : "darktitle"}>
              premises
            </h1>
          </div>
        </div>
      </div>
      <div className="homepage-right">
        <div className="homepage-right-center">
          <CrownOutlined
            className={props.darkMode ? "icon" : "icon-darkmode"}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
