import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import 'animate.css';

import styles from './styles.module.sass';

import { AppContext } from 'context/AppContext';

function SideBar() {
  const router = useRouter();
  const { pathname } = router;

  const { isMounted, setIsMounted } = useContext(AppContext);

  const togleIcon = () => {
    setIsMounted(!isMounted);
  };

  return (
    <div className="animate__animated animate__rotateInUpLeft animate__faster">
      <nav className={styles.navBar}>
        <Link href="/">
          <p className={pathname === '/' ? 'active' : ''}>Home</p>
        </Link>
        <Link href="/projects">
          <p className={pathname === '/projects' ? 'active' : ''}>Projetos</p>
        </Link>
        <Link href="/about">
          <p className={pathname === '/about' ? 'active' : ''}>Sobre mim</p>
        </Link>
        <button onClick={togleIcon}>
          <FaTimes size={35} color="white" />
        </button>
      </nav>
    </div>
  );
}

export default SideBar;
