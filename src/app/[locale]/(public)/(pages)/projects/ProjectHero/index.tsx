'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './ProjectHero.module.scss';

const ProjectHero = () => {
  const t = useTranslations('project');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  const projectCategories = ['Turnkey Solutions', 'Laboratories', 'Clean Room'];

  return (
    <section
      className={styles.container}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className={styles.title}>{t('title')}</h1>
      <div className={styles.categories}>
        {projectCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <span className={styles.categoryText}>{category}</span>
            <div className={styles.underline}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectHero;
