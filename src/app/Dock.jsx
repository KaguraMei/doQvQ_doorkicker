import { dockApps } from './appRegistry.jsx';
import { useI18n } from '../i18n/useI18n.js';

export function Dock({ onOpenApp }) {
  const { t } = useI18n();

  return (
    <nav id="desktop-dock" className="desktop-dock" aria-label="Dock">
      {dockApps.map((app) => (
        <button
          key={app.id}
          type="button"
          className="dock-item"
          data-app-id={app.id}
          data-screen-id={app.screenId}
          onClick={() => onOpenApp(app)}
        >
          <span className="dock-icon" aria-hidden="true">{app.icon}</span>
          <span className="dock-label">{t(app.labelKey, app.fallbackLabel)}</span>
        </button>
      ))}
    </nav>
  );
}
