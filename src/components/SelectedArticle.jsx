const SelectedArticle = ({ article }) => {
  return (
    <div>
      <img src={article.article_img_url} alt="product img" />

      <p>{article.title}</p>
      <p>{article.author}</p>
      <p>{article.created_at}</p>
    </div>
  );
};

export default SelectedArticle;
