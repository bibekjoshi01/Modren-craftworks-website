import styles from './Services.module.scss';

const services = [
  'Laboratory Instrument Under ISO17025 Requirement',
  'ISO14644 CLASSIFIED CLEANROOMS',
  'Fume Hood Cabinet',
  'Biosafety Cabinets According To NSF/ANSI 49 And EN 12469',
  'Laminal Flow Hoods',
  'Biosafety Level 2, 3 & 4',
  'Thermal Mapping',
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.iconBox}>
          <svg
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M88 8C83.588 8 80 11.588 80 16V42.008C78.084 42.092 76.294 42.878 74.93 44.242L60 59.172V96H86V72.828L96 62.828V16C96 11.588 92.412 8 88 8ZM92 61.172L82 71.172V92H64V60.828L77.758 47.07C78.438 46.39 79.38 46 80.344 46C82.36 46 84 47.64 84 49.656C84 50.618 83.61 51.562 82.93 52.242L74.586 60.586L77.414 63.414L85.758 55.07C87.204 53.624 88 51.702 88 49.656C88 46.758 86.38 44.23 84 42.932V16C84 13.794 85.794 12 88 12C90.206 12 92 13.794 92 16V61.172Z"
              fill="#045161"
            />
            <path
              d="M16 42.008V16C16 11.588 12.412 8 8 8C3.588 8 0 11.588 0 16V62.828L10 72.828V96H36V59.172L21.07 44.242C19.706 42.876 17.916 42.092 16 42.008ZM32 92H14V71.172L4 61.172V16C4 13.794 5.794 12 8 12C10.206 12 12 13.794 12 16V42.932C9.62 44.23 8 46.758 8 49.656C8 51.7 8.796 53.624 10.242 55.07L18.586 63.414L21.414 60.586L13.07 52.242C12.39 51.562 12 50.62 12 49.656C12 47.64 13.64 46 15.656 46C16.618 46 17.562 46.39 18.242 47.07L32 60.828V92Z"
              fill="#045161"
            />
            <path
              d="M38 6C38 2.692 35.308 0 32 0C28.692 0 26 2.692 26 6C26 8.604 27.678 10.804 30 11.632V16.828L38 24.828V30H42V23.172L34 15.172V11.632C36.322 10.804 38 8.604 38 6ZM32 4C33.104 4 34 4.896 34 6C34 7.104 33.104 8 32 8C30.896 8 30 7.104 30 6C30 4.896 30.896 4 32 4Z"
              fill="#045161"
            />
            <path
              d="M50 30V11.632C52.322 10.804 54 8.604 54 6C54 2.692 51.308 0 48 0C44.692 0 42 2.692 42 6C42 8.604 43.678 10.804 46 11.632V30H50ZM48 4C49.104 4 50 4.896 50 6C50 7.104 49.104 8 48 8C46.896 8 46 7.104 46 6C46 4.896 46.896 4 48 4Z"
              fill="#045161"
            />
            <path
              d="M66 11.632C68.322 10.804 70 8.604 70 6C70 2.692 67.308 0 64 0C60.692 0 58 2.692 58 6C58 8.604 59.678 10.804 62 11.632V15.172L54 23.172V30H58V24.828L66 16.828V11.632ZM64 4C65.104 4 66 4.896 66 6C66 7.104 65.104 8 64 8C62.896 8 62 7.104 62 6C62 4.896 62.896 4 64 4Z"
              fill="#045161"
            />
            <path d="M66 26H62V34H34V26H30V38H66V26Z" fill="#045161" />
          </svg>

          <h2>Our Services</h2>
        </div>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
