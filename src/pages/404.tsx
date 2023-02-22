import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/404.module.sass';

import fan from '../../public/images/error-bro.png';

function NotFound() {
  return (
    <main className={styles.container}>
      <Image src={fan} alt="Error bro" width={300} height={300} quality={100} />
      <h3>Em breve você verá meus projetos aqui!</h3>
      <p>
        Por enquanto leia sobre minha trajetória e fique à vontade para entrar
        em contato.{' '}
      </p>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </main>
  );
}

export default NotFound;
