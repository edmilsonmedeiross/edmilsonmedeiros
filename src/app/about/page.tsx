"use strict";
import { Button } from "@/components/ui/button";
import React from "react";

function About() {
  return (
    <section className="h-full w-full flex flex-col items-center p-5">
      <h2>Sobre Mim</h2>
      <div className="max-w-3xl">
        <article>
          <p>
            Com mais de uma década de experiência na indústria, abrangendo desde
            a montagem de equipamentos até a manutenção, possuo formação técnica
            em Eletrônica e Mecânica e cursei parte de Engenharia Mecânica.
          </p>
          <p>
            Durante a graduação, encontrei minha paixão por programação e cursei
            desenvolvimento web Full-Stack na Trybe. Atualmente, estou cursando
            Análise e Desenvolvimento de Sistemas.
          </p>
          <p>
            Minha experiência em manutenção de equipamentos e minha nova
            formação me proporcionam uma visão única para solucionar problemas
            em equipe. Como desenvolvedor, estou sempre buscando aprender e
            aplicar novas tecnologias.
          </p>
          <p>
            Sou comunicativo, autodidata e estou trabalhando na área de
            tecnologia como dev Full Stack na Agrobook. Agradeço por visitar meu
            portfólio.
          </p>
        </article>
      </div>
      <Button variant={"outline"} size={"lg"} className="w-full">
        Contato
      </Button>
    </section>
  );
}

export default About;
