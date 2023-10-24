"use client";
import React from "react";
import { stacks, stacks2 } from "../../utils/stacks";
import Image from "next/image";
import IconList from "../IconList";

function MyTechStacks() {
  return (
    <section className="flex flex-col border-2 border-violet-600 w-full items-center">
      <div className="text-slate-50 flex flex-col items-center gap-4 border-2 max-w-3xl">
        <div className="fex flex-col p-5">
          <h1 className="text-xl text-center">Minhas Tech Stacks</h1>
        </div>
        <div className="flex border-2 border-red-500 p-2 gap-2 w-4/5 justify-center">
          <div className="flex flex-col w-3/6 items-center gap-10 border-2 border-yellow-300">
            <p className="text-center">Cotidiano 🧑‍💻</p>
            <IconList iconData={stacks} />
          </div>
          <div className="flex flex-col w-2/4 gap-10 border-2 border-yellow-300">
            <p className="text-center">Aprendendo 🧑‍🎓</p>
            <IconList iconData={stacks2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTechStacks;
