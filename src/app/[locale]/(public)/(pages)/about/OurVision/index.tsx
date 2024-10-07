'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import styles from './OurVision.module.scss';
import Thumbnail from './image.png';
import AboutProps from '../types';

const OurVision: React.FC<AboutProps> = ({
  description_en,
  description_ar,
  banner,
}) => {
  const t = useTranslations('about.ourVision');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      className={styles.container}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>
          {language == 'ar' ? description_ar : description_en}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={banner || Thumbnail}
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
