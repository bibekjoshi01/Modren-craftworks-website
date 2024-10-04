import Image from 'next/image';
import styles from './Products.module.scss';
import SectionTitle from '../../ui/SectionTitle';
import { FilledBtn } from '../../ui/Button';

const Product = ({ Data }) => {
  return (
    <div className={styles.products}>
      <SectionTitle
        title="PRODUCTS"
        subtitle="Solutions For Healthier Tomorrow"
      />
      <p className={styles.detail}>
        Emkaan Provide integrated solutions to cover almost every need in any
        kind of a laboratory, cooperating with the world&rsquo;s producer
      </p>
      <div className={styles.cards}>
        {Data?.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
      <FilledBtn text="Learn More" svg={<ArrowRightSVG />} />
    </div>
  );
};

export default Product;

function ProductCard({ title, imageSrc }) {
  return (
    <>
      <div className={styles.card}>
        <Image src={imageSrc} width={200} height={200} alt="logo" />
        <h1>{title}</h1>
      </div>
    </>
  );
}

function ArrowRightSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </>
  );
}
