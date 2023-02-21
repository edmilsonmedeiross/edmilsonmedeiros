import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/home.module.sass';

import bootstrap from '../../public/images/bootstrap.png';
import html from '../../public/images/html.png';
import js from '../../public/images/js.png';
import react from '../../public/images/react.png';
import redux from '../../public/images/redux.png';
import sass from '../../public/images/sass.png';
import avatar from '../../public/images/sem fundo.png';
import bio from '../../public/images/transparentbio.png';
import typescript from '../../public/images/typescript.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>edmilsonmedeiross</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Olá, me chamo Eddie!</h1>
            <Image
              className={styles.ctaAvatar}
              src={avatar}
              quality={100}
              width={400}
              height={400}
              alt="bio de edmilson"
            />
          </section>
          <Image
            className={styles.ctaImage}
            src={bio}
            quality={100}
            width={545}
            height={235}
            alt="bio de edmilson"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Tecnologias que mais utilizei esse ano</h2>
            <div>
              <Image
                src={bootstrap}
                alt="bootstrap icon"
                quality={100}
                width={50}
                height={50}
              />
              <Image
                src={html}
                alt="html icon"
                quality={100}
                width={50}
                height={50}
              />
              <Image
                src={js}
                alt="javascript icon"
                quality={100}
                width={40}
                height={40}
              />
              <Image
                src={sass}
                alt="sass icon"
                quality={100}
                width={60}
                height={40}
              />
              <Image
                src={typescript}
                alt="typescript icon"
                quality={100}
                width={50}
                height={37}
              />
              <Image
                src={react}
                alt="react icon"
                quality={100}
                width={45}
                height={40}
              />
              <Image
                src={redux}
                alt="redux icon"
                quality={100}
                width={40}
                height={40}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
