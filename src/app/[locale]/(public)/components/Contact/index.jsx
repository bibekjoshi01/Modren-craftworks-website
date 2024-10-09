'use client';
import styles from './Contact.module.scss';
import { FilledBtn } from '../../ui/Button';
import ContactInfo from '../../ui/ContactInfo';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ArrowRightSVG from '../../ui/ArrowRightSVG';
import { useState } from 'react';

const ContactSection = () => {
  const [active, setActive] = useState(false);
  const t = useTranslations('home.contact');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  return (
    <div className={styles.contact} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>{t('title')}</h4>
          <h1>{t('description')}</h1>
        </div>

        <div className={styles.contactForm}>
          <form>
            <h2>{t('form.title')}</h2>
            <input type="text" placeholder={t('form.fullName')} />
            <input type="email" placeholder={t('form.email')} />
            <input type="tel" placeholder={t('form.phoneNumber')} />
            <textarea rows={6} placeholder={t('form.message')}></textarea>
            <FilledBtn
              text={t('form.submit')}
              svg={<ArrowRightSVG />}
              active={active}
            />
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
