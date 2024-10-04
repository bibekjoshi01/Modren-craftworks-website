'use client';
import Image from 'next/image';
import styles from './About.module.scss';
import image1 from '../../assets/aboutSectionImages/image1.png';
import image2 from '../../assets/aboutSectionImages/image2.png';
import image3 from '../../assets/aboutSectionImages/image3.png';
import image4 from '../../assets/aboutSectionImages/image4.png';
import { OutlinedBtn } from '../../ui/Button';
import useImageSlider from '../../hooks/useImageSlider';

const About = () => {
  const { image } = useImageSlider([image1, image2, image3], 1500);

  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <Image src={image} width={200} height={200} alt="about images" />
      </div>
      <div className={styles.right}>
        <span className={styles.title}>About</span>
        <h1 className={styles.heading}>
          Get Started With{' '}
          <Image src={image4} width={200} height={200} alt="EMKAAN" />
        </h1>
        <p className={styles.aboutText}>
          Emkaan Medical Company was established in Riyadh, KSA on solid grounds
          and is considered as an extension of the knowledge and expertise
          obtained by Scientific Diamond Company which was originally
          established in 2015 in KSA and UAE.
        </p>
        <div>
          <OutlinedBtn text="Learn More" svg={<ArrowRightSVG />} />
        </div>
      </div>
    </div>
  );
};

export default About;

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
