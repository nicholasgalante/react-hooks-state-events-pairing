import React, { useState } from "react";

function Description({video}) {
   const {title, upvotes, downvotes, views, createdAt} = video;
   const [upVote, setUpVote] = useState(upvotes);
   const [downVote, setDownVote] = useState(downvotes);

   function handleUpVote() {
      setUpVote(upVote => upVote + 1)
   }

   function handleDownVote() {
      setDownVote(downVote => downVote + 1)
   }

   return (
      <div>
         <h1>{title}</h1>
         <span>{views} Views | </span>
         <span>Uploaded {createdAt}</span>
         <br/>
         <button onClick={handleUpVote}>{upVote}👍</button>
         <button onClick={handleDownVote}>{downVote}👎</button>
      </div>
   )
}

export default Description