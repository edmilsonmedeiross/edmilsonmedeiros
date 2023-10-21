"use client";
import React from "react";
import ExperienceCard from "../ExperienceCard";
import { Divider } from "antd";

const experiences = [
  {
    title: "Desenvolvedor Front-end",
    employer: "AGB",
    description: "Desenvolvimento de aplicações web",
    image: "/agb.jpg",
    time: ["2019", "2020"],
    status: "fulltime",
  },
  {
    title: "Desenvolvedor Back-end",
    employer: "AGB",
    description: "Desenvolvimento de aplicações web",
    image: "/agb.jpg",
    time: ["2019", "2020"],
    status: "fulltime",
  },
  {
    title: "Desenvolvedor Fullstack",
    employer: "AGB",
    description:
      "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/agb.jpg",
    time: ["fevereiro 2019", "dezembro 2020"],
    status: "fulltime",
  },
];

function ProfessionalSkills() {
  return (
    <section className="flex flex-col gap-2 w-4/5">
      <h2 className="text-center text-white">Experiencia Profissional</h2>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} data={experience} />
      ))}
    </section>
  );
}

export default ProfessionalSkills;
