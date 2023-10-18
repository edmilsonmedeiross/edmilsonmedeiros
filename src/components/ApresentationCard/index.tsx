import Image from "next/image";
import React from "react";

function ApresentationCard() {
  return (
    <section className="flex md:max-w-xl sm:max-w-md text-slate-50 justify-center p-5">
      <div className="flex w-full items-center max-sm:flex-col">
        <div className="flex flex-col">
          <h1>Olá eu sou o Eddie 👋</h1>
          <h3>
            Sou um desenvolvedor fullstack que ama o que faz, e estou sempre
            buscando aprender coisas novas.
          </h3>
        </div>
        <Image
          className="rounded-full border-4 border-slate-950"
          src="/image/eddie.jpeg"
          alt="Eddie"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}

export default ApresentationCard;