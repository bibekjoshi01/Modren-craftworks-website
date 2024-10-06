'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Logo from '../assets/images/logo.png';
import { getMenuLinks } from './menuLinks';

const Header = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Get the translated menu links
  const menuLinks = getMenuLinks(t);

  // Extract the language (first path segment)
  const language = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
      }
      return null;
    };

    // Retrieve the value of the cookie
    const cookieValue = getCookie('NEXT_LOCALE');

    if (cookieValue) {
      setSelectedLanguage(cookieValue);

      // Redirect if the current language does not match the cookie value
      if (cookieValue !== language) {
        const newPath = pathname.replace(`/${language}`, `/${cookieValue}`);
        router.replace(newPath);
      }
    } else {
      setSelectedLanguage(language);
      router.push(`/${selectedLanguage}`);
    }
  }, [language, pathname, router, selectedLanguage]);

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';

    // Set the cookie
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/`;

    // Construct the new path
    const newPath = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.push(newPath); // Change the URL
  };

  return (
    <header
      className={styles.header}
      dir={selectedLanguage == 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={styles.logo}>
        <Image priority src={Logo} width={900} height={500} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {menuLinks.map((link, index) => {
            const strippedPath = pathname.split('/').slice(2).join('/');
            const linkPath = link.path.replace(/^\//, '');

            return (
              <li
                key={index}
                className={`${styles.links} ${
                  strippedPath === linkPath ? styles.active : ''
                }`}
              >
                <Link
                  href={`/${language}${link.path}`}
                  className={strippedPath == linkPath ? styles.active : ''}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.languageSwitch} onClick={handleLanguageSwitch}>
          {language === 'en' ? 'العربية' : 'English'}
        </div>
      </nav>
    </header>
  );
};

export default Header;
