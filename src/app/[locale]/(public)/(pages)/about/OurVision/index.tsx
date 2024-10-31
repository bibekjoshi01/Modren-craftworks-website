'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import styles from './OurVision.module.scss';
import Thumbnail from '../../../assets/aboutSectionImages/image3.png';

const OurVision = () => {
  const t = useTranslations('about.ourVision');

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={Thumbnail}
          className={styles.banner}
          width={1000}
          height={1000}
          alt="our-vision"
        />
      </div>
    </section>
  );
};

export default OurVision;
