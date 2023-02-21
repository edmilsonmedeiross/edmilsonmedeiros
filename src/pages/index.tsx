import Head from 'next/head';
import Image from 'next/image';
import 'animate.css';

import Stack from 'components/Stack';

import styles from '../styles/home.module.sass';

import avatar from '../../public/images/sem fundo.png';
import bio from '../../public/images/transparentbio.png';

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
            <h1 className="animate__animated animate__fadeInLeft animate__slow">
              Olá, me chamo <span>Eddie!</span>
            </h1>
            <Image
              className={`${styles.ctaAvatar} animate__animated animate__fadeIn animate__slow animate__delay-2s	`}
              src={avatar}
              quality={100}
              width={400}
              height={400}
              alt="bio de edmilson"
              priority={true}
            />
          </section>
          <Image
            className={`${styles.ctaImage} animate__animated animate__slideInRight animate__slow `}
            src={bio}
            quality={100}
            width={545}
            height={235}
            alt="bio de edmilson"
            priority={true}
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Tecnologias que mais utilizei esse ano</h2>
            <Stack />
          </section>
        </div>
      </main>
    </>
  );
}
