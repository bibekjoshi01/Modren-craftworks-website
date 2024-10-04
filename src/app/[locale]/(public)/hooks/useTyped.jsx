'use client';
import { useEffect } from 'react';
import Typed from 'typed.js';

const useTyped = (elementSelector, options) => {
  useEffect(() => {
    const typed = new Typed(elementSelector, options);

    return () => {
      typed.destroy();
    };
  }, [elementSelector, options]);
};

export default useTyped;
