import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';
import Consultation from '../Consultation';
import Product from '../Products';
import ContactSection from '../Contact';
import Maintenance from '../Maintenance';

import {
  productSolutionData,
  maintainanceSolutionData,
} from '../data/solutionSectionData';
import productData from '../data/productSectionData';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects Data={productSolutionData} />
      <Consultation />
      <Product Data={productData} />
      <Maintenance Data={maintainanceSolutionData} />
      <ContactSection />
    </>
  );
};

export default HomePage;
