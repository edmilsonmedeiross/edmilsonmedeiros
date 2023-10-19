"use client";
import React from "react";
import Image from "next/image";
interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div>
      <div className="w-64 h-64">
        <Image
          src={project.image}
          alt={project.title}
          width={200}
          height={200}
          priority
        />
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.url} target="_blank" rel="noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
