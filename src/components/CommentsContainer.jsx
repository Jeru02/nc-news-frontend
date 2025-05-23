import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentPostForm from "./CommentPostForm";


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
  }, [setComments]);

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
    <CommentPostForm setComments={setComments} id={id}/>
    <ul>
      {comments.map((singleComment) => {
        return <CommentCard singleComment={singleComment} />;
      })}
    </ul></>
    
  );
};

export default CommentsContainer;
