import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/reconstructed-shell.css';

window.__nuojijiMainScriptStarted = true;

if (!window.__nuoOauthBounce) {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    window.__nuojijiAppReady = true;
    window.requestAnimationFrame(() => {
      window.__nuojijiForceRemoveLoadingOverlay?.('app-ready');
      window.__nuojijiClearRecoverAttempts?.();
    });
  }
}
