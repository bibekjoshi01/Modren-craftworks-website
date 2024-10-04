import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

/* Can be imported from a shared config */
const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  /* Validate that the incoming `locale` parameter is valid */
  if (!locales.includes(locale as any)) notFound();

  /*  Import both admin and user messages based on the locale */
  const [websiteTranslations] = await Promise.all([
    import(`../translations/${locale}.json`),
  ]);

  /* Combine the messages into a single object */
  return {
    messages: {
      ...websiteTranslations.default,
    },
  };
});
