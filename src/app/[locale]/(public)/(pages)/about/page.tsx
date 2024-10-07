import React from 'react';
import styles from './About.module.scss';
import OurStory from './OurStory';
import OurVision from './OurVision';
import OurObjective from './OurObjective';
import VisionSection from './VisionSection';
import AboutHero from './AboutHero';

const About = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/about-us`
    );

    // Check if response is valid
    if (!res.ok) {
      console.error('Failed to fetch data:', res.status);
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const data = await res.json();

    return (
      <section className={styles.aboutPage}>
        <AboutHero />
        <OurStory
          description_en={data?.our_story_en}
          description_ar={data?.our_story_ar}
          banner={data?.our_story_banner}
        />
        <OurVision
          description_en={data?.our_vision_en}
          banner={data?.our_vision_banner}
          description_ar={data?.our_vision_banner}
        />
        <OurObjective
          description_en={data?.our_objective_en}
          description_ar={data?.our_objective_ar}
          banner={data?.our_objective_banner}
        />
        <VisionSection />
      </section>
    );
  } catch (error: any) {
    console.log('Error fetching data: ', error);
    return <div>Error Occured. Try Again!</div>;
  }
};

export default About;
