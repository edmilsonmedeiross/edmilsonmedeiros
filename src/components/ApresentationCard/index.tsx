"use client";
import Image from "next/image";
import React from "react";

function ApresentationCard() {
  return (
    <section className="flex border-2 border-red-600 text-primary-foreground h-auto justify-center mt-10">
      <div className="flex items-center justify-center max-w-3xl max-sm:flex-col border-2">
        <div className="flex border-2 w-4/5 border-violet-600 items-center p-4 max-sm:flex-col max-sm:gap-3">
          <Image
            className="rounded-full"
            src="/image/eddie.jpeg"
            alt="Eddie"
            width={200}
            height={200}
          />
          <div className="flex flex-col max-sm:w-3/4 p-2 font-medium">
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
