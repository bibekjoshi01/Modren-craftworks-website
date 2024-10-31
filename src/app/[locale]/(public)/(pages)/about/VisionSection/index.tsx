'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './VisionSection.module.scss';
import Thumbnail from '../../../assets/aboutSectionImages/image4.webp';

const VisionSection: React.FC = () => {
  const t = useTranslations('about.visionSection');

  return (
    <section className={styles.visionSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={Thumbnail}
          alt="Vision 2030 Logo"
          width={300}
          height={150}
          className={styles.visionImage}
        />
      </div>
    </section>
  );
};

export default VisionSection;
