import React,{useState} from "react";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Component/Login";
import Homepage from "./Component/Homepage";
import Signup from "./Component/Signup";
import { Route, Switch } from "react-router";

function App() {
  const [logged,setLogged]=useState(true);
  const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem("isDark")));

    return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup"component={Signup}/>
        <Route exact path="/homepage" render={(props)=><Homepage {...props} logged={logged} setLogged={setLogged} darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
      {/* {
        logged ? <Homepage/> : null
      } */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Homepage/> */}
      </Switch>

    </div>
  );
}

export default App;
