import { Link } from "react-router";
import { AccountContext } from "../Account";
import { useContext } from "react";

const LoginButton = ({ inputUsername }) => {
  const { setLoggedInUser } = useContext(AccountContext);

  const loginWithUsername = (event) => {
    setLoggedInUser(inputUsername);
  };

  return (
    <Link to="/HomePage" onClick={loginWithUsername}>
      <button>Login</button>
    </Link>
  );
};
//onClick={loginWithUsername}
export default LoginButton;
