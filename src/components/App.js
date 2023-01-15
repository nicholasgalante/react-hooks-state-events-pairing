import React from "react";
import video from "../data/video";
import Description from "./Description";
import CommentList from "./CommentList"

function App() {
  return (
    <>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <Description video={video}/>
      <CommentList video={video}/>
    </>
  );
}

export default App;
