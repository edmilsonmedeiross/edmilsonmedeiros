"use client";
import { Divider } from "antd";
import Image from "next/image";
import React from "react";

interface ExperienceProps {
  title: string;
  employer: string;
  description: string;
  image: string;
  time: string[];
  status?: string;
}

function ExperienceCard({ data }: { data: ExperienceProps }) {
  return (
    <>
      <div className="flex p-5 justify-evenly">
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-full"
            src={data.image}
            alt={data.title}
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-between">
            <h3>{data.title}</h3>
            <h4>{data.employer}</h4>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="flex items-center justify-center w-auto h-6 rounded-lg bg-green-400 text-lime-500 font-normal text-sm bg-opacity-25">
            {data.status}
          </p>
          <div className="flex gap-2">
            {data.time?.map((time) => (
              <p key={time}>{time}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceCard;
