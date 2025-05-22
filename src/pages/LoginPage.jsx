import LoginForm from "../components/LoginForm";

import LoginBackground from "../assets/login-picture.jpg";

import "../css/loginPage.css";


const LoginPage = ({ setLoggedInUser }) => {
  return (
    <>
      
      <img
        src={LoginBackground}
        alt="city lights picture"
        className="background"
      />

      <LoginForm />
    </>
  );
};

export default LoginPage;
