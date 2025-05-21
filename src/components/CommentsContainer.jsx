import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsContainer = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    getComments(id)
      .then((results) => {
        setComments(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        console.log(comments);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading.....</p>
      </div>
    );
  }

  return (
    <ul>
      {comments.map((singleComment) => {
       return <CommentCard singleComment={singleComment} />;
      })}
    </ul>
  );
};

export default CommentsContainer;
