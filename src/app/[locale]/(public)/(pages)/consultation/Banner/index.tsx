'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  const t = useTranslations('consultation');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      className={styles.container}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <div className={styles.textContainer}>
        <p className={styles.description}>{t('banner')}</p>
      </div>
    </section>
  );
};

export default Banner;
