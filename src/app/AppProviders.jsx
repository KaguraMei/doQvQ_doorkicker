import { I18nProvider } from '../i18n/I18nProvider.jsx';

export function AppProviders({ children }) {
  return <I18nProvider>{children}</I18nProvider>;
}
