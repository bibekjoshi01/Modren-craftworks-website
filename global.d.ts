/* types for each set of Translation */
type AdminTranslation = typeof import('./translations/admin/en.json');
type UserTranslation = typeof import('./translations/public/en.json');

type FrAdminTranslation = typeof import('./translations/admin/fr.json');
type FrUserTranslation = typeof import('./translations/public/fr.json');

/* Combine all message types into a single interface */
declare global {
  interface IntlTranslation
    extends AdminTranslation,
      UserTranslation,
      FrAdminTranslation,
      FrUserTranslation {}
}
