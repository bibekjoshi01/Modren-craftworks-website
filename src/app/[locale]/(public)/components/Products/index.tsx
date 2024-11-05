'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './Products.module.scss';
import SectionTitle from '../../ui/SectionTitle';
import { FilledBtn } from '../../ui/Button';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

interface Product {
  id: number;
  titleEn: string;
  titleNp: string;
  imageSrc: StaticImageData;
}

const Product = ({ Data }: { Data: Product[] }) => {
  const t = useTranslations('home.products');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.products}>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />
      <p className={styles.detail}>{t('detail')}</p>
      <div className={styles.cards}>
        {Data?.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            title={language == 'en' ? product.titleEn : product.titleNp}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
      <FilledBtn text={t('outlinedBtn')} svg={<ArrowRightSVG />} />
    </div>
  );
};

export default Product;

function ProductCard({
  title,
  imageSrc,
}: {
  title: string;
  imageSrc: StaticImageData;
}) {
  return (
    <>
      <div className={styles.card}>
        <Image src={imageSrc} width={200} height={200} alt="logo" />
        <h1>{title}</h1>
      </div>
    </>
  );
}
