'use client';
import styles from './Card.module.scss';
import Image from 'next/image';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';
import { OutlinedBtn } from '../../../ui/Button';
import { useTranslations } from 'next-intl';

const MaintenanceCard = ({ data, language }: any) => {
  const t = useTranslations('home.maintenance');

  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={data?.thumbnail}
        alt="solution image"
        width={300}
        height={200}
      />
      <div className={styles.content}>
        <h1 className={`${styles.heading} ${!data?.details && styles.center}`}>
          {language == 'np' ? data?.title_np : data?.title_en}
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
