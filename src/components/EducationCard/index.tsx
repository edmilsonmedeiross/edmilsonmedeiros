import Image from "next/image";
import React from "react";
import { Tag } from "antd";
import {
  BookOutlined,
  HomeOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

interface EducationProps {
  college: string;
  title: string;
  image: string;
  time: string[];
  status: string;
  duration: string;
  isFree: boolean;
}

function EducationCard({ education }: { education: EducationProps }) {
  return (
    <>
      <div className="flex w-full justify-center max-w-3xl border-2 border-yellow-300 p-3">
        <div className="flex gap-4 items-start justify-between w-4/5 border-2 border-violet-600">
          <div className="flex gap-3 border-2 border-red-600">
            <Image
              className="rounded-bl-2xl rounded-tr-2xl"
              src={education.image}
              alt={education.college}
              width={80}
              height={80}
            />
            <div className="flex flex-col justify-between gap-1 h-full border-2">
              <div className="flex gap-2">
                <BookOutlined />
                <h3>{education.title}</h3>
              </div>
              <div className="flex gap-2">
                <HomeOutlined />
                <h4>{education.college}</h4>
              </div>
              {education.isFree ? (
                <div className="flex gap-2">
                  <FieldTimeOutlined />
                  <p>{education.duration}</p>
                </div>
              ) : (
                <div className="flex gap-2 rounded-md w-full text-center text-white justify-evenly">
                  <FieldTimeOutlined />
                  {education.time?.map((time) => (
                    <p key={time}>{time}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 h-full border-2">
            <Tag
              bordered={false}
              className=" bg-green-400 text-lime-500 bg-opacity-25 text-center"
            >
              {education.status}
            </Tag>
            {!education.isFree && (
              <Tag
                bordered={false}
                className=" bg-green-400 text-lime-500 bg-opacity-25 text-center"
                icon={<FieldTimeOutlined />}
              >
                {education.duration}
              </Tag>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
