import { lazy } from 'react';
import { STORAGE_KEYS } from '../storage/storageKeys.js';

const CHUNK_FAILURE_PATTERNS = [
  /Failed to fetch dynamically imported module/i,
  /Loading chunk [\w-]+ failed/i,
  /import.*failed/i,
  /missing default export/i,
];

function isChunkFailure(error) {
  const message = error?.message || '';
  return CHUNK_FAILURE_PATTERNS.some((pattern) => pattern.test(message));
}

export function lazyWithRetry(importer) {
  return lazy(() =>
    importer()
      .then((module) => {
        if (!module || typeof module !== 'object' || module.default === undefined) {
          throw new Error('Loading chunk failed: dynamically imported module missing default export');
        }
        try {
          sessionStorage.removeItem(STORAGE_KEYS.chunkReload);
        } catch (_error) {}
        return module;
      })
      .catch((error) => {
        if (!isChunkFailure(error)) throw error;
        try {
          if (sessionStorage.getItem(STORAGE_KEYS.chunkReload)) {
            sessionStorage.removeItem(STORAGE_KEYS.chunkReload);
            throw error;
          }
          sessionStorage.setItem(STORAGE_KEYS.chunkReload, '1');
          window.location.reload();
          return new Promise(() => {});
        } catch (_storageError) {
          throw error;
        }
      }),
  );
}
