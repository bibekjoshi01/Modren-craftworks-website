'use client';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import ArrowRightSVG from '../ui/ArrowRightSVG';
// import Logo from '../assets/images/logo.png';
import {
  LinkedInSVG,
  LocationSVG,
  MailSVG,
  MobileSVG,
  XSVG,
} from '../ui/ContactInfo';
import { FilledBtn } from '../ui/Button';
import { getFooterData } from './footerData';
import Logo from '../ui/Logo';

const Footer = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  const FooterData = getFooterData(t);

  return (
    <div className={styles.footer} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.logo}>
        <Logo />
        {/* <Image priority={true} src={Logo} width={900} height={500} alt="Logo" /> */}
      </div>

      <div className={styles.footerLinks}>
        <Links FooterData={FooterData} />
        <div className={styles.contact}>
          <h4>{t('title')}</h4>
          <div className={styles.contactDetails}>
            <p>
              <LocationSVG aria-hidden="true" />
              <span>{t('contact.location')}</span>
            </p>
            <p>
              <MailSVG aria-hidden="true" /> <span>{t('contact.email')}</span>
            </p>
            <p>
              <MobileSVG aria-hidden="true" />
              <span dir="ltr">{t('contact.phone')}</span>
            </p>
          </div>
          <FilledBtn text={t('filledBtn')} svg={<ArrowRightSVG />} />
          <div
            className={styles.socialMediaIcons}
            aria-label={t('contact.socialMedia')}
          >
            <span aria-hidden="true">
              <LinkedInSVG />
            </span>
            <span aria-hidden="true">
              <XSVG />
            </span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>{t('copyright')}</div>
    </div>
  );
};

export default Footer;

function Links({ FooterData }: any) {
  return (
    <>
      {FooterData.map((item: any) => (
        <div key={item.id} className={styles.linkGroup}>
          <h4>{item.title}</h4>
          <ul>
            {item.links.map((link: any, index: number) => (
              <li key={index}>{link.link}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
