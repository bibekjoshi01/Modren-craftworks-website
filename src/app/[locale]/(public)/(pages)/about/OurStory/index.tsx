'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './OurStory.module.scss';
import Thumbnail from './image.png';
import AboutProps from '../types';

const OurStory: React.FC<AboutProps> = ({
  description_en,
  description_ar,
  banner,
}) => {
  const t = useTranslations('about.ourStory');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      className={styles.container}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={styles.imageContainer}>
        <Image
          src={banner || Thumbnail}
          // src={Thumbnail}
          // src="https://emkaan.merakitechs.com/media/pages/sf.png"
          className={styles.banner}
          width={1000}
          height={1000}
          alt="our-story"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>
          {language == 'ar' ? description_ar : description_en}
        </p>
      </div>
    </section>
  );
};

export default OurStory;
