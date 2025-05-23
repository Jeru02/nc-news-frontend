import DeleteCommentButton from "./DeleteCommentButton"

const CommentCard = ({singleComment, setComments})=>{


   

   return <li key={singleComment.comment_id} >
      
      <p>{singleComment.author}</p>
      <p>{singleComment.body}</p>
      <p>{singleComment.votes}</p>
      <p>{singleComment.created_at}</p>
      <DeleteCommentButton comment_id={singleComment.comment_id} setComments={setComments}/>
    </li>


}

export default CommentCard

