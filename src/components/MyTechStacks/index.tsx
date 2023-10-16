import React from "react";
import { stacks } from "../../utils/stacks";
import Image from "next/image";

function MyTechStacks() {
  return (
    <div>
      <h1>Minhas Tech Stacks</h1>
      <p>Tecnologias que mais tranalhei recentemente 🧑‍💻</p>
      <div className="flex gap-3 rounded-full">
        {stacks.map((stack) => {
          return (
            <Image
              className="rounded-full"
              key={stack.name}
              src={stack.image}
              alt={stack.name}
              width={35}
              height={35}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyTechStacks;
