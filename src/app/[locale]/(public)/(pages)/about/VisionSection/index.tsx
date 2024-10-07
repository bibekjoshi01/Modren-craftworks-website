'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './VisionSection.module.scss';
import visionLogo from './image.png';

const VisionSection: React.FC = () => {
  const t = useTranslations('about.visionSection');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      className={styles.visionSection}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={visionLogo}
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
