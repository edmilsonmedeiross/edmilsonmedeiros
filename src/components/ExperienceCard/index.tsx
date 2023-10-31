"use client";
import { Divider, Row, Col } from "antd";
import Image from "next/image";
import React from "react";
import {
  FieldTimeOutlined,
  ToolOutlined,
  FireOutlined,
} from "@ant-design/icons";

interface ExperienceProps {
  title: string;
  employer: string;
  description: string;
  image: string;
  time: string[];
  status: string;
}

function ExperienceCard({ data }: { data: ExperienceProps }) {
  return (
    <div className="flex flex-col p-3 items-center border-2 border-violet-700 max-w-3xl w-full h-full max-md:flex-col max-md:text-sm max-sm:text-xs">
      <div className="flex border-2 items-start justify-between border-red-600 w-4/5 h-auto max-md:flex-col max-md:gap-2 max-md:h-2/3 max-md:w-3/4">
        <div className="flex gap-2 max-md:flex-col">
          <div className="flex flex-col border-2 w-auto h-full">
            <Image
              className="rounded-br-2xl rounded-ss-2xl max-md:hidden"
              src={data.image}
              alt={data.title}
              width={100}
              height={100}
            />
            <h2>{data.employer}</h2>
          </div>
          <div className="border-2 flex flex-col w-full justify-between border-green-400">
            <div className="flex gap-2">
              <ToolOutlined />
              <h1>{data.title}</h1>
            </div>
            <div className="flex gap-2">
              <FieldTimeOutlined />
              {data.time.map((time) => (
                <p key={time}>{time}</p>
              ))}
            </div>
            <div className="flex gap-2">
              <FireOutlined />
              <p>{data.description}</p>
            </div>
          </div>
        </div>
        <p className="bg-green-400 px-2 rounded-md flex gap-2 font-normal text-sm text-lime-500 bg-opacity-25 text-center max-md:text-xs max-md:flex max-md:items-center max-md:justify-center max-md:gap-1">
          <FieldTimeOutlined />
          {data.status}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
