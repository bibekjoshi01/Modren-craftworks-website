import styles from './Projects.module.scss';

import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

const Projects = ({ Data }: any) => {
  return (
    <div className={styles.solutions}>
      <SectionTitle
        title="PROJECTS SOLUTIONS"
        subtitle="Reliable Results, Trusted Care"
      />
      <div className={styles.cards}>
        {Data.map((solution: any) => (
          <Card
            key={solution.id}
            imageSrc={solution.imageSrc}
            heading={solution.heading}
            details={solution?.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
