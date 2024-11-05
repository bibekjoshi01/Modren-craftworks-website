'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from './About.module.scss';
import image1 from '../../assets/aboutSectionImages/image1.png';
import image2 from '../../assets/aboutSectionImages/image2.png';
import image3 from '../../assets/aboutSectionImages/image3.png';
import useImageSlider from '../../hooks/useImageSlider';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

import bgImage1 from '../../../../../../public/svg/Group49.png';

const About = () => {
  const { image } = useImageSlider([image1, image2, image3], 1500);
  const t = useTranslations('home.about');
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/about');
  };

  return (
    <div className={styles.about}>
      <div className={styles.gradientEllipse}></div>
      <div>
        <Image
          src={bgImage1}
          width={0}
          height={0}
          alt="about images"
          className={styles.backgroundImgContainer}
        />
      </div>

      <div className={styles.left}>
        <Image src={image} width={1000} height={1000} alt="about images" />
      </div>
      <div className={styles.right}>
        <span className={styles.title}>{t('title')}</span>
        <h1 className={styles.heading}>
          {t('heading')} <span>MODREN</span>
        </h1>
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
