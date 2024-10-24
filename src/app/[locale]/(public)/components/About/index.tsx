'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from './About.module.scss';
import image1 from '../../assets/aboutSectionImages/image1.png';
import image2 from '../../assets/aboutSectionImages/image2.png';
import image3 from '../../assets/aboutSectionImages/image3.png';
import useImageSlider from '../../hooks/useImageSlider';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

const About = () => {
  const { image } = useImageSlider([image1, image2, image3], 1500);
  const t = useTranslations('home.about');
  const router = useRouter();
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/about');
  };

  return (
    <div className={styles.about} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.left}>
        <Image src={image} width={1000} height={1000} alt="about images" />
      </div>
      <div className={styles.right}>
        <span className={styles.title}>{t('title')}</span>
        <h1 className={styles.heading}>{t('heading')} </h1>
        <p className={styles.aboutText}>{t('aboutText')}</p>
        <div>
          <button onClick={handleClick} className={styles.outlinedBtn}>
            <span>{t('outlinedBtn')}</span>
            <ArrowRightSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
