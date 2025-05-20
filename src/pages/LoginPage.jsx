import LoginForm from "../components/LoginForm";

import LoginBackground from "/Users/jeruboateng/Northcoders/frontend/nc-news-frontend/src/assets/login-picture.jpg";

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
