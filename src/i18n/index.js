import zhCn from './locales/zh_cn.js';
import { STORAGE_KEYS, readStorage, writeStorage } from '../storage/storageKeys.js';

export const DEFAULT_LANGUAGE = 'zh_cn';

const localeTables = {
  zh_cn: zhCn,
};

export function getCurrentLanguage() {
  return readStorage(STORAGE_KEYS.language, DEFAULT_LANGUAGE) || DEFAULT_LANGUAGE;
}

export function setCurrentLanguage(language) {
  writeStorage(STORAGE_KEYS.language, language || DEFAULT_LANGUAGE);
}

export function getLocaleTable(language = getCurrentLanguage()) {
  return localeTables[language] || localeTables[DEFAULT_LANGUAGE] || {};
}

export function translate(key, fallback) {
  const language = getCurrentLanguage();
  const current = localeTables[language] || {};
  const defaultTable = localeTables[DEFAULT_LANGUAGE] || {};
  return current[key] ?? defaultTable[key] ?? fallback ?? key;
}

export function formatTranslation(key, values = {}, fallback) {
  const template = translate(key, fallback);
  return String(template).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

export async function loadLanguage(language) {
  if (localeTables[language]) return localeTables[language];
  if (language === 'zh') {
    const mod = await import('./locales/zh.js');
    localeTables.zh = mod.default || {};
    return localeTables.zh;
  }
  if (language === 'en') {
    const mod = await import('./locales/en.js');
    localeTables.en = mod.default || {};
    return localeTables.en;
  }
  return localeTables[DEFAULT_LANGUAGE];
}
