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
  return (
    <div className="border-2 border-red-600  text-white p-4 flex flex-col items-center justify-center">
      <div className="border-2 w-5/6 h-60 flex flex-col items-center justify-between">
        <Link
          href={`/project/${project.name}`}
          className="flex flex-col items-center justify-between gap-2"
        >
          <h3 className="">{formatName(project.name)}</h3>
          <Image
            className="rounded-md w-11/12"
            src={getImageFromMarkdown(project.readme)}
            alt={project.name}
            width={200}
            height={200}
          />
          <p className="text-left px-2 line-clamp-4">{project.description}</p>
        </Link>
      </div>
      <div className="border-2 w-5/6 flex items-center justify-center gap-3">
        <Link href={project.homepageUrl} target="_blank">
          <GlobalOutlined color="white" />
        </Link>
        <Link href={project.url} target="_blank" className="">
          <GithubOutlined color="white" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
