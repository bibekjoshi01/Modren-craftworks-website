import Banner from './Banner';
import ConsultationHero from './ConsultationHero';
import ServicesSection from './Services';
import styles from './Consultation.module.scss';
import Certifications from './Certifications';

const Consultation = () => {
  return (
    <section className={styles.maintenancePage}>
      <ConsultationHero />;
      <Banner />
      <Certifications />
      <ServicesSection />
    </section>
  );
};

export default Consultation;
