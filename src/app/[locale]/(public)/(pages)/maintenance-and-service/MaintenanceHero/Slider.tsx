'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import useImageSliderWithViewTransition from '../../../hooks/useImageSliderWithViewTransition';
import image1 from '../../../assets/solutionSectionImages/maintainanceSolutionImages/image1.png';
import image2 from '../../../assets/solutionSectionImages/maintainanceSolutionImages/image2.png';
import image3 from '../../../assets/solutionSectionImages/maintainanceSolutionImages/image3.png';

// Define initial images
const imageObjsInitial = [
  {
    id: 1,
    src: image1,
    title: 'Maintenance',
  },
  {
    id: 2,
    src: image2,
    title: 'Calibration',
  },
  {
    id: 3,
    src: image3,
    title: 'Testing',
  },
];

const Slider = () => {
  const { imageObjs } = useImageSliderWithViewTransition(
    imageObjsInitial,
    2000
  );

  const classNames = ['one', 'two', 'three'];

  return (
    <div className={styles.imageContainer}>
      {imageObjs.map((imageObj, index) => (
        <div key={imageObj.id} className={styles[classNames[index]]}>
          <Image
            height={500}
            width={500}
            src={imageObj.src}
            alt={imageObj.title}
          />
          <h1 className={styles.title}>{imageObj.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Slider;
