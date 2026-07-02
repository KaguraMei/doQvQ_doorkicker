import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_LANGUAGE,
  formatTranslation,
  getCurrentLanguage,
  loadLanguage,
  setCurrentLanguage,
  translate,
} from './index.js';

export const I18nContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: translate,
  format: formatTranslation,
});

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(getCurrentLanguage);

  useEffect(() => {
    loadLanguage(language).catch(() => {});
  }, [language]);

  const setLanguage = useCallback((nextLanguage) => {
    const resolved = nextLanguage || DEFAULT_LANGUAGE;
    setCurrentLanguage(resolved);
    setLanguageState(resolved);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key, fallback) => translate(key, fallback),
      format: (key, values, fallback) => formatTranslation(key, values, fallback),
    }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
