import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

import styles from './styles.module.sass';

import { AppContext } from 'context/AppContext';

function Header() {
  const router = useRouter();
  const { pathname } = router;

  const { isMounted, setIsMounted } = useContext(AppContext);

  const togleIcon = () => {
    setIsMounted(!isMounted);
  };

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
            <button onClick={togleIcon}>
              <FaBars size={35} color="white" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
