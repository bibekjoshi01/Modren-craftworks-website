/* types for each set of Translation */
type UserTranslation = typeof import('./translations/en.json');

type FrUserTranslation = typeof import('./translations/fr.json');

/* Combine all message types into a single interface */
declare global {
  interface IntlTranslation extends UserTranslation, FrUserTranslation {}
}
