import { homeApps } from './appRegistry.jsx';
import { useI18n } from '../i18n/useI18n.js';

export function HomeLauncher({ onOpenApp }) {
  const { t } = useI18n();

  return (
    <div className="home-launcher-grid" role="list" aria-label="主页面应用">
      {homeApps.map((app) => (
        <button
          key={app.id}
          type="button"
          className="home-launcher-tile"
          data-app-id={app.id}
          data-screen-id={app.screenId}
          onClick={() => onOpenApp(app)}
          role="listitem"
        >
          <span className="home-launcher-icon" aria-hidden="true">{app.icon}</span>
          <span className="home-launcher-label">{t(app.labelKey, app.fallbackLabel)}</span>
        </button>
      ))}
    </div>
  );
}
