import VoteButtons from "./VoteButtons";
import { useState, useEffect } from "react";

const SelectedArticle = ({ article }) => {
  const [votes, setVotes] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (hasVoted == false) {
      setVotes(article.votes);
    }else(

      //send a requeset to post the change invotes
      console.log("")
    )
  }, [hasVoted]);

  return (
    <div>
      <img src={article.article_img_url} alt="product img" />

      <p>{article.title}</p>
      <p>{votes}</p>
      <VoteButtons setVotes={setVotes} setHasVoted={setHasVoted} hasVoted={hasVoted}/>
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>{article.created_at}</p>
    </div>
  );
};

export default SelectedArticle;
