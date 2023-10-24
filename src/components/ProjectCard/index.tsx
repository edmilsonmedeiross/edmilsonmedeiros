"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatName, getImageFromMarkdown } from "@/helpers";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { Divider } from "antd";
interface ProjectProps {
  name: string;
  description: string;
  readme: string;
  url: string;
  homepageUrl: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="flex w-52 p-2 flex-col justify-center items-center border-2 border-red-600">
      <Link
        href={`/project/${project.name}`}
        className="flex flex-col items-center justify-center"
      >
        <Image
          className="rounded-2xl"
          src={getImageFromMarkdown(project.readme)}
          alt={project.name}
          width={200}
          height={200}
        />

        <h3 className="text-center font-medium text-lg p-2">
          {formatName(project.name)}
        </h3>
        <p className="line-clamp-4 p-2">{project.description}</p>
      </Link>
      <div className="flex gap-3 p-2">
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
