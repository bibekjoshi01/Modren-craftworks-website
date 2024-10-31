'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  const t = useTranslations('maintenance');

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.description}>{t('banner')}</p>
      </div>
    </section>
  );
};

export default Banner;
