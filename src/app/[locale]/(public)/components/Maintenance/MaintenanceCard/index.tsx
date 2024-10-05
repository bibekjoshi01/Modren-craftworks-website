import styles from './Card.module.scss';
import Image from 'next/image';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';
import { OutlinedBtn } from '../../../ui/Button';

const MaintainanceCard = ({ imageSrc, heading, details }: any) => {
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

export default MaintainanceCard;
