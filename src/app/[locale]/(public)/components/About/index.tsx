'use client';
import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import image1 from '../../assets/aboutSectionImages/image1.png';
import image2 from '../../assets/aboutSectionImages/image2.png';
import image3 from '../../assets/aboutSectionImages/image3.png';
import useImageSlider from '../../hooks/useImageSlider';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

const About = () => {
  const { image } = useImageSlider([image1, image2, image3], 1500);

  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <Image src={image} width={1000} height={1000} alt="about images" />
      </div>
      <div className={styles.right}>
        <span className={styles.title}>About</span>
        <h1 className={styles.heading}>
          Get Started With{' '}
          <svg
            width="250"
            height="74"
            viewBox="0 0 250 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M237.69 0.957031L230.711 19.4485L225.508 0.957031H213.589L199.773 37.5462H211.696L218.535 19.4316L223.937 37.3916L223.878 37.5462H223.982V37.549L235.8 37.5462L249.613 0.957031H237.69Z"
              fill="#045161"
            />
            <path
              d="M17.5607 22.6136H30.9597L33.6226 15.8902H20.0999L23.1958 7.68214H36.1308L37.9249 2.75559L37.9502 2.73028L38.6082 0.953125H13.8573L2.54483 30.8217L0 37.5479H11.9227H24.1013L26.767 30.8217H14.4619L17.5607 22.6136Z"
              fill="#045161"
            />
            <path
              d="M123.863 0.953125H108.544L89.2057 20.0294L90.6792 16.1264L93.3843 8.95314L96.4071 0.953125H84.4816L84.4788 0.964367L73.5375 7.57809L76.0373 0.955931H75.6212H64.1287H64.1174L64.1146 0.964367L53.1621 7.58653L55.6647 0.955931H43.7448L29.9297 37.5479H41.8524L49.9986 15.969L60.8499 9.61113L50.3023 37.5479H62.225L70.374 15.9634L81.2141 9.61113L70.6693 37.5479H82.592L86.7368 26.57L88.7671 21.1908L89.1326 20.2235L98.4767 37.5479H110.7L102.616 20.5497L123.863 0.953125Z"
              fill="#045161"
            />
            <path
              d="M136.981 8.95314L140.001 0.953125H128.078L114.266 37.5479H126.188L130.333 26.57L132.363 21.1908L134.276 16.1264L136.981 8.95314Z"
              fill="#045161"
            />
            <path
              d="M132.648 20.5508L141.818 37.5491H154.039L145.957 20.5508H132.648Z"
              fill="#045161"
            />
            <path
              d="M179.801 8.95314L182.824 0.953125H170.898L157.086 37.5479H169.009L173.153 26.57L175.184 21.1908L177.096 16.1264L179.801 8.95314Z"
              fill="#045161"
            />
            <path
              d="M175.473 20.5508L184.64 37.5491H196.86L188.779 20.5508H175.473Z"
              fill="#045161"
            />
            <path
              d="M7 71C20.7557 66.5917 43.5559 61.1512 72 57.2232C100.48 53.2903 134.618 50.8737 171 52.528C191.491 53.4597 212.695 55.6827 234 59.6534"
              stroke="#045161"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </h1>
        <p className={styles.aboutText}>
          Emkaan Medical Company was established in Riyadh, KSA on solid grounds
          and is considered as an extension of the knowledge and expertise
          obtained by Scientific Diamond Company which was originally
          established in 2015 in KSA and UAE.
        </p>
        <div>
          <button className={styles.outlinedBtn}>
            <span>Learn More</span>
            <ArrowRightSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
