'use client';

import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import styles from './Certifications.module.scss';
import Image1 from '../../../assets/consultationImages/Certifications/image1.png';
import Image2 from '../../../assets/consultationImages/Certifications/image2.png';
import Image3 from '../../../assets/consultationImages/Certifications/image3.png';
import Image4 from '../../../assets/consultationImages/Certifications/image4.png';
import Image5 from '../../../assets/consultationImages/Certifications/image5.png';
import Image6 from '../../../assets/consultationImages/Certifications/image6.png';
import Image7 from '../../../assets/consultationImages/Certifications/image7.png';
import Image8 from '../../../assets/consultationImages/Certifications/image8.png';
import Image9 from '../../../assets/consultationImages/Certifications/image9.png';

type Certification = {
  source: StaticImageData;
  alt: string;
};

const certifications: Certification[] = [
  { source: Image1, alt: 'Certificate 1' },
  { source: Image2, alt: 'Certificate 2' },
  { source: Image3, alt: 'Certificate 3' },
  { source: Image4, alt: 'Certificate 4' },
  { source: Image5, alt: 'Certificate 5' },
  { source: Image6, alt: 'Certificate 6' },
  { source: Image7, alt: 'Certificate 7' },
  { source: Image8, alt: 'Certificate 8' },
  { source: Image9, alt: 'Certificate 9' },
];

function Certifications() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {certifications?.map((certificate, index) => {
          return (
            <Image
              key={index}
              src={certificate?.source}
              width={500}
              height={500}
              alt="certificate"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
