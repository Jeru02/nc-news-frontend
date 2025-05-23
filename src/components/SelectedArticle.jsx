import { postVote } from "../utils/api";
import VoteButtons from "./VoteButtons";
import { useState, useEffect } from "react";

const SelectedArticle = ({ article }) => {
  const [vote, setVote] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    if (hasVoted == false) {
      setVote(article.votes);
    } else
      postVote(vote, article.article_id).then(() => {
        hasVoted(false);
      });
  }, [hasVoted]);

  return (
    <div>
      <img src={article.article_img_url} alt="product img" />

      <p>{article.title}</p>
      <p>{hasVoted ? vote + article.votes : article.votes}</p>
      <VoteButtons
        setVote={setVote}
        setHasVoted={setHasVoted}
        hasVoted={hasVoted}
      />
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>{article.created_at}</p>
    </div>
  );
};

export default SelectedArticle;
