'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';
import Logo from '../assets/images/logo.png';

export const menuLinks = [
  {
    title: 'Home',
    path: '/en',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Products',
    path: '/products',
  },
  {
    title: 'Consultation',
    path: '/consultation',
  },
  {
    title: 'Maintenance and Service',
    path: '/maintenance-and-service',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Header = () => {
  const pathname = usePathname();

  const removeLanguagePrefix = (path: string) => {
    const segments = path.split('/');
    if (segments.length > 2) {
      return '/' + segments.slice(2).join('/');
    }
    return path;
  };

  const cleanedPath = removeLanguagePrefix(pathname);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image priority={true} src={Logo} width={900} height={500} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {menuLinks?.map((link, index) => (
            <li
              key={index}
              className={`${styles.links} ${
                cleanedPath === link.path ? styles.active : ''
              }`}
            >
              <Link
                className={`${cleanedPath === link.path ? styles.active : ''}`}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.languageSwitch}>العربية</div>
      </nav>
    </header>
  );
};

export default Header;
