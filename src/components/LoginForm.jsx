import { Link } from "react-router";
import { useState } from "react";
import LoginButton from "./LoginButton";
import UsernameInput from "./UsernameInput";
import logo from "../assets/mountainlogo.png";


const LoginForm = ({setLoggedInUser}) => {
  const [inputUsername, setInputUsername] = useState("");
  
  



  return (
    
      <div id="formContainer"> 
      
      <form action="" id="loginForm">
        <img src={logo} alt="logo" id="logo" />
    <h1 className="wellcomeMessage">Welcome Back</h1>
    <h3 className="logInSubHeading">Your Hub For Everything News Related</h3>
    <UsernameInput inputUsername = {inputUsername} setInputUsername = {setInputUsername}  />
   <LoginButton inputUsername = {inputUsername}/>
    </form>
     </div>
     
    
  );
};

export default LoginForm;
