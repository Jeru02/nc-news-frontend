import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import ArticleContainer from "../components/ArticleContainer";
import { useEffect } from "react";
import { getArticles, getTopics } from "../utils/api";
import "../css/HomePage.css";
import loadingAnimation from "../assets/loadingAnimation.json";
import TopicFilter from "../components/TopicFilter";
import { useParams } from "react-router";

const HomePage = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getArticles(params.topic).then((result) => {
      setArticles(result);
      getTopics().then((topicResult) => {
        setTopics(topicResult);
        setIsLoading(false);
      });
    });
  }, [articles]);

  const { loggedInUser } = useContext(AccountContext);

  if (isLoading) {
    return (
      <div id="loaderContainer">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <>
      <p>Homepage Logged in as {loggedInUser}</p>
      <TopicFilter topics={topics} />
      <ArticleContainer articles={articles} />
    </>
  );
};

export default HomePage;
