"use client";
import React, { useState } from "react";

function TTTT() {
  const [n, setN] = useState(false);
  return (
    <div>
      {!n && (
        <label htmlFor="my-drawer" className="md:hidden fixed right-0">
          {/* <input id="my-drawer" type="checkbox" className="drawer-toggle" /> */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          {/* <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg> */}
        </label>
      )}

      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          onChange={() => setN(!n)}
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          {/* <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            hhuerb
          </label> */}
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <label htmlFor="my-drawer">
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            <h1>oi sou o goku</h1>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TTTT;
