"use client";
import React, { useEffect, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/" },
  ];

  useEffect(() => {
    const containerToBlur = document.querySelector("#blur");
    const containerToBlur1 = document.querySelector("#blur1");
    if (navbar && containerToBlur && containerToBlur1) {
      document.body.classList.add("overflow-hidden");
      containerToBlur.classList.add("blur");
      containerToBlur1.classList.add("blur");
    } else {
      document.body.classList.remove("overflow-hidden");
      containerToBlur?.classList.remove("blur");
      containerToBlur1?.classList.remove("blur");
    }
  }, [navbar]);

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        onChange={() => setNavbar(!navbar)}
        className="drawer-toggle"
      />
      <div
        className={`${
          navbar && "bg-slate-800 bg-opacity-10 filter blur-sm"
        } drawer-content flex justify-end w-full h-40 bg-slate-800 p-3`}
      >
        <ul className="w-full flex items-center justify-center gap-10 max-md:hidden">
          {menu.map(({ name, url }) => (
            <li key={name}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ul>
        {!navbar && (
          <label htmlFor="my-drawer" className="md:hidden">
            <MenuOutlined />
          </label>
        )}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        />
        <ul className="menu p-4 w-2/5 min-h-full h-full bg-base-200 text-base-content flex flex-col gap-3 justify-center">
          {menu.map(({ name, url }) => (
            <li key={name}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
          <label
            htmlFor="my-drawer"
            className="h-full flex justify-end items-start"
          >
            <CloseOutlined size={40} />
          </label>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
