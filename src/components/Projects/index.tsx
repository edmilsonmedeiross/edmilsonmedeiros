"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
import { IPinnedRepo } from "@/helpers/types";

import Caroussel from "../Caroussel";

function Projects({ projects }: { projects: IPinnedRepo[] }) {
  const projectsCards = projects.map((project) => (
    <ProjectCard key={project.name} project={project} />
  ));

  return (
    <section
      id="projects"
      className=" font-medium  flex items-center flex-col p-3 "
    >
      <h1 className="text-center text-xl font-extrabold p-3 mb-10">
        Principais Projetos
      </h1>

      <div className=" border-2 rounded-lg bg-blue-500 bg-opacity-10 max-w-3xl ">
        <div className="  ">
          <Caroussel cards={projectsCards} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
