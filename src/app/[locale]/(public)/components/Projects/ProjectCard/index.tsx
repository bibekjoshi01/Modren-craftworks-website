import styles from './ProjectCard.module.scss';
import Image from 'next/image';
import { OutlinedBtn } from '../../../ui/Button';
import ArrowRightSVG from '../../../ui/ArrowRightSVG';

const ProjectCard = ({ imageSrc, heading, details }: any) => {
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

export default ProjectCard;
