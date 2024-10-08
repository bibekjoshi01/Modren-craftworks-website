import Banner from './Banner';
import ConsultationHero from './ConsultationHero';
import ServicesSection from './Services';
import styles from './Maintenence.module.scss';

const Consultation = () => {
  return (
    <section className={styles.maintenancePage}>
      <ConsultationHero />;
      <Banner />
      <ServicesSection />
    </section>
  );
};

export default Consultation;
