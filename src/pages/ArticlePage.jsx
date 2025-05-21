import { useParams } from "react-router";
import { getArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import SelectedArticleContainer from "../components/SelectedArticle";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    getArticleById(params.article_id)
      .then((result) => {
        setArticle(result);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }

  return <SelectedArticleContainer article={article} />;
};

export default ArticlePage;
