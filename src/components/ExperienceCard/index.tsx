"use client";
import { Divider, Tag } from "antd";
import Image from "next/image";
import React from "react";
import { GithubOutlined } from "@ant-design/icons";

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
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 justify-between text-white">
          <Image
            className="rounded-br-2xl rounded-ss-2xl"
            src={data.image}
            alt={data.title}
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-between">
            <div className="flex gap-3">
              <h1>{data.title}</h1>
              <Tag
                bordered={false}
                className=" bg-green-400 text-lime-500 bg-opacity-25 text-center"
                icon={<GithubOutlined />}
              >
                {data.status}
              </Tag>
            </div>
            <h2>{data.employer}</h2>
            <p className="bg-gray-500 text-center w-full p-1 rounded-lg break-words bg-opacity-30 text-white">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex">
          <Tag
            bordered={false}
            className="flex gap-2 w-full text-white justify-evenly bg-blue-400 bg-opacity-30"
          >
            {data.time.map((time) => (
              <p key={time}>{time}</p>
            ))}
          </Tag>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default ExperienceCard;
