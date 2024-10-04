import styles from './Contact.module.scss';
import { FilledBtn } from '../../ui/Button';
import ContactInfo from '../../ui/ContactInfo';

const ContactSection = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>Contact</h4>
          <h1>Your Solution Starts Here!</h1>
        </div>

        <div className={styles.contactForm}>
          <form>
            <h2>Let&rsquo;s Talk!</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <textarea rows={6} placeholder="Type your message.."></textarea>
            <FilledBtn text="SEND" svg={<ArrowRightSVG />} />
          </form>
          <div className={styles.contactInfo}>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

function ArrowRightSVG() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
      </svg>
    </>
  );
}
