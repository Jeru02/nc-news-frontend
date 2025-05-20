import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import ArticleContainer from "../components/ArticleContainer";
import { useEffect } from "react";
import { getItems } from "../api";
import { use } from "react";
import "../css/HomePage.css"

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getItems().then((result) => {
      setArticles(result);
    });
  }, []);

  const { loggedinUser } = useContext(AccountContext);
  console.log(loggedinUser, "<----------- here");

  return (
    <>
      <p>Homepage Logged in as{loggedinUser}</p>
      <ArticleContainer articles={articles} />
    </>
  );
};

export default HomePage;
