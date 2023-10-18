"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div>
      <Card
        hoverable
        cover={
          <Image
            alt={project.title}
            src={project.image}
            width={200}
            height={200}
          />
        }
      >
        <Meta title={project.description} description={project.url} />
      </Card>
    </div>
  );
}

export default ProjectCard;
