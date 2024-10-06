'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from './Consultation.module.scss';
import image1 from '../../assets/consultationImages/image1.png';
import image2 from '../../assets/consultationImages/image2.png';
import image3 from '../../assets/consultationImages/image3.png';
import image4 from '../../assets/consultationImages/image4.png';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

import SectionTitle from '../../ui/SectionTitle';
import { OutlinedBtn } from '../../ui/Button';

const Consultation = () => {
  const t = useTranslations('home.consultation');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.consultation} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.thumbnail}
              height={1000}
              width={1000}
              src={image1}
              alt="consultant certificate"
            />
          </div>
          <div className={styles.text}></div>
          <div className={styles.textContainer}>
            <p className={styles.content}>{t('content')}</p>
            <div className={styles.icons}>
              <Image width={200} height={200} src={image2} alt="icon" />
              <Image width={200} height={200} src={image3} alt="icon" />
              <Image width={200} height={200} src={image4} alt="icon" />
            </div>
            <OutlinedBtn text={t('outlinedBtn')} svg={<ArrowRightSVG />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
