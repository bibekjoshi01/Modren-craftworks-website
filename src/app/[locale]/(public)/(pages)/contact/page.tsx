import ArrowRightSVG from '../../ui/ArrowRightSVG';
import {
  LinkedInSVG,
  LocationSVG,
  MailSVG,
  MobileSVG,
  XSVG,
} from '../../ui/ContactInfo';
import styles from './ContactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <h1>Contact</h1>
          <p>
            We Believe In Conversations. Whether You Have A Business
            Proposition, A Query, Or Simply Wish To Learn More About What We Do,
            Our Doors (And Inboxes) Are Always Open. With A Team Of Dedicated
            Professionals Ready To Assist, Your Inquiries Are Always In Expert
            Hands.
          </p>

          <div className={styles.contactDetails}>
            <p>
              <LocationSVG aria-hidden="true" />
              <span>Riyadh, Saudi Arabia</span>
            </p>
            <p>
              <MailSVG aria-hidden="true" /> <span>info@emkaan.sa</span>
            </p>
            <p>
              <MobileSVG aria-hidden="true" /> <span>+966 500487676</span>
            </p>
          </div>
          <div
            className={styles.socialMediaIcons}
            aria-label="Social Media Links"
          >
            <span aria-hidden="true">
              <LinkedInSVG />
            </span>
            <span aria-hidden="true">
              <XSVG />
            </span>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.inputs}>
              <h2>Let&rsquo;s Talk!</h2>
              <input type="text" name="full_name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea
                name="message"
                placeholder="Type your message.."
              ></textarea>
              <button id="submit" type="submit">
                <span>send</span>
                <span className="material-symbols-outlined">
                  <ArrowRightSVG />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
