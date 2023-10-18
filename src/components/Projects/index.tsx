import React from "react";
import ProjectCard from "../ProjectCard";

const data = [
  {
    title: "Project 1",
    description: "Description 1",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
  {
    title: "Project 2",
    description: "Description 2",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
  {
    title: "Project 3",
    description: "Description 3",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
  {
    title: "Project 4",
    description: "Description 4",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
  {
    title: "Project 5",
    description: "Description 5",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
  {
    title: "Project 6",
    description: "Description 6",
    image: "https://picsum.photos/200/200",
    url: "https://google.com",
  },
];

function Projects() {
  return (
    <section>
      <main className="grid grid-cols-3 grid-rows-2 gap-4 w-3/4 h-auto">
        {data.map((project) => (
          <div key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </main>
    </section>
  );
}

export default Projects;
