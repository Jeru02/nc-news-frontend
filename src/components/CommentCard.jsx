import DeleteCommentButton from "./DeleteCommentButton"
import { useContext } from "react";
import { AccountContext } from "../Account";
const CommentCard = ({singleComment, setComments})=>{
   console.log(singleComment, "<-------- JHEREEE")


   const { loggedInUser } = useContext(AccountContext);

   //if single comment.author = current user add delete button
   return <li key={singleComment.comment_id} >
      
      <p>{singleComment.author}</p>
      <p>{singleComment.body}</p>
      <p>{singleComment.votes}</p>
      <p>{singleComment.created_at}</p>
      {singleComment.author === loggedInUser ? <DeleteCommentButton comment_id={singleComment.comment_id} setComments={setComments}/> : null}
    </li>


}

export default CommentCard

