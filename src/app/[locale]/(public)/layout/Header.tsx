'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  const removeLanguagePrefix = (path: string) => {
    const segments = path.split('/');
    if (segments.length > 2) {
      return '/' + segments.slice(2).join('/');
    }
    return path;
  };

  const cleanedPath = removeLanguagePrefix(pathname);

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    const newPath = `/${newLanguage}${removeLanguagePrefix(pathname)}`;
    router.push(newPath); // Change the URL
  };

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
                href={`/${language}${link.path}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.languageSwitch} onClick={handleLanguageSwitch}>
          {language === 'en' ? 'العربية' : 'English'}
        </div>
      </nav>
    </header>
  );
};

export default Header;
