import React from "react";
import { stacks } from "../../utils/stacks";
import Image from "next/image";
import IconList from "../IconList";

function MyTechStacks() {
  return (
    <div className="text-slate-50 flex flex-col gap-4">
      <div>
        <h1 className="text-xl text-center">Minhas Tech Stacks</h1>
        <p className="text-center">
          Tecnologias que mais tranalhei recentemente 🧑‍💻
        </p>
      </div>
      <div className="flex gap-3 rounded-full">
        <IconList iconData={stacks} />
      </div>
    </div>
  );
}

export default MyTechStacks;
