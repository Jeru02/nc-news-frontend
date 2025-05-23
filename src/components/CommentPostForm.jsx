import { useContext, useState } from "react";
import { AccountContext } from "../Account";
import { postComment } from "../utils/api";

const CommentPostForm = ({ setComments, id }) => {
  const { loggedInUser } = useContext(AccountContext);
  const [inputComment, setInputComment] = useState("");

  const addToComments = (e) => {
    e.preventDefault();

    setComments(comments => [...comments, {
        author: loggedInUser,
        votes: 0,
        body: inputComment,
        created_at: "now",
      }]);

    postComment(id, loggedInUser, inputComment).then(()=>{
      setInputComment("")
    })

   
  };

  const updateInputUsername = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add a comment..."
        value={inputComment}
        onChange={updateInputUsername}
        required
      />
      <button onClick={addToComments}>post</button>
    </form>
  );
};

export default CommentPostForm;
