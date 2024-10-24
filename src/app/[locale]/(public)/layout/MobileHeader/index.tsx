'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getMenuLinks } from '../../data/menuLinks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import styles from './MobileHeader.module.scss';
import Logo from '../../assets/images/logo.png';

const MobileHeader = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Get the translated menu links
  const menuLinks = getMenuLinks(t);

  const handleShowHideSideBar = () => {
    setActiveSidebar(!activeSidebar);
  };

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
    const newLanguage = language === 'en' ? 'np' : 'en';

    // Set the cookie
    document.cookie = `NEXT_LOCALE=${newLanguage}; path=/`;

    // Construct the new path
    const newPath = pathname.replace(`/${language}`, `/${newLanguage}`);
    router.push(newPath); // Change the URL
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.flexContainer}>
          <button
            className={styles.hamburgerMenu}
            onClick={handleShowHideSideBar}
          >
            <RxHamburgerMenu className={styles.icon} />
          </button>
          <Link href="/" className={styles.logo}>
            <Image
              priority={true}
              src={Logo}
              width={800}
              height={350}
              alt="Logo"
            />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${styles.sidebarWrapper} ${
          activeSidebar ? styles.active : ''
        }`}
      >
        <div className={styles.sidebar}>
          <button className={styles.closeBtn} onClick={handleShowHideSideBar}>
            <IoClose className={styles.closeIcon} />
          </button>
          <ul className={styles.menuList}>
            {menuLinks.map((item, index) => (
              <li key={index} className={styles.menuItem}>
                <Link href={item.path} onClick={handleShowHideSideBar}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.languageSwitch} onClick={handleLanguageSwitch}>
            {language === 'en' ? 'नेपाली' : 'English'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
