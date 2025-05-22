import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import ArticleContainer from "../components/ArticleContainer";
import { useEffect } from "react";
import { getItems } from "../utils/api";
import "../css/HomePage.css";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItems().then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, []);

  const { loggedInUser } = useContext(AccountContext);

  if (isLoading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
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
