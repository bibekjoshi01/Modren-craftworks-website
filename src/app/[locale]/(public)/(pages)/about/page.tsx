import React from 'react';
import styles from './About.module.scss';
import OurStory from './OurStory';
import OurVision from './OurVision';
import OurObjective from './OurObjective';
import VisionSection from './VisionSection';
import AboutHero from './AboutHero';

const About = async () => {
  return (
    <section className={styles.aboutPage}>
      <AboutHero />
      <OurStory />
      <OurVision />
      <OurObjective />
      <VisionSection />
    </section>
  );
};

export default About;
