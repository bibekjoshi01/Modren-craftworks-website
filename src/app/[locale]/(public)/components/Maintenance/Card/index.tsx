'use client';
import styles from './Card.module.scss';
import Image from 'next/image';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';
import { OutlinedBtn } from '../../../ui/Button';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const MaintenanceCard = ({ data }: any) => {
  const t = useTranslations('home.maintenance');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.card} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <Image
        className={styles.image}
        src={data?.imageSrc}
        alt="solution image"
        width={300}
        height={200}
      />
      <div className={styles.content}>
        <h1 className={`${styles.heading} ${!data?.details && styles.center}`}>
          {data?.heading}
        </h1>
        {data?.details && <p className={styles.details}>{data?.details}</p>}
        <div className={styles.button}>
          <OutlinedBtn text={t('outlinedBtn')} svg={<ArrowRightSVG />} />
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;
