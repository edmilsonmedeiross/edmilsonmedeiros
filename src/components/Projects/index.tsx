"use client";

import React from "react";
import ProjectCard from "../ProjectCard";
import { IPinnedRepo } from "@/helpers/types";
import { Col, Row } from "antd";

function Projects({ projects }: { projects: IPinnedRepo[] }) {
  return (
    <section className="max-w-3xl w-full">
      <Row gutter={20} className="flex justify-center w-full">
        {projects.map((project) => (
          <Col span={8} key={project.name}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Projects;
