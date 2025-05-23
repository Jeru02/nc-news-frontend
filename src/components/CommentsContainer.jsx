import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

const CommentsContainer = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
    <p>{comments.length == 0? "no comments" : comments.length} Comments</p>
    <CommentPostForm />
    <ul>
      {comments.map((singleComment) => {
        return <CommentCard singleComment={singleComment} />;
      })}
    </ul></>
    
  );
};

export default CommentsContainer;
