"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatName, getImageFromMarkdown } from "@/helpers";
import { stacks } from "@/utils/stacks";
import online from "../../../public/image/online.gif";
interface ProjectProps {
  name: string;
  description: string;
  readme: string;
  url: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  console.log(project);

  return (
    <Link href={`/project/${project.name}`}>
      <div className="flex flex-col text-white gap-3 max-h-96 bg-slate-400">
        <div>
          <Image
            className="rounded-2xl"
            src={getImageFromMarkdown(project.readme)}
            alt={project.name}
            width={300}
            height={300}
          />
        </div>
        <div className="w-full text-center">
          <h3>{formatName(project.name)}</h3>
          <p>{project.description}</p>
        </div>
        <Image src={online} alt={stacks[0].name} width={40} height={40} />
      </div>
    </Link>
  );
}

export default ProjectCard;
