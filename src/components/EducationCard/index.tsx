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
      <div className="border-2 bg-blue-500 bg-opacity-10 rounded-lg flex w-full text-sm font-medium justify-center max-w-3xl p-3 max-md:text-sm mb-5">
        <div className="flex gap-4 items-start justify-between w-4/5 max-md:w-9/12 max-md:flex-col max-md:gap-2">
          <div className="flex gap-3">
            <Image
              className="rounded-bl-2xl rounded-tr-2xl max-md:hidden"
              src={education.image}
              alt={education.college}
              width={80}
              height={80}
            />
            <div className="flex flex-col gap-1 justify-between max-md:text-sm max-sm:text-xs">
              <div className="flex gap-2">
                <BookOutlined />
                <h3>{education.title}</h3>
              </div>
              <div className="flex gap-2">
                <HomeOutlined />
                <h4>{education.college}</h4>
              </div>
              {education.isFree ? (
                <div className="flex gap-2 max-md:text-sm max-sm:text-xs">
                  <FieldTimeOutlined />
                  <p>{education.duration}</p>
                </div>
              ) : (
                <div className="flex gap-2 rounded-md w-full text-center justify-evenly max-md:text-sm max-sm:text-xs">
                  <FieldTimeOutlined />
                  {education.time?.map((time) => (
                    <p key={time}>{time}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 h-full max-md:text-xs">
            <Tag
              bordered={true}
              color="purple"
              className="flex items-center justify-center p-1 max-md:text-xs"
            >
              {education.status}
            </Tag>
            {!education.isFree && (
              <Tag
                bordered={true}
                color="success"
                className="flex items-center justify-center p-1 max-md:text-xs"
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
