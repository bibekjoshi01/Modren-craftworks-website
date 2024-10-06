'use client';
import styles from './Projects.module.scss';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import SectionTitle from '../../ui/SectionTitle';
import ProjectCard from './ProjectCard';

const Projects = ({ Data }: any) => {
  const t = useTranslations('home.project');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.solutions} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />
      <div className={styles.cards}>
        {Data.slice(0, 3).map((solution: any) => (
          <ProjectCard key={solution?.id} data={solution} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
