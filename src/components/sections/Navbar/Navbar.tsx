import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import logoColor from '../../../assets/images/LogoColor.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.inner}>
        <a href="/" aria-label="SomFlow — Inici">
          <img src={logoColor} alt="SomFlow" className={styles.logo} />
        </a>

        <a href="#contacte" className={styles.cta}>
          Parlem
        </a>
      </div>
    </header>
  );
}
