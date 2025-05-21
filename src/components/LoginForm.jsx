import { Link } from "react-router";
import { useState } from "react";
import LoginButton from "./LoginButton";
import UsernameInput from "./UsernameInput";

const LoginForm = ({setLoggedInUser}) => {
  const [inputUsername, setInputUsername] = useState("");
  
  



  return (
    <form action="" id="loginForm">
    <h2>Login</h2>
    <UsernameInput inputUsername = {inputUsername} setInputUsername = {setInputUsername}/>
   <LoginButton inputUsername = {inputUsername}/>
    </form>
  );
};

export default LoginForm;
