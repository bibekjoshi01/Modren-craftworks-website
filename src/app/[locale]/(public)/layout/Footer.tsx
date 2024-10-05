import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';
import ArrowRightSVG from '../ui/ArrowRightSVG';
import Logo from '../assets/images/logo.png';
import ContactInfo, {
  LinkedInSVG,
  LocationSVG,
  MailSVG,
  MobileSVG,
  XSVG,
} from '../ui/ContactInfo';
import { FilledBtn } from '../ui/Button';

const FooterData = [
  {
    id: 1,
    title: 'PRODUCTS',
    links: [
      {
        link: 'Laboratories supplies',
        to: '',
      },
      {
        link: 'Refrigerators & freezers',
        to: '',
      },
      {
        link: 'Chemical Supplies',
        to: '',
      },
      {
        link: 'Safety Supplies',
        to: '',
      },
      {
        link: 'Laboratory Equipment',
        to: '',
      },
      {
        link: 'Monitoring Systems',
        to: '',
      },
      {
        link: 'Lab & Cleanroom Furniture',
        to: '',
      },
      {
        link: 'Life Science',
        to: '',
      },
    ],
  },
  {
    id: 2,
    title: 'PROJECTS',
    links: [
      {
        link: 'Laboratories',
        to: '',
      },
      {
        link: 'Clean Room',
        to: '',
      },
      {
        link: 'Refrigerator & Freezer Room',
        to: '',
      },
    ],
  },
  {
    id: 3,
    title: 'MAINTENANCE',
    links: [
      {
        link: 'Maintenance',
        to: '',
      },
      {
        link: 'Calibration',
        to: '',
      },
      {
        link: 'Testing',
        to: '',
      },
    ],
  },
  {
    id: 4,
    title: 'CONSULTATION',
    links: [
      {
        link: 'Consultancy & Advisory Services',
        to: '',
      },
      {
        link: 'Calibration',
        to: '',
      },
      {
        link: 'Testing',
        to: '',
      },
    ],
  },
  {
    id: 5,
    title: 'ABOUT',
    links: [
      {
        link: 'About Us',
        to: '',
      },
      {
        link: 'Our Story',
        to: '',
      },
      {
        link: 'Our Vision',
        to: '',
      },
      {
        link: 'Our Objectives',
        to: '',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image priority={true} src={Logo} width={900} height={500} alt="Logo" />
      </div>

      <div className={styles.footerLinks}>
        <Links FooterData={FooterData} />
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <div className={styles.contactDetails}>
            <p>
              <LocationSVG aria-hidden="true" />{' '}
              <span>Riyadh, Saudi Arabia</span>
            </p>
            <p>
              <MailSVG aria-hidden="true" /> <span>info@emkaan.sa</span>
            </p>
            <p>
              <MobileSVG aria-hidden="true" /> <span>+966 500487676</span>
            </p>
          </div>
          <FilledBtn text="LETS TALK" svg={<ArrowRightSVG />} />
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
      </div>

      <div className={styles.copyright}>Copyright © EMKAAN 2024</div>
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
