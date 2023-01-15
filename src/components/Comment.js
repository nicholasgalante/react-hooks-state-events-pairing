import React from "react";

function Comment({ comments }) {
   
   const displayComments = comments.map(comment => {
      return (<div key={comment.id}>
         <h3>{comment.user}</h3>
         {comment.comment}
      </div>)
   })

   return (
      displayComments
   )
}

export default Comment