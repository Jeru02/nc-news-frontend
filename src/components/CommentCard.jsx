const CommentCard = ({singleComment})=>{

   return <li key={singleComment.comment_id} >
      
      <p>{singleComment.author}</p>
      <p>{singleComment.body}</p>
      <p>{singleComment.votes}</p>
      <p>{singleComment.created_at}</p>
    </li>


}

export default CommentCard