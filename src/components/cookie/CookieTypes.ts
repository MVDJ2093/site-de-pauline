export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertising: boolean;
  unclassified: boolean;
}

export const defaultPreferences: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  performance: false,
  advertising: false,
  unclassified: false,
};