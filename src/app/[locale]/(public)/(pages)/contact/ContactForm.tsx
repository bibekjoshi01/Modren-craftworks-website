'use client';
import { usePathname } from 'next/navigation';
import ArrowRightSVG from '../../ui/ArrowRightSVG';
import {
  LinkedInSVG,
  LocationSVG,
  MailSVG,
  MobileSVG,
  XSVG,
} from '../../ui/ContactInfo';
import styles from './ContactUs.module.scss';
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('contact');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <section
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`${styles.contactUs} ${
        language === 'ar' ? styles.rtl : styles.ltr
      }`}
    >
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <h1>{t('title')}</h1>
          <p>{t('description')}</p>

          <div className={styles.contactDetails}>
            <p>
              <LocationSVG aria-hidden="true" />
              <span>{t('location')}</span>
            </p>
            <p>
              <MailSVG aria-hidden="true" /> <span>{t('email')}</span>
            </p>
            <p>
              <MobileSVG aria-hidden="true" /> <span>{t('phone')}</span>
            </p>
          </div>
          <div
            className={styles.socialMediaIcons}
            aria-label={t('socialMedia')}
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
              <h2>{t('form.title')}</h2>
              <input
                type="text"
                name="full_name"
                placeholder={t('form.full_name')}
              />
              <input type="email" name="email" placeholder={t('form.email')} />
              <textarea
                name="message"
                placeholder={t('form.message')}
              ></textarea>
              <button id="submit" type="submit">
                <span>{t('form.submit')}</span>
                <span
                  className={`${styles.svg} ${
                    language === 'ar' ? styles.rtl : styles.ltr
                  }`}
                >
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

export default ContactForm;
