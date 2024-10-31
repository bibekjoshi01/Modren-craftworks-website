'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './OurStory.module.scss';
import Thumbnail from '../../../assets/aboutSectionImages/image1.png';

const OurStory = () => {
  const t = useTranslations('about.ourStory');
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={Thumbnail}
          className={styles.banner}
          width={1000}
          height={1000}
          alt="our-story"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p>
      </div>
    </section>
  );
};

export default OurStory;
