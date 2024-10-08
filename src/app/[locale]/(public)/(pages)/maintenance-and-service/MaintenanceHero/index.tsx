'use client';
import styles from './MaintenanceHero.module.scss';
import Slider from './Slider';

const MaintenanceHero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>Maintenance and Service</h1>
      </div>
      <Slider />
    </section>
  );
};

export default MaintenanceHero;
