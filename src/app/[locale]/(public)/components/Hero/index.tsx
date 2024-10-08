'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Hero.module.scss';
import image1 from '../../assets/heroSectionImages/image1.png';
import image2 from '../../assets/heroSectionImages/image2.png';
import image3 from '../../assets/heroSectionImages/image3.png';
import image4 from '../../assets/heroSectionImages/image4.png';
import useTyped from '../../hooks/useTyped';
import ArrowRightSVG from '../../ui/ArrowRightSVG';

const Hero = () => {
  const t = useTranslations('home.hero');

  // Split the string into an array
  const animatedText = t('animatedText').split(',');
  const features = t('features').split(',');
  const detailText = t('detailText').split('/');

  useTyped('#auto-type', {
    strings: animatedText,
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

  const router = useRouter();
  const pathname = usePathname();

  // Extract the language (first path segment)
  const language = pathname?.split('/')[1] || 'en';

  const handleClick = (e: MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.hero} dir={language == 'ar' ? 'rtl' : 'ltr'}>
      <div className={styles.left}>
        <h1 className={styles.heading}>{t('heading')}</h1>
        <h2>
          <span id="auto-type" className={styles.animatedText}></span>
        </h2>
        <p className={styles.detailText}>
          {detailText[0]}
          <br />
          {detailText[1]}
        </p>
        <div className={styles.buttons}>
          <button className={styles.filledBtn}>
            <span>{t('filledBtn')}</span>
          </button>
          <button className={styles.outlinedBtn}>
            <span>{t('outlinedBtn')}</span>
            <ArrowRightSVG />
          </button>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <SearchIcon />
            <span>{features[0]}</span>
          </div>
          <div className={styles.feature}>
            <CollaborateIcon />
            <span>{features[1]}</span>
          </div>
          <div className={styles.feature}>
            <UnveilIcon />
            <span>{features[2]}</span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.two}>
          <Image
            src={image1}
            width={500}
            height={200}
            alt="Clean Room Design Image 2"
          />
          <Image
            src={image2}
            width={500}
            height={200}
            alt="Clean Room Design Image 3"
          />
        </div>
        <div className={styles.one}>
          <Image
            src={image3}
            width={500}
            height={200}
            alt="Clean Room Design Image 1"
          />
        </div>

        <div className={styles.one}>
          <Image
            src={image4}
            width={500}
            height={300}
            alt="Clean Room Design Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SearchIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.4214 15.7107C31.4214 7.04073 24.3807 0 15.7107 0C7.04073 0 0 7.04073 0 15.7107C0 24.3807 7.04073 31.4214 15.7107 31.4214C19.6384 31.4214 23.217 29.9667 25.9518 27.6101L33.3416 35L35 33.3416L27.6101 25.9518C29.9667 23.217 31.4214 19.6384 31.4214 15.7107ZM15.7107 29.0939C8.32086 29.0939 2.32751 23.1006 2.32751 15.7107C2.32751 8.32086 8.32086 2.32751 15.7107 2.32751C23.1006 2.32751 29.0939 8.32086 29.0939 15.7107C29.0939 23.1006 23.1006 29.0939 15.7107 29.0939Z"
        fill="#045161"
      />
      <path
        d="M7.1543 8.70031L8.95812 10.1841C10.6165 8.14752 13.0895 6.98376 15.7079 6.98376V4.65625C12.3912 4.65625 9.27815 6.14004 7.1543 8.70031Z"
        fill="#045161"
      />
      <path
        d="M4.65234 15.7129H6.97986C6.97986 15.1019 7.03805 14.52 7.15442 13.9382L4.8851 13.4727C4.73963 14.2 4.65234 14.9564 4.65234 15.7129Z"
        fill="#045161"
      />
    </svg>
  );
};
const CollaborateIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="35"
      viewBox="0 -960 960 960"
      width="35"
      fill="#e8eaed"
    >
      <path d="M475-160q4 0 8-2t6-4l328-328q12-12 17.5-27t5.5-30q0-16-5.5-30.5T817-607L647-777q-11-12-25.5-17.5T591-800q-15 0-30 5.5T534-777l-11 11 74 75q15 14 22 32t7 38q0 42-28.5 70.5T527-522q-20 0-38.5-7T456-550l-75-74-175 175q-3 3-4.5 6.5T200-435q0 8 6 14.5t14 6.5q4 0 8-2t6-4l136-136 56 56-135 136q-3 3-4.5 6.5T285-350q0 8 6 14t14 6q4 0 8-2t6-4l136-135 56 56-135 136q-3 2-4.5 6t-1.5 8q0 8 6 14t14 6q4 0 7.5-1.5t6.5-4.5l136-135 56 56-136 136q-3 3-4.5 6.5T454-180q0 8 6.5 14t14.5 6Zm-1 80q-37 0-65.5-24.5T375-166q-34-5-57-28t-28-57q-34-5-56.5-28.5T206-336q-38-5-62-33t-24-66q0-20 7.5-38.5T149-506l232-231 131 131q2 3 6 4.5t8 1.5q9 0 15-5.5t6-14.5q0-4-1.5-8t-4.5-6L398-777q-11-12-25.5-17.5T342-800q-15 0-30 5.5T285-777L144-635q-9 9-15 21t-8 24q-2 12 0 24.5t8 23.5l-58 58q-17-23-25-50.5T40-590q2-28 14-54.5T87-692l141-141q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l11 11 11-11q24-23 53.5-35t60.5-12q31 0 60.5 12t52.5 35l169 169q23 23 35 53t12 61q0 31-12 60.5T873-437L545-110q-14 14-32.5 22T474-80Zm-99-560Z" />
    </svg>
  );
};

const UnveilIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.4076 2.90301C23.6053 1.37779 21.4007 0.405893 19.059 0.10428C16.7174 -0.197333 14.3384 0.184189 12.2085 1.20293C10.0785 2.22168 8.28839 3.83423 7.05345 5.84653C5.81851 7.85884 5.19141 10.1852 5.24761 12.5455C5.55995 16.7168 7.43484 20.6166 10.4976 23.4655C11.3901 24.4805 12.2476 25.5305 12.2476 26.073V30.238C12.2476 30.8631 12.3707 31.4821 12.6099 32.0596C12.8492 32.6371 13.1998 33.1618 13.6418 33.6038C14.0838 34.0458 14.6085 34.3965 15.186 34.6357C15.7635 34.8749 16.3825 34.998 17.0076 34.998H17.9876C19.25 34.998 20.4608 34.4965 21.3534 33.6038C22.2461 32.7112 22.7476 31.5004 22.7476 30.238V26.073C22.7476 25.5305 23.6751 24.4805 24.4976 23.4655C27.6376 20.5497 29.5203 16.527 29.7476 12.248C29.7463 10.4686 29.3574 8.71086 28.6079 7.09702C27.8584 5.48317 26.7663 4.05199 25.4076 2.90301ZM17.9876 33.248H17.0076C16.2093 33.248 15.4437 32.9309 14.8792 32.3664C14.3147 31.8019 13.9976 31.0363 13.9976 30.238V27.998H20.9976V30.238C20.9976 31.0363 20.6805 31.8019 20.116 32.3664C19.5515 32.9309 18.7859 33.248 17.9876 33.248ZM23.2376 22.3105C21.9601 23.728 20.9626 24.8655 20.9626 26.073V26.248H13.9976V26.073C13.9976 24.8655 13.0001 23.728 11.7226 22.3105C8.98482 19.7443 7.30043 16.2507 6.99761 12.5105C6.93717 9.98611 7.78847 7.52447 9.39551 5.57674C11.0026 3.629 13.2577 2.32564 15.7476 1.90551C17.2523 1.65116 18.7944 1.72787 20.2665 2.1303C21.7386 2.53274 23.1052 3.25121 24.2713 4.2357C25.4373 5.22019 26.3748 6.44703 27.0183 7.83078C27.6619 9.21453 27.9961 10.7219 27.9976 12.248C27.9976 16.973 25.2676 20.053 23.2726 22.3105H23.2376Z"
        fill="#045161"
      />
      <path
        d="M34.125 10.5H32.375C32.1429 10.5 31.9204 10.5922 31.7563 10.7563C31.5922 10.9204 31.5 11.1429 31.5 11.375C31.5 11.6071 31.5922 11.8296 31.7563 11.9937C31.9204 12.1578 32.1429 12.25 32.375 12.25H34.125C34.3571 12.25 34.5796 12.1578 34.7437 11.9937C34.9078 11.8296 35 11.6071 35 11.375C35 11.1429 34.9078 10.9204 34.7437 10.7563C34.5796 10.5922 34.3571 10.5 34.125 10.5Z"
        fill="#045161"
      />
      <path
        d="M3.5 11.375C3.5 11.1429 3.40781 10.9204 3.24372 10.7563C3.07962 10.5922 2.85706 10.5 2.625 10.5H0.875C0.642936 10.5 0.420376 10.5922 0.256282 10.7563C0.0921874 10.9204 0 11.1429 0 11.375C0 11.6071 0.0921874 11.8296 0.256282 11.9937C0.420376 12.1578 0.642936 12.25 0.875 12.25H2.625C2.85706 12.25 3.07962 12.1578 3.24372 11.9937C3.40781 11.8296 3.5 11.6071 3.5 11.375Z"
        fill="#045161"
      />
      <path
        d="M3.23847 0.261519C3.07603 0.0990736 2.8557 0.0078125 2.62597 0.0078125C2.39624 0.0078125 2.17592 0.0990736 2.01347 0.261519C1.85103 0.423964 1.75977 0.644286 1.75977 0.874018C1.75977 1.10375 1.85103 1.32407 2.01347 1.48652L3.76347 3.23652C3.84203 3.32022 3.93691 3.38694 4.04226 3.43254C4.1476 3.47815 4.26118 3.50168 4.37597 3.50168C4.49077 3.50168 4.60434 3.47815 4.70969 3.43254C4.81503 3.38694 4.90991 3.32022 4.98847 3.23652C5.07218 3.15796 5.13889 3.06308 5.18449 2.95773C5.2301 2.85239 5.25363 2.73881 5.25363 2.62402C5.25363 2.50922 5.2301 2.39565 5.18449 2.2903C5.13889 2.18496 5.07218 2.09008 4.98847 2.01152L3.23847 0.261519Z"
        fill="#045161"
      />
      <path
        d="M30.6277 3.49902C30.7424 3.50042 30.8562 3.47778 30.9617 3.43258C31.0672 3.38737 31.162 3.32058 31.2402 3.23652L32.9902 1.48652C33.1526 1.32407 33.2439 1.10375 33.2439 0.874018C33.2439 0.644286 33.1526 0.423964 32.9902 0.261519C32.8277 0.0990736 32.6074 0.0078125 32.3777 0.0078125C32.1479 0.0078125 31.9276 0.0990736 31.7652 0.261519L30.0152 2.01152C29.9315 2.09008 29.8647 2.18496 29.8191 2.2903C29.7735 2.39565 29.75 2.50922 29.75 2.62402C29.75 2.73881 29.7735 2.85239 29.8191 2.95773C29.8647 3.06308 29.9315 3.15796 30.0152 3.23652C30.0933 3.32058 30.1881 3.38737 30.2936 3.43258C30.3991 3.47778 30.5129 3.50042 30.6277 3.49902Z"
        fill="#045161"
      />
      <path
        d="M31.2365 19.5115C31.0741 19.3491 30.8537 19.2578 30.624 19.2578C30.3943 19.2578 30.174 19.3491 30.0115 19.5115C29.8491 19.674 29.7578 19.8943 29.7578 20.124C29.7578 20.3538 29.8491 20.5741 30.0115 20.7365L31.7615 22.4865C31.8401 22.5702 31.935 22.6369 32.0403 22.6825C32.1456 22.7281 32.2592 22.7517 32.374 22.7517C32.4888 22.7517 32.6024 22.7281 32.7077 22.6825C32.8131 22.6369 32.908 22.5702 32.9865 22.4865C33.0702 22.408 33.1369 22.3131 33.1825 22.2077C33.2281 22.1024 33.2517 21.9888 33.2517 21.874C33.2517 21.7592 33.2281 21.6456 33.1825 21.5403C33.1369 21.435 33.0702 21.3401 32.9865 21.2615L31.2365 19.5115Z"
        fill="#045161"
      />
      <path
        d="M3.76516 19.5115L2.01516 21.2615C1.93145 21.3401 1.86474 21.435 1.81913 21.5403C1.77353 21.6456 1.75 21.7592 1.75 21.874C1.75 21.9888 1.77353 22.1024 1.81913 22.2077C1.86474 22.3131 1.93145 22.408 2.01516 22.4865C2.09372 22.5702 2.1886 22.6369 2.29394 22.6825C2.39929 22.7281 2.51286 22.7517 2.62766 22.7517C2.74245 22.7517 2.85603 22.7281 2.96137 22.6825C3.06672 22.6369 3.1616 22.5702 3.24016 22.4865L4.99016 20.7365C5.1526 20.5741 5.24386 20.3538 5.24386 20.124C5.24386 19.8943 5.1526 19.674 4.99016 19.5115C4.82771 19.3491 4.60739 19.2578 4.37766 19.2578C4.14793 19.2578 3.9276 19.3491 3.76516 19.5115Z"
        fill="#045161"
      />
      <path
        d="M19.5178 9.01152L14.2678 14.2615C14.1403 14.3787 14.0531 14.5332 14.0185 14.7028C13.9839 14.8725 14.0038 15.0488 14.0753 15.2065C14.1409 15.3663 14.2524 15.5031 14.3957 15.5996C14.5389 15.6962 14.7075 15.7482 14.8803 15.749H18.0128L16.0178 17.7615C15.9341 17.8401 15.8674 17.935 15.8218 18.0403C15.7762 18.1456 15.7526 18.2592 15.7526 18.374C15.7526 18.4888 15.7762 18.6024 15.8218 18.7077C15.8674 18.8131 15.9341 18.908 16.0178 18.9865C16.0963 19.0702 16.1912 19.1369 16.2966 19.1825C16.4019 19.2281 16.5155 19.2517 16.6303 19.2517C16.7451 19.2517 16.8587 19.2281 16.964 19.1825C17.0694 19.1369 17.1642 19.0702 17.2428 18.9865L20.7428 15.4865C20.8703 15.3693 20.9575 15.2149 20.9921 15.0452C21.0266 14.8755 21.0068 14.6992 20.9353 14.5415C20.8696 14.3817 20.7582 14.2449 20.6149 14.1484C20.4717 14.0519 20.303 13.9999 20.1303 13.999H16.9978L20.7428 10.2365C20.9052 10.0741 20.9965 9.85375 20.9965 9.62402C20.9965 9.39429 20.9052 9.17396 20.7428 9.01152C20.5803 8.84907 20.36 8.75781 20.1303 8.75781C19.9006 8.75781 19.6802 8.84907 19.5178 9.01152Z"
        fill="#045161"
      />
    </svg>
  );
};
