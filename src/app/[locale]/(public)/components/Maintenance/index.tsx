import styles from './Maintenance.module.scss';

import SectionTitle from '../../ui/SectionTitle';
import MaintenanceCard from './Card';

const Maintenance = ({ Data }: any) => {
  return (
    <div className={styles.solutions}>
      <SectionTitle
        title="MAINTENANCE AND SERVICE SOLUTIONS"
        subtitle="Leading the Way in Medical Solutions"
      />
      <div className={styles.cards}>
        {Data.map((solution: any) => (
          <MaintenanceCard
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

export default Maintenance;
