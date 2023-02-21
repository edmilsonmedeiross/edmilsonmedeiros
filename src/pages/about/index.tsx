import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import styles from './styles.module.sass';

import avatar from '../../../public/images/aboutAvatar.jpeg';
import whats from '../../../public/images/WhatsApp.svg';

function About() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.containerCtt}>
          <h1>
            Oi eu sou o <span>Eddie</span>
          </h1>
          <Image
            src={avatar}
            alt="Eddie"
            width={300}
            height={300}
            quality={100}
            priority={true}
            placeholder="blur"
          />
          <div>
            <Link href="https://github.com/edmilsonmedeiross" target="_blank">
              <FaGithub size={40} />
            </Link>
            <Link
              className={styles.linkedin}
              href="https://www.linkedin.com/in/edmilsonmedeiross/"
              target="_blank"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              className={styles.whatssapp}
              href="https://api.whatsapp.com/send?phone=5521996332444&text=Ol%C3%A1%20Eddie"
              target="_blank"
            >
              <Image src={whats} alt="Whatsapp icon" width={45} height={45} />
            </Link>
          </div>
        </section>
        <section className={styles.containerText}>
          <article className={styles.text}>
            <p>
              Com mais de 10 anos de atuação na área industrial, desde a
              montagem de equipamentos até a manutenção, sou formado em Técnico
              em Eletrônica e Mecânica, além de ter cursado 3 períodos de
              Engenharia Mecânica. Durante a minha graduação, descobri a minha
              paixão pela programação e me sinto realizado por estar estudando
              desenvolvimento web Full Stack na Trybe, uma grande instituição de
              ensino.
            </p>
            <p>
              Ao longo da minha carreira, adquiri experiência na resolução de
              problemas com a manutenção de equipamentos, além de ter me
              aprimorado em habilidades técnicas que agora aplico no
              desenvolvimento de softwares. Sempre estou em busca de novos
              desafios e oportunidades de crescimento profissional, e acredito
              que a combinação da minha experiência anterior com minha formação
              atual em desenvolvimento web Full Stack me permite ter uma
              perspectiva única em solucionar problemas em equipe.
            </p>
            <p>
              Eu sou um desenvolvedor curioso e sempre estou aprendendo coisas
              novas, testando novas tecnologias e frameworks para aprimorar
              minhas habilidades, sou uma pessoa comunicativa e autodidata
              disposto a aprender com meus colegas e ajuda-los quando for
              preciso.
            </p>
            <p>
              Espero que este portfólio seja uma boa demonstração do meu
              trabalho e que possa lhe dar uma ideia do que eu posso oferecer
              como desenvolvedor. Se você estiver interessado em trabalhar
              comigo, sinta-se à vontade para entrar em contato. <br />
              <span>Obrigado por visitar o meu portfólio!</span>
            </p>
          </article>
        </section>
        <div className={styles.bottomBar}>
          <Link href="https://github.com/edmilsonmedeiross" target="_blank">
            <FaGithub size={40} />
          </Link>
          <Link
            className={styles.linkedin}
            href="https://www.linkedin.com/in/edmilsonmedeiross/"
            target="_blank"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            className={styles.whatssapp}
            href="https://api.whatsapp.com/send?phone=5521996332444&text=Ol%C3%A1%20Eddie"
            target="_blank"
          >
            <Image src={whats} alt="Whatsapp icon" width={45} height={45} />
          </Link>
        </div>
      </main>
    </>
  );
}

export default About;
