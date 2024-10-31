'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './AboutHero.module.scss';
import TopBanner from '../../../assets/aboutSectionImages/top-banner.jpg';

const AboutHero = () => {
  const t = useTranslations('about.hero');

  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>{t('title')}</h1>
        <Image
          src={TopBanner}
          width={1000}
          height={400}
          alt="about-us-banner"
        ></Image>
      </div>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          {t('heading')}
          <span>MODREN</span>
        </h1>
        <p className={styles.aboutText}>{t('aboutText')}</p>
      </div>
    </section>
  );
};

export default AboutHero;
