import Head from 'next/head';
import ContactForm from './ContactForm';

const Contact = ({ params }: { params: { locale: string } }) => {
  const language = params.locale === 'ar' ? 'ar' : 'en';

  return (
    <>
      <Head>
        {/* SEO meta tags */}
        <title>{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</title>
        <meta
          name="description"
          content={
            language === 'ar'
              ? 'تواصل معنا لأي استفسارات أو استشارات.'
              : 'Get in touch with us for any inquiries or consultations.'
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={language === 'ar' ? '/ar/contact' : '/en/contact'}
        />

        {/* Language alternate links for SEO */}
        <link rel="alternate" href="/en/contact" hrefLang="en" />
        <link rel="alternate" href="/ar/contact" hrefLang="ar" />

        {/* Open Graph meta tags for social media */}
        <meta
          property="og:title"
          content={language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
        />
        <meta
          property="og:description"
          content={
            language === 'ar'
              ? 'تواصل معنا لأي استفسارات أو استشارات.'
              : 'Get in touch with us for any inquiries or consultations.'
          }
        />
        <meta
          property="og:url"
          content={language === 'ar' ? '/ar/contact' : '/en/contact'}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/contact-og-image.jpg"
        />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
        />
        <meta
          name="twitter:description"
          content={
            language === 'ar'
              ? 'تواصل معنا لأي استفسارات أو استشارات.'
              : 'Get in touch with us for any inquiries or consultations.'
          }
        />
        <meta
          name="twitter:image"
          content="/assets/images/contact-twitter-image.jpg"
        />
      </Head>

      {/* Main content */}
      <ContactForm />
    </>
  );
};

export default Contact;

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}
