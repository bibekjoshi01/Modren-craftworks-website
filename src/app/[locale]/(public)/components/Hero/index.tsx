'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.scss';
import image1 from '../../assets/heroSectionImages/image1.png';
import image2 from '../../assets/heroSectionImages/image2.png';
import image3 from '../../assets/heroSectionImages/image3.png';
import image4 from '../../assets/heroSectionImages/image4.png';
import useTyped from '../../hooks/useTyped';
import ArrowRightSVG from '../../ui/ArrowRightSVG';
import { SiSnapcraft } from 'react-icons/si';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa6';

const Hero = () => {
  const t = useTranslations('home.hero');

  // Split the string into an array
  const animatedText = t('animatedText').split(',');
  const features = t('features').split(',');
  const detailText = t('detailText').split('/');

  useTyped('#auto-type', {
    strings: animatedText,
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.heading}>{t('heading')}</h1>
        <h2>
          <span id="auto-type" className={styles.animatedText}></span>
        </h2>
        <p className={styles.detailText}>
          {detailText[0]}
          <br />
          {detailText[1]}
        </p>
        <div className={styles.buttons}>
          <button className={styles.filledBtn}>
            <span>{t('filledBtn')}</span>
          </button>
          <button className={styles.outlinedBtn}>
            <span>{t('outlinedBtn')}</span>
            <ArrowRightSVG />
          </button>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <SiSnapcraft size={20} />
            <span>{features[0]}</span>
          </div>
          <div className={styles.feature}>
            <MdOutlineDashboardCustomize size={20} />
            <span>{features[1]}</span>
          </div>
          <div className={styles.feature}>
            <FaRegHandshake size={20} />
            <span>{features[2]}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.two}>
          <Image
            src={image1}
            width={500}
            height={200}
            alt="Clean Room Design Image 2"
          />
          <Image
            src={image2}
            width={500}
            height={200}
            alt="Clean Room Design Image 3"
          />
        </div>
        <div className={styles.one}>
          <Image
            src={image3}
            width={500}
            height={200}
            alt="Clean Room Design Image 1"
          />
        </div>

        <div className={styles.one}>
          <Image
            src={image4}
            width={500}
            height={300}
            alt="Clean Room Design Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
