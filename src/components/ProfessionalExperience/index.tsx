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
  },
  {
    title: "Desenvolvedor Fullstack",
    employer: "AGB",
    description: "Desenvolvimento de aplicações web",
    image: "/agb.jpg",
    time: ["2019", "2020"],
  },
];

function ProfessionalSkills() {
  return (
    <section>
      <Divider />
      <div className="text-slate-50 flex flex-col gap-4">
        <h2 className="text-center">Experiencia Profissional</h2>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} data={experience} />
        ))}
      </div>
      <Divider />
    </section>
  );
}

export default ProfessionalSkills;
