import React from "react";
import ExperienceCard from "../ExperienceCard";
import EducationCard from "../EducationCard";

const educations = [
  {
    college: "University of California, Irvine",
    title: "B.S. Computer Science",
    status: "Bacharelado",
    time: ["Dezembro 2019", "-", "Fevereiro 2023"],
    image: "/agb.jpg",
    duration: "4 anos",
  },
  {
    college: "University of California, Irvine",
    title: "B.S. Computer Science",
    status: "Bacharelado",
    time: ["Setembro/2019", "Novembro/2023"],
    image: "/agb.jpg",
    duration: "4 anos",
  },
  {
    college: "University of California, Irvine",
    title: "B.S. Computer Science",
    status: "Bacharelado",
    time: ["Agosto - 2019", "-", "Julho - 2023"],
    image: "/agb.jpg",
    duration: "4 anos",
  },
];

function Education() {
  return (
    <div className="text-white">
      <h1 className="text-center">Educação</h1>
      {educations.map((education) => (
        <EducationCard education={education} key={education.title} />
      ))}
    </div>
  );
}

export default Education;
