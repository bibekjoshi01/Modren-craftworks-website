'use client';

import React from 'react';
import Image from 'next/image';
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

const certifications: any = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

function Certifications() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {certifications?.map((certificate, index) => {
          return (
            <Image
              key={index}
              src={certificate}
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
