import Image from 'next/image';
import styles from './Services.module.scss';
import Thumbnail from '../../../assets/consultationImages/image.png';

const services = [
  'Laboratories Sector',
  'Clean Room Sector',
  'Medical Factory',
  'Pharmaceutical Factory',
  'Tendering & BOQ',
  'Project Management',
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.imageContainer}>
        <Image src={Thumbnail} width={1000} height={800} alt="services" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Our Services</h1>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.serviceItem} ${
                index % 2 === 0 ? styles.reducedWidth : styles.fullWidth
              }`}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
