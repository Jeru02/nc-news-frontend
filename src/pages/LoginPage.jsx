import LoginForm from "../components/LoginForm";

import LoginBackground from "../assets/login-picture.jpg";

import "../css/loginPage.css";

const LoginPage = ({ setLoggedInUser}) => {
  return (
    <>
      <img
        src={LoginBackground}
        alt="Person shopping for clothes"
        className="background"
      />
      <LoginForm  />
    </>
  );
};

export default LoginPage;
