import styles from './Card.module.scss';
import Image from 'next/image';
import { OutlinedBtn } from '../Button';

const Card = ({ imageSrc, heading, details }: any) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt="solution image"
        width={300}
        height={200}
        objectFit="cover"
      />
      <div className={styles.content}>
        <h1 className={`${styles.heading} ${!details && styles.center}`}>
          {heading}
        </h1>
        {details && <p className={styles.details}>{details}</p>}
        <div className={styles.button}>
          <OutlinedBtn text="Learn More" svg={<ArrowRightSVG />} />
        </div>
      </div>
    </div>
  );
};

function ArrowRightSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="34px"
      fill="#e8eaed"
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
}

export default Card;
