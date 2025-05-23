import { delComment } from "../utils/api";


const DeleteCommentButton = ({ comment_id, setComments }) => {

    

  const removeComment = () => {

    
    setComments((comments) => {
      return comments.filter((comment) => comment.comment_id !== comment_id);
    });

    delComment(comment_id)

    

    //now we make api call to remove the actual comment 
  };

  return <button onClick={removeComment}>Delete</button>;
};

export default DeleteCommentButton;
