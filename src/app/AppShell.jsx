import { Suspense, useCallback, useEffect, useState } from 'react';
import { appRegistry, appsById } from './appRegistry.jsx';
import { HomeLauncher } from './HomeLauncher.jsx';
import { Dock } from './Dock.jsx';
import { useI18n } from '../i18n/useI18n.js';

function StatusBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="nuo-status-bar" aria-label="NuoOS status bar">
      <div className="nuo-status-title">NuoOS</div>
      <time className="nuo-status-clock" dateTime={now.toISOString()}>
        {now.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false })}
      </time>
      <div className="nuo-status-indicators" aria-hidden="true">
        <span>◦</span>
        <span>▰</span>
      </div>
    </header>
  );
}

export function AppShell() {
  const { t } = useI18n();
  const [currentAppId, setCurrentAppId] = useState(null);
  const currentApp = currentAppId ? appsById[currentAppId] : null;

  const openApp = useCallback((app) => {
    setCurrentAppId(app.id);
  }, []);

  const goHome = useCallback(() => {
    setCurrentAppId(null);
  }, []);

  const CurrentComponent = currentApp?.component;

  return (
    <div id="nuo-os-root" className="nuo-os-root">
      <StatusBar />
      <button className="floating-quick-console" type="button" aria-label="floating quick console">
        ✦
      </button>

      <main className="nuo-main-surface">
        {currentApp ? (
          <section className="nuo-screen is-fullscreen" data-screen-id={currentApp.screenId}>
            <button className="nuo-floating-back" type="button" onClick={goHome} aria-label="返回主页面">
              ‹
            </button>
            <button className="nuo-floating-save-proxy" type="button" onClick={() => window.dispatchEvent(new CustomEvent('nuojiji:request-current-screen-save'))}>
              保存
            </button>
            <Suspense fallback={<div className="nuo-loading">加载中…</div>}>
              <CurrentComponent app={currentApp} />
            </Suspense>
          </section>
        ) : (
          <>
            <section id="home-screen-pages" className="home-screen-pages">
              <h1 className="home-section-title">{t('sectionHomePage', '主页面')}</h1>
              <HomeLauncher onOpenApp={openApp} />
            </section>
            <Dock onOpenApp={openApp} />
          </>
        )}
      </main>

    </div>
  );
}
