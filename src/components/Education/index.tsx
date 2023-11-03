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
    isFree: false,
  },
  {
    college: "University of California, Irvine",
    title: "B.S. Computer Science",
    status: "Bacharelado",
    time: ["Setembro/2019", "Novembro/2023"],
    image: "/agb.jpg",
    duration: "4 anos",
    isFree: false,
  },
  {
    college: "Udemy",
    title: "Nest Js",
    status: "Livre",
    time: ["Agosto - 2019", "-", "Julho - 2023"],
    image: "/agb.jpg",
    duration: "350 horas",
    isFree: true,
  },
];

function Education() {
  return (
    <div
      id="education"
      className="w-full flex flex-col mt-10 items-center justify-center border-2 border-orange-500"
    >
      <h1 className="text-center text-xl mb-10">Educação</h1>
      {educations.map((education) => (
        <EducationCard education={education} key={education.title} />
      ))}
    </div>
  );
}

export default Education;
