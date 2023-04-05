import React from "react";
import ProjectItem from "./ProjectItem";
import VideoOnHover from "./VideoOnHover";

function Projects() {
  const projectItems = [
    {
      imageUrl: "https://via.placeholder.com/500x300",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper urna eget bibendum suscipit.",
      link: "https://example.com/project-1",
    },
    {
      imageUrl: "https://via.placeholder.com/500x300",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper urna eget bibendum suscipit.",
      link: "https://example.com/project-2",
    },
    {
      imageUrl: "https://via.placeholder.com/500x300",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper urna eget bibendum suscipit.",
      link: "https://example.com/project-3",
    },
  ];

  return (
    <section name="projects">
      <h2 className="my-4 text-2xl font-bold leading-tight text-gray-900">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4">
        {projectItems.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </div>
      <a
        className="flex justify-end italic hover:text-gray-900 hover:underline text-gray-700"
        href="https://github.com/fahad-masood?tab=repositories"
        target="_blank"
      >
        ...and many more
      </a>
    </section>
  );
}

export default Projects;
