"use client";
import Image from "next/image";
import React from "react";

function ApresentationCard() {
  return (
    <section className="flex text-primary-foreground h-auto justify-center mt-10">
      <div className="flex items-center justify-center max-w-3xl max-sm:flex-col">
        <div className="flex w-4/5 justify-between items-center p-4 max-sm:flex-col max-sm:gap-3">
          <Image
            className="rounded-full"
            src="/image/eddie.jpeg"
            alt="Eddie"
            width={200}
            height={200}
          />
          <div className="flex flex-col max-sm:w-3/4 p-2 font-medium w-3/5">
            <h1>Olá eu sou o Eddie 👋</h1>
            <h3>
              Sou um desenvolvedor fullstack que ama o que faz, e estou sempre
              buscando aprender coisas novas.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApresentationCard;
