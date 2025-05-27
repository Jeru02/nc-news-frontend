import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import ArticleContainer from "../components/ArticleContainer";
import { useEffect } from "react";
import { getArticles, getTopics } from "../utils/api";
import "../css/HomePage.css";
import TopicFilter from "../components/TopicFilter";
import { useParams } from "react-router";
import SortForm from "../components/SortForm";

const HomePage = () => {
  const params = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [sort_by, setSort_by] = useState(undefined);
  const [order, setOrder] = useState(undefined);

  useEffect(() => {
    getTopics().then((topicResult) => {
      setTopics(topicResult);
    });
  }, []);

  useEffect(() => {
    getArticles(params.topic, sort_by, order).then((result) => {
      setArticles(result);
      setIsLoading(false);
    });
  }, [params.topic, sort_by, order]);

  const { loggedInUser } = useContext(AccountContext);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <p>Homepage Logged in as {loggedInUser}</p>
      <TopicFilter topics={topics} />
      <SortForm setSort_by={setSort_by} setOrder={setOrder} />
      <ArticleContainer articles={articles} />
    </>
  );
};

export default HomePage;
