import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/404.module.sass';

import fan from '../../public/images/error-bro.png';

function NotFound() {
  return (
    <main className={styles.container}>
      <Image src={fan} alt="Error bro" width={300} height={300} />
      <h3>Página não encontrada volte para a home!</h3>
      <Link href="/">
        <button>Home</button>
      </Link>
    </main>
  );
}

export default NotFound;
