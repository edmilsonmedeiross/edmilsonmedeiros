import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import TogleTheme from "@/components/TogleTheme";
import Link from "next/link";
const TopHeader = () => {
  const items = [
    {
      icon: <LinkedinOutlined />,
      id: "a",
      url: "https://www.linkedin.com/in/edmilsonmedeiross/",
    },
    {
      icon: <GithubOutlined />,
      id: "b",
      url: "https://github.com/edmilsonmedeiross/",
    },
    {
      icon: <WhatsAppOutlined />,
      id: "c",
      url: "https://api.whatsapp.com/send?phone=5521996332444&text=Olá, venho através do seu site",
    },
  ];

  return (
    <div className="mx-3 py-5 text-center" id="blur">
      <div className="flex gap-3 flex-wrap justify-around">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
          entre em contato!
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, id, url }) => (
            <li key={id} className="flex items-center gap-2">
              <Link href={url} target="_blank">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
        <TogleTheme />
      </div>
    </div>
  );
};
export default TopHeader;
