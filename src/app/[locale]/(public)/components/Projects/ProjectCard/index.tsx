'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './ProjectCard.module.scss';
import { OutlinedBtn } from '../../../ui/Button';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';
import { stripHtmlTags } from '../../../utils';

const ProjectCard = ({ data, language }: any) => {
  const t = useTranslations('home.project');

  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={data?.thumbnail}
        alt={data?.title_en}
        width={300}
        height={200}
      />
      <div className={styles.content}>
        <h1
          className={`${styles.heading} ${
            !data?.description_en && styles.center
          }`}
        >
          {language == 'ar' ? data?.title_ar : data?.title_en}
        </h1>
        {data?.description_en && (
          <p className={styles.details}>
            {language === 'ar'
              ? stripHtmlTags(data?.description_ar)
              : stripHtmlTags(data?.description_en)}
          </p>
        )}
        <div className={styles.button}>
          <OutlinedBtn text={t('outlinedBtn')} svg={<ArrowRightSVG />} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
