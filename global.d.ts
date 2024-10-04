/* types for each set of Translation */
type WebsiteTranslation = typeof import('./translations/en.json');

type FrWebsiteTranslation = typeof import('./translations/fr.json');

/* Combine all message types into a single interface */
declare global {
  interface IntlTranslation extends WebsiteTranslation, FrWebsiteTranslation {}
}
