'use client';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './ProductCarousel.module.scss';
import Image1 from '../../../assets/products/image1.png';
import type { Swiper as SwiperType } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slides = [
    { title: 'Lab & Cleanroom Furniture', image: Image1 },
    { title: 'Laboratory Equipment', image: Image1 },
    { title: 'Refrigerators & Freezers', image: Image1 },
    { title: 'Monitoring Systems', image: Image1 },
    { title: 'Monitoring Systems', image: Image1 },
    { title: 'Monitoring Systems', image: Image1 },
    { title: 'Monitoring Systems', image: Image1 },
  ];

  useEffect(() => {
    // @ts-ignore
    const swiper = document.querySelector('.mySwiper')?.swiper as SwiperType;
    if (swiper) {
      // @ts-ignore
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        speed={1000}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className={`"mySwiper" ${styles.carousel}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideItem}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={200}
                height={200}
                className={styles.slideImage}
              />
              <p className={styles.slideTitle}>{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevRef}
        className={`${styles.navButton} ${styles.prevButton} ${
          isBeginning ? styles.disabled : ''
        }`}
      >
        <FaChevronLeft />
      </button>
      <button
        ref={nextRef}
        className={`${styles.navButton} ${styles.nextButton} ${
          isEnd ? styles.disabled : ''
        }`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
