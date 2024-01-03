"use client";
import React from "react";
import { stacks, stacks2 } from "../../utils/stacks";
import Image from "next/image";
import IconList from "../IconList";

function MyTechStacks() {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="border-2 rounded-lg bg-blue-500 bg-opacity-10 flex flex-col items-center gap-4 max-w-3xl">
        <div className="fex flex-col p-2">
          <h1 className="text-xl text-center mt-10 font-extrabold">
            Minhas Tech Stacks
          </h1>
        </div>
        <div className="flex p-2 gap-2 w-4/5 justify-center max-sm:flex-col max-sm:items-center max-md:gap-8">
          <div className="flex flex-col w-3/6 items-center gap-10 max-md:w-4/5">
            <p className="text-center font-medium">Cotidiano 🧑‍💻</p>
            <IconList iconData={stacks} />
          </div>
          <div className="flex flex-col w-2/4 gap-10">
            <p className="text-center font-medium">Aprendendo 🧑‍🎓</p>
            <IconList iconData={stacks2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTechStacks;
