import React from "react";
import VideoOnHover from "./VideoOnHover";

function ProjectItem({ imageUrl, videoUrl, title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <VideoOnHover imageUrl={imageUrl} videoUrl={videoUrl} />
      <div className="p-4">
        <h3 className="text-lg font-bold leading-tight text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
