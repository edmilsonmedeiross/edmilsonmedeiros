import Image from "next/image";
import React from "react";
import { InputNumber, Tag } from "antd";
import { GithubOutlined } from "@ant-design/icons";

interface EducationProps {
  college: string;
  title: string;
  image: string;
  time: string[];
  status: string;
  duration: string;
}

function EducationCard({ education }: { education: EducationProps }) {
  return (
    <>
      <div className="flex p-5 justify-evenly">
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-bl-2xl rounded-tr-2xl"
            src={education.image}
            alt={education.college}
            width={80}
            height={80}
          />
          <div className="flex flex-col justify-between h-full">
            <h3>{education.title}</h3>
            <h4>{education.college}</h4>
            <Tag
              bordered={false}
              className="flex gap-2 w-full text-center text-white justify-evenly bg-blue-400 bg-opacity-30"
            >
              {education.time?.map((time) => (
                <p key={time}>{time}</p>
              ))}
            </Tag>
          </div>
          <div className="flex flex-col justify-between h-full">
            <Tag
              bordered={false}
              className=" bg-green-400 text-lime-500 bg-opacity-25 text-center"
              icon={<GithubOutlined />}
            >
              {education.status}
            </Tag>
            <Tag
              bordered={false}
              className=" bg-green-400 text-lime-500 bg-opacity-25 text-center"
              icon={<GithubOutlined />}
            >
              {education.duration}
            </Tag>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
