import Image from "next/image";
import React from "react";

function ApresentationCard() {
  return (
    <section className="flex max-w-5xl">
      <div className="flex w-full">
        <div className="flex flex-col max-w-sm">
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
