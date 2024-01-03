"use client";
import { Divider, Row, Col } from "antd";
import Image from "next/image";
import React from "react";
import {
  FieldTimeOutlined,
  ToolOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";

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
    <div className="border-2 bg-blue-600 bg-opacity-10 rounded-lg flex flex-col text-sm font-medium p-3 items-center max-w-3xl w-full h-full max-md:flex-col max-md:text-sm max-sm:text-xs">
      <div className="flex  items-start justify-between w-4/5 h-auto max-md:flex-col max-md:gap-2 max-md:h-2/3 max-md:w-3/4">
        <div className="flex gap-2 max-md:flex-col">
          <div className="flex flex-col  w-auto h-full">
            <Image
              className="rounded-br-2xl rounded-ss-2xl max-md:hidden"
              src={data.image}
              alt={data.title}
              width={100}
              height={100}
            />
            <h2>{data.employer}</h2>
          </div>
          <div className=" flex flex-col w-full justify-around max-sm:gap-2 max-md:gap-1">
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
        <Tag
          bordered={true}
          color="success"
          className="flex items-center gap-2 justify-center p-1 px-2 max-md:text-xs"
        >
          <FieldTimeOutlined />
          {data.status}
        </Tag>
      </div>
    </div>
  );
}

export default ExperienceCard;
