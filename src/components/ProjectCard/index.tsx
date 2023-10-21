"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatName, getImageFromMarkdown } from "@/helpers";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
interface ProjectProps {
  name: string;
  description: string;
  readme: string;
  url: string;
  homepageUrl: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  console.log(project);

  return (
    <>
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
        </div>
      </Link>
      <div className="flex w-full h-24 justify-center p-4 gap-4">
        <Link href={project.homepageUrl} target="_blank">
          <GlobalOutlined size={40} color="white" />
        </Link>
        <Link href={project.url} target="_blank" className="">
          <GithubOutlined size={40} color="white" />
        </Link>
      </div>
    </>
  );
}

export default ProjectCard;
