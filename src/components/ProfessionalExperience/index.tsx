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
    description: "boris nisi ut aliquip ex ea commodo consequat.",
    image: "/agb.jpg",
    time: ["fevereiro 2019", "dezembro 2020"],
    status: "fulltime",
  },
];

function ProfessionalSkills() {
  return (
    <section
      id="professional-experience"
      className="flex flex-col gap-2 mt-10 items-center justify-center w-full"
    >
      <h2 className="text-center mb-10 text-xl font-extrabold">
        Experiencia Profissional
      </h2>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.title} data={experience} />
      ))}
    </section>
  );
}

export default ProfessionalSkills;
