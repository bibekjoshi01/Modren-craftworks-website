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

const HomePage = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_BASE_URL}`);

    // Check if response is valid
    if (!res.ok) {
      console.error('Failed to fetch data:', res.status);
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const posts = await res.json();
    console.log(posts, 'posts');

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
  } catch (error: any) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Error loading page</h1>
        <p>{error?.message}</p>
      </div>
    );
  }
};

export default HomePage;
