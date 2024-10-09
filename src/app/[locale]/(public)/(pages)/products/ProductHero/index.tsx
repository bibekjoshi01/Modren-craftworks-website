'use client';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './ProductHero.module.scss';

const ProductHero = () => {
  const t = useTranslations('product');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      className={styles.container}
      dir={language == 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className={styles.title}>{t('title')}</h1>
    </section>
  );
};

export default ProductHero;
