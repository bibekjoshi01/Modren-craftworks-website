import styles from './Product.module.scss';
import ProductHero from './ProductHero';
import ProductCarousel from './ProductCarousel';

const Products = () => {
  return (
    <section className={styles.maintenancePage}>
      <ProductHero />
      <ProductCarousel />
    </section>
  );
};

export default Products;
