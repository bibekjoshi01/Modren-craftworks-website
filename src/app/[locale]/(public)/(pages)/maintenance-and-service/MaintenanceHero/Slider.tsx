'use client';
import React from 'react';
import styles from './Slider.module.scss';
import Image, { StaticImageData } from 'next/image';
import useImageSliderWithViewTransition from '../../../hooks/useImageSliderWithViewTransition';
import image1 from '../../../assets/maintainance/image1.png';
import image2 from '../../../assets/maintainance/image2.png';
import image3 from '../../../assets/maintainance/image3.png';

// Define initial images
type imageData = {
  id: number;
  src: StaticImageData;
  title: string;
};

const imageObjsInitial: imageData[] = [
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
      {imageObjs?.map((obj: imageData, index: number) => (
        <div key={obj.id} className={styles[classNames[index]]}>
          <Image height={500} width={500} src={obj.src} alt={obj.title} />
          <h1 className={styles.title}>{obj.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Slider;
