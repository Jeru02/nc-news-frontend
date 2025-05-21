import { Link } from "react-router";

const ArticleCard = ({ singleArticle }) => {
  return (
    <li key={singleArticle.article_id+singleArticle.title} >
      <Link to={`/ArticlePage/${singleArticle.article_id}`}>
        <img src={singleArticle.article_img_url} alt="product img" />
      </Link>
      <p>{singleArticle.title}</p>
      <p>{singleArticle.author}</p>
      <p>{singleArticle.created_at}</p>
    </li>
  );
};

export default ArticleCard;
