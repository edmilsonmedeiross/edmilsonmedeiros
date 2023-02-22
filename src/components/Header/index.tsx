import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.sass';

function Header() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <nav>
            <Link href="/">
              <p className={pathname === '/' ? 'active' : ''}>Home</p>
            </Link>
            <Link href="/projects">
              <p className={pathname === '/projects' ? 'active' : ''}>
                Projetos
              </p>
            </Link>
            <Link href="/about">
              <p className={pathname === '/about' ? 'active' : ''}>Sobre mim</p>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
