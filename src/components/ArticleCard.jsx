const ArticleCard = ({singleArticle})=>{

return(<li key={singleArticle.article_id}>
      <img src={singleArticle.article_img_url} alt="product img" />
      <p>{singleArticle.article_id}</p>
      <p>{singleArticle.title}</p>
      <p>{singleArticle.topic}</p>
      <p>{singleArticle.created_at}</p>
      <p>{singleArticle.votes}</p>
      <p>{singleArticle.comment_count}</p>
    </li> )

}

export default ArticleCard
