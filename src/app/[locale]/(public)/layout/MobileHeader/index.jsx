'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getMenuLinks } from '../menuLinks';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import styles from './MobileHeader.module.scss';
import Logo from '../../assets/images/logo.png';

const MobileHeader = () => {
  const t = useTranslations();
  const [activeSidebar, setActiveSidebar] = useState(false);

  // Get the translated menu links
  const menuLinks = getMenuLinks(t);

  const handleShowHideSideBar = () => {
    setActiveSidebar(!activeSidebar);
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
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
