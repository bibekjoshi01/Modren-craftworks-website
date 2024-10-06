'use client';
import styles from './Maintenance.module.scss';
import SectionTitle from '../../ui/SectionTitle';
import MaintenanceCard from './Card';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Maintenance = ({ Data }: any) => {
  const t = useTranslations('home.maintenance');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.solutions} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />
      <div className={styles.cards}>
        {Data.map((solution: any) => (
          <MaintenanceCard key={solution.id} data={solution} />
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
