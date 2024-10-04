import Image from 'next/image';
import styles from './Consultation.module.scss';
import image1 from '../../assets/consultationImages/image1.png';
import image2 from '../../assets/consultationImages/image2.png';
import image3 from '../../assets/consultationImages/image3.png';
import image4 from '../../assets/consultationImages/image4.png';

import SectionTitle from '../../ui/SectionTitle';
import { OutlinedBtn } from '../../ui/Button';

const Consultation = () => {
  return (
    <div className={styles.consultation}>
      <SectionTitle
        title="CONSULTATION"
        subtitle="Expert Consultation for Your Laboratory & Cleanroom Needs"
      />

      <div className={styles.container}>
        <div className={styles.text}></div>
        <div className={styles.textContainer}>
          <p className={styles.content}>
            With over two decades of combined expertise, Emkaan is your trusted
            partner in achieving ISO certification for laboratories and
            cleanrooms. We streamline the certification process, providing
            expert guidance and support every step of the way. Let us turn your
            ISO goals into reality.
          </p>
          <div className={styles.icons}>
            <Image width={200} height={200} src={image2} alt="icon" />
            <Image width={200} height={200} src={image3} alt="icon" />
            <Image width={200} height={200} src={image4} alt="icon" />
          </div>
          <OutlinedBtn text="Learn More" svg={<ArrowRightSVG />} />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          className={styles.thumbnail}
          height={1000}
          width={1000}
          src={image1}
          alt="consultant certificate"
        />
      </div>
    </div>
  );
};

export default Consultation;

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
