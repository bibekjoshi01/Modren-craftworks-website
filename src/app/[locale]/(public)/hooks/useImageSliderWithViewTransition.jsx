import { useState, useEffect } from 'react';

const useImageSliderWithViewTransition = (
  initialImages,
  intervalTime = 2000
) => {
  const [imageObjs, setImageObjs] = useState(initialImages);

  useEffect(() => {
    const rotateImages = () => {
      setImageObjs((prevImageObjs) => [
        prevImageObjs[2], // 3rd to 1st
        prevImageObjs[0], // 1st to 2nd
        prevImageObjs[1], // 2nd to 3rd
      ]);
    };

    // interval for rotating images
    const id = setInterval(() => {
      document.startViewTransition(() => {
        rotateImages();
      });
    }, intervalTime);

    return () => clearInterval(id);
  }, [intervalTime]);

  return { imageObjs };
};

export default useImageSliderWithViewTransition;
