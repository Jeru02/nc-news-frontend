import { Link } from "react-router";
import { AccountContext } from "../Account";
import { useContext } from "react";

const LoginButton = ({ inputUsername }) => {
  const { setLoggedInUser } = useContext(AccountContext);

  const loginWithUsername = (event) => {
    // event.preventDefault();

    setLoggedInUser(inputUsername);
  };

  const loginWithGuest = (event) => {
    // event.preventDefault();

    setLoggedInUser("tickle122");
  };

  return (
    <>
      {" "}
      <Link to="/HomePage" onClick={loginWithUsername}>
        <button className="loginButton">Login</button>
      </Link>
      <Link to="/HomePage" onClick={loginWithGuest}>
        <button className="loginButton">Contitnue as guest</button>
      </Link>
    </>
  );
};
//onClick={loginWithUsername}
export default LoginButton;
//
