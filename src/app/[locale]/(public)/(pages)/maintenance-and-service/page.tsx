import Banner from './Banner';
import MaintenanceHero from './MaintenanceHero';
import Slider from './MaintenanceHero/Slider';
import ServicesSection from './Services';
import styles from './Maintenence.module.scss';

const Maintenance = () => {
  return (
    <section className={styles.maintenancePage}>
      <MaintenanceHero />;
      <Banner />
      <ServicesSection />
    </section>
  );
};

export default Maintenance;
