'use client';
import { useEffect, useState } from 'react';

const useImageSlider = (images, delay) => {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    let i = 0;
    let id = setInterval(() => {
      setImage(images[i]);
      if (i === images.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }, delay);

    return () => clearInterval(id);
  }, [delay, images]);

  return { image };
};

export default useImageSlider;
