import { useContext } from "react";
import { AccountContext } from "../Account";

const HomePage = () => {
  const { loggedinUser } = useContext(AccountContext);
  console.log(loggedinUser, "<----------- here")
  //dont know why i get undefined here

  return <p>Homepage Logged in as{loggedinUser}</p>;
};

export default HomePage;
