import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
  return (
    <div className="player-wrapper" style={{width:"50%", padding:"5px"}}>
      <ReactPlayer
        
        url={url}
        
      />
    </div>
  );
};

export default Video;