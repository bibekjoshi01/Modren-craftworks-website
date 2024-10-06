'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ProjectCard.module.scss';
import { OutlinedBtn } from '../../../ui/Button';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';

const ProjectCard = ({ data }: any) => {
  const t = useTranslations('home.project');

  return (
    <div className={styles.card}>
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

export default ProjectCard;
