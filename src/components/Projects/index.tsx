"use client";

import React from "react";
import ProjectCard from "../ProjectCard";
import { IPinnedRepo } from "@/helpers/types";

function Projects({ projects }: { projects: IPinnedRepo[] }) {
  return (
    <section
      id="projects"
      className="flex flex-col w-full text-white border-2 border-orange-600 items-center"
    >
      <h1 className="text-center p-3">Principais Projetos</h1>

      <div className="flex gap-3 flex-wrap items-center justify-center border-2 border-yellow-400 max-w-3xl w-full">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
