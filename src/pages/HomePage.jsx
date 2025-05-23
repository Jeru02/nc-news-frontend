import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import ArticleContainer from "../components/ArticleContainer";
import { useEffect } from "react";
import { getArticles } from "../utils/api";
import "../css/HomePage.css";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json"

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  const { loggedInUser } = useContext(AccountContext);

  if (isLoading) {
    return (
      <div id= "loaderContainer"><div class="loader"></div></div>
      
    );
  }

  return (
    <>
      <p>Homepage Logged in as {loggedInUser}</p>
      <ArticleContainer articles={articles} />
    </>
  );
};

export default HomePage;
