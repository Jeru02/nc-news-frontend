import ArticleCard from "./ArticleCard";


const ArticleContainer = ({ articles }) => {
  return (
    <ul className="articleContainer">
      {articles.map((singleArticle) => {
        return <ArticleCard singleArticle={singleArticle} />;
      })}
    </ul>
  );
};

export default ArticleContainer;
