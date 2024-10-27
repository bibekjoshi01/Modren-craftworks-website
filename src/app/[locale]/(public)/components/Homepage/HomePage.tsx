import React from 'react';
import About from '../About';
import Hero from '../Hero';
import Projects from '../Projects';
import Consultation from '../Consultation';
import Product from '../Products';
import ContactSection from '../Contact';
import Maintenance from '../Maintenance';

import { projectsData } from '../../data/projects';
import { productData } from '../../data/products';
import { maintenanceSolutionData } from '../../data/homepage';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <About />
      <Projects Data={projectsData} />
      <Consultation />
      <Product Data={productData} />
      {/* <Maintenance Data={maintenanceSolutionData} /> */}
      <ContactSection />
    </>
  );
};

export default HomePage;
