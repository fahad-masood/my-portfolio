import React from "react";
import ReactPlayer from "react-player";

function VideoOnHover({ imageUrl, videoUrl }) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div
      className="relative w-full h-64"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img className="h-64 w-full object-cover" src={imageUrl} alt="" />
      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ReactPlayer
            url={videoUrl}
            playing={isHovering}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
}

export default VideoOnHover;
