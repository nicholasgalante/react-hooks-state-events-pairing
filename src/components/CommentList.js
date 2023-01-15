import React from "react";
import Comment from "./Comment";

function CommentList({video}){
   return (
      <div>
         <h2>Comments</h2>
         <Comment comments={video.comments}/>
      </div>
   )
}

export default CommentList