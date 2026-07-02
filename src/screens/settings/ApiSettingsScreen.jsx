import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../../i18n/useI18n.js';
import { getSetting, setSetting } from '../../storage/settingsStore.js';
import './ApiSettingsScreen.css';

const API_TYPE_OPTIONS = [
  { id: 'openai', label: 'OpenAI (GPT-3.5/4/4o)' },
  { id: 'gemini', label: 'Google Gemini' },
  { id: 'claude', label: 'Anthropic Claude' },
  { id: 'custom', key: 'labelApiTypeCustom' },
];

const REASONING_OPTIONS = ['none', 'low', 'medium', 'high'];
const MAX_RETRY_OPTIONS = ['0', '1', '2', '3'];

const DEFAULT_API_SETTINGS = {
  apiType: 'openai',
  mainApiUrl: '',
  mainApiKey: '',
  mainApiModel: 'gpt-3.5-turbo',
  temperature: 0.7,
  reasoningEffort: 'none',
  secApiEnabled: false,
  secApiFollowPreset: false,
  secApiUrl: '',
  secApiKey: '',
  secApiModel: 'gpt-4',
  secTemperature: 0.7,
  visionApiEnabled: false,
  visionApiUrl: '',
  visionApiKey: '',
  visionApiModel: '',
  autoRetryEnabled: true,
  maxRetries: 1,
  secondaryFallbackEnabled: true,
  voiceGenEnabled: false,
  minimaxEnabled: false,
  minimaxGroupId: '',
  minimaxApiKey: '',
  minimaxModel: 'speech-02-hd',
  minimaxRegion: 'overseas',
  minimaxApiUrl: '',
  elevenlabsEnabled: false,
  elevenlabsApiKey: '',
  elevenlabsModel: 'eleven_multilingual_v2',
  elevenlabsApiUrl: '',
  sovitsEnabled: false,
  sovitsServerUrl: '',
  sovitsApiVersion: 'v2',
  imageGenUseWorldBook: true,
  novelAiEnabled: false,
  novelAiKey: '',
  pollinationsEnabled: false,
  pollinationsKey: '',
  googleImagenEnabled: false,
  googleImagenKey: '',
  geminiImageEnabled: false,
  geminiImageKey: '',
  grokEnabled: false,
  grokKey: '',
  gptImageEnabled: false,
  gptImageKey: '',
  backgroundModeEnabled: false,
  memoryMonitorEnabled: false,
  layoutDiagEnabled: false,
  floatingConsoleEnabled: true,
  floatingConsoleLayout: 'orbit',
  roleActivityEnabled: false,
  browserNotifications: false,
  notificationPrivacy: false,
  cloudPushEnabled: false,
  relayEnabled: false,
  relayUrl: '',
  relaySecret: '',
  githubToken: '',
  githubOwner: '',
  githubRepo: '',
  githubPath: 'nuojiji_backup.json',
  githubAutoBackup: false,
  githubAutoBackupMode: 'streaming',
  githubAutoBackupInterval: 24,
  githubAutoBackupUnit: 'hours',
};

function Section({ title, children }) {
  return (
    <section className="ios-settings-section">
      <h2 className="ios-section-title">{title}</h2>
      <div className="ios-section-card">{children}</div>
    </section>
  );
}

function Field({ icon, iconBg = 'bg-blue', label, children, hint }) {
  return (
    <label className="ios-field-row">
      <span className={`ios-field-icon ${iconBg}`} aria-hidden="true">{icon}</span>
      <span className="ios-field-main">
        <span className="ios-field-label">{label}</span>
        {hint ? <span className="ios-field-hint">{hint}</span> : null}
      </span>
      <span className="ios-field-control">{children}</span>
    </label>
  );
}

function TextInput({ value, onChange, type = 'text', placeholder }) {
  return (
    <input
      className="ios-input"
      type={type}
      value={value ?? ''}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function SelectInput({ value, onChange, options }) {
  return (
    <select className="ios-select" value={value ?? ''} onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>{option.label}</option>
      ))}
    </select>
  );
}

function SwitchInput({ checked, onChange }) {
  return (
    <button
      className={`ios-switch ${checked ? 'is-on' : ''}`}
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <span />
    </button>
  );
}

function RangeInput({ value, min = 0, max = 2, step = 0.1, onChange }) {
  return (
    <span className="ios-range-wrap">
      <input
        className="ios-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="ios-range-value">{Number(value).toFixed(1)}</span>
    </span>
  );
}

function ActionRow({ icon, label, onClick, danger = false }) {
  return (
    <button className={`ios-action-row ${danger ? 'is-danger' : ''}`} type="button" onClick={onClick}>
      <span className="ios-field-icon bg-gray" aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default function ApiSettingsScreen() {
  const { t } = useI18n();
  const [settings, setSettings] = useState(DEFAULT_API_SETTINGS);
  const [presets, setPresets] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState('');
  const [presetName, setPresetName] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      getSetting('apiSettings', DEFAULT_API_SETTINGS),
      getSetting('apiPresets', []),
      getSetting('githubBackupSettings', null),
    ]).then(([storedSettings, storedPresets, githubSettings]) => {
      if (cancelled) return;
      const gh = githubSettings || {};
      setSettings({
        ...DEFAULT_API_SETTINGS,
        ...(storedSettings || {}),
        githubToken: gh.token || '',
        githubOwner: gh.username || '',
        githubRepo: gh.repo || '',
        githubPath: gh.filename || DEFAULT_API_SETTINGS.githubPath,
        githubAutoBackup: gh.autoBackup ?? false,
        githubAutoBackupMode: gh.autoBackupMode || DEFAULT_API_SETTINGS.githubAutoBackupMode,
        githubAutoBackupInterval: gh.autoBackupInterval ?? DEFAULT_API_SETTINGS.githubAutoBackupInterval,
        githubAutoBackupUnit: gh.autoBackupUnit || DEFAULT_API_SETTINGS.githubAutoBackupUnit,
      });
      setPresets(Array.isArray(storedPresets) ? storedPresets : []);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const update = (key, value) => {
    setSettings((current) => ({ ...current, [key]: value }));
    setSavedMessage('');
  };

  const apiTypeOptions = useMemo(() => API_TYPE_OPTIONS.map((option) => ({
    ...option,
    label: option.label || t(option.key),
  })), [t]);

  const reasoningOptions = useMemo(() => REASONING_OPTIONS.map((id) => ({
    id,
    label: t(`reasoning${id[0].toUpperCase()}${id.slice(1)}`),
  })), [t]);

  const retryOptions = useMemo(() => MAX_RETRY_OPTIONS.map((id) => ({
    id,
    label: t(`maxRetries${id}`),
  })), [t]);

  const saveSettings = async () => {
    await setSetting('apiSettings', settings);
    await setSetting('githubBackupSettings', {
      token: settings.githubToken,
      username: settings.githubOwner,
      repo: settings.githubRepo,
      filename: settings.githubPath,
      autoBackup: settings.githubAutoBackup,
      autoBackupMode: settings.githubAutoBackupMode,
      autoBackupInterval: settings.githubAutoBackupInterval,
      autoBackupUnit: settings.githubAutoBackupUnit,
    });
    window.dispatchEvent(new CustomEvent('nuojiji:api-settings-updated', { detail: settings }));
    window.dispatchEvent(new CustomEvent('nuojiji:gh-settings-updated'));
    setSavedMessage(t('btnSaveSettings'));
  };

  const fetchModels = async (url, key, setModel) => {
    if (!url || !key) {
      setSavedMessage(t('msgApiEnterInfo'));
      return;
    }
    try {
      const endpoint = url.replace(/\/$/, '').includes('/v1') ? `${url.replace(/\/$/, '')}/models` : `${url.replace(/\/$/, '')}/v1/models`;
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${key}`,
          'anthropic-version': '2023-06-01',
          'anthropic-beta': 'models-2025-02-19',
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const models = (payload.data || payload.models || []).map((item) => item.id || item.name).filter(Boolean);
      if (models.length) {
        setModel(models[0]);
        setSavedMessage(`${t('msgApiFetchSuccess')} (${models.length}) ${models.slice(0, 5).join(', ')}`);
      } else {
        setSavedMessage(t('msgApiNoModels'));
      }
    } catch (error) {
      setSavedMessage(`${t('msgApiFetchFailed')}: ${error.message}`);
    }
  };

  const testApi = async (url, key, model) => {
    if (!url || !key) {
      setSavedMessage(t('msgApiEnterInfo'));
      return;
    }
    try {
      const endpoint = url.replace(/\/$/, '').includes('/chat/completions')
        ? url.replace(/\/$/, '')
        : `${url.replace(/\/$/, '').replace(/\/v1$/, '')}/v1/chat/completions`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model || 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: 'Test' }],
          temperature: 0.7,
          stream: false,
          max_tokens: 5,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}: ${(await response.text()).slice(0, 120)}`);
      setSavedMessage(t('msgApiTestSuccess'));
    } catch (error) {
      setSavedMessage(`${t('msgApiTestFailed')}: ${error.message}`);
    }
  };

  const testRelay = async () => {
    if (!settings.relayUrl || !settings.relaySecret) {
      setSavedMessage(t('relayTestFail'));
      return;
    }
    try {
      const response = await fetch(settings.relayUrl.replace(/\/$/, ''), {
        method: 'HEAD',
        headers: { Authorization: `Bearer ${settings.relaySecret}` },
      });
      setSavedMessage(response.ok || response.status < 500 ? t('relayTestOk') : t('relayTestFail'));
    } catch (_error) {
      setSavedMessage(t('relayTestFail'));
    }
  };

  const githubConfigComplete = settings.githubToken && settings.githubOwner && settings.githubRepo;

  const savePreset = async (asNew = false) => {
    const name = presetName.trim();
    if (!name) {
      setSavedMessage(t('apiPresetEnterName'));
      return;
    }
    const preset = {
      id: asNew || !selectedPreset ? String(Date.now()) : selectedPreset,
      name,
      mainApi: {
        apiType: settings.apiType,
        apiUrl: settings.mainApiUrl,
        apiKey: settings.mainApiKey,
        model: settings.mainApiModel,
        temperature: settings.temperature,
      },
      secApi: {
        enabled: settings.secApiEnabled,
        apiUrl: settings.secApiUrl,
        apiKey: settings.secApiKey,
        model: settings.secApiModel,
        temperature: settings.secTemperature,
      },
    };
    const next = presets.filter((item) => item.id !== preset.id).concat(preset);
    setPresets(next);
    setSelectedPreset(preset.id);
    await setSetting('apiPresets', next);
    setSavedMessage(t(selectedPreset && !asNew ? 'apiPresetUpdated' : 'apiPresetAdded'));
  };

  const applyPreset = (id) => {
    setSelectedPreset(id);
    const preset = presets.find((item) => item.id === id);
    if (!preset) return;
    setPresetName(preset.name || '');
    setSettings((current) => ({
      ...current,
      apiType: preset.mainApi?.apiType || current.apiType,
      mainApiUrl: preset.mainApi?.apiUrl || '',
      mainApiKey: preset.mainApi?.apiKey || '',
      mainApiModel: preset.mainApi?.model || current.mainApiModel,
      temperature: preset.mainApi?.temperature ?? current.temperature,
      ...(current.secApiFollowPreset ? {
        secApiEnabled: preset.secApi?.enabled ?? current.secApiEnabled,
        secApiUrl: preset.secApi?.apiUrl || '',
        secApiKey: preset.secApi?.apiKey || '',
        secApiModel: preset.secApi?.model || current.secApiModel,
        secTemperature: preset.secApi?.temperature ?? current.secTemperature,
      } : {}),
    }));
  };

  const deletePreset = async () => {
    if (!selectedPreset) return;
    const next = presets.filter((item) => item.id !== selectedPreset);
    setPresets(next);
    setSelectedPreset('');
    setPresetName('');
    await setSetting('apiPresets', next);
  };

  useEffect(() => {
    const handler = () => {
      saveSettings();
    };
    window.addEventListener('nuojiji:request-current-screen-save', handler);
    return () => window.removeEventListener('nuojiji:request-current-screen-save', handler);
  });

  return (
    <div className="api-settings-screen settings-scroll-container">
      <h1 className="large-title">{t('apiSettingsTitle')}</h1>

      <Section title={t('apiPresetsTitle')}>
        <Field icon="📚" iconBg="bg-blue" label={t('apiPresetSelect')}>
          <SelectInput
            value={selectedPreset}
            onChange={applyPreset}
            options={[{ id: '', label: t('apiPresetNone') }, ...presets.map((preset) => ({ id: preset.id, label: preset.name }))]}
          />
        </Field>
        <Field icon="✏️" iconBg="bg-pink" label={t('apiPresetName')}>
          <TextInput value={presetName} onChange={setPresetName} placeholder={t('apiPresetPlaceholder')} />
        </Field>
        <div className="ios-button-pair">
          <button type="button" onClick={() => savePreset(false)}>{t(selectedPreset ? 'apiPresetUpdate' : 'apiPresetSaveNew')}</button>
          {selectedPreset ? <button type="button" onClick={() => savePreset(true)}>{t('apiPresetSaveAsNew')}</button> : null}
        </div>
        {selectedPreset ? <ActionRow danger icon="🗑️" label={t('apiPresetDelete')} onClick={deletePreset} /> : null}
      </Section>

      <Section title={t('sectionMainApi')}>
        <Field icon="🧠" iconBg="bg-cyan" label={t('labelApiType')}>
          <SelectInput value={settings.apiType} onChange={(value) => update('apiType', value)} options={apiTypeOptions} />
        </Field>
        <Field icon="🔗" iconBg="bg-blue" label={t('labelApiUrl')}>
          <TextInput value={settings.mainApiUrl} onChange={(value) => update('mainApiUrl', value)} placeholder="https://api.openai.com" />
        </Field>
        <Field icon="🔑" iconBg="bg-green" label={t('labelApiKey')}>
          <TextInput type="password" value={settings.mainApiKey} onChange={(value) => update('mainApiKey', value)} placeholder="sk-..." />
        </Field>
        <Field icon="🤖" iconBg="bg-purple" label={t('labelModel')}>
          <TextInput value={settings.mainApiModel} onChange={(value) => update('mainApiModel', value)} placeholder={t('labelModelPlaceholder')} />
        </Field>
        <div className="ios-button-pair">
          <button type="button" onClick={() => fetchModels(settings.mainApiUrl, settings.mainApiKey, (model) => update('mainApiModel', model))}>{t('btnFetchModels')}</button>
          <button type="button" onClick={() => testApi(settings.mainApiUrl, settings.mainApiKey, settings.mainApiModel)}>{t('btnTestLink')}</button>
        </div>
        <ActionRow icon="♻️" label={t('btnResetStreamingBlacklist')} onClick={() => setSavedMessage(t('msgStreamingBlacklistCleared'))} />
        <Field icon="🌡️" iconBg="bg-orange" label={t('labelTemperature')}>
          <RangeInput value={settings.temperature} onChange={(value) => update('temperature', value)} />
        </Field>
        <Field icon="💭" iconBg="bg-purple" label={t('labelReasoningEffort')}>
          <SelectInput value={settings.reasoningEffort} onChange={(value) => update('reasoningEffort', value)} options={reasoningOptions} />
        </Field>
      </Section>

      <Section title={t('sectionSecApi')}>
        <Field icon="🔀" iconBg="bg-teal" label={t('labelEnableSecApi')}>
          <SwitchInput checked={settings.secApiEnabled} onChange={(value) => update('secApiEnabled', value)} />
        </Field>
        {settings.secApiEnabled ? (
          <>
            <Field icon="📌" iconBg="bg-gray" label={t('labelSecApiFollowPreset')} hint={t('hintSecApiFollowPreset')}>
              <SwitchInput checked={settings.secApiFollowPreset} onChange={(value) => update('secApiFollowPreset', value)} />
            </Field>
            <Field icon="🔗" iconBg="bg-blue" label={t('labelSecApiUrl')}>
              <TextInput value={settings.secApiUrl} onChange={(value) => update('secApiUrl', value)} placeholder="https://api.openai.com" />
            </Field>
            <Field icon="🔑" iconBg="bg-green" label={t('labelSecApiKey')}>
              <TextInput type="password" value={settings.secApiKey} onChange={(value) => update('secApiKey', value)} placeholder="sk-..." />
            </Field>
            <Field icon="🤖" iconBg="bg-purple" label={t('labelSecModel')}>
              <TextInput value={settings.secApiModel} onChange={(value) => update('secApiModel', value)} placeholder={t('labelModelPlaceholder')} />
            </Field>
            <div className="ios-button-pair">
              <button type="button" onClick={() => fetchModels(settings.secApiUrl, settings.secApiKey, (model) => update('secApiModel', model))}>{t('btnFetchModels')}</button>
              <button type="button" onClick={() => testApi(settings.secApiUrl, settings.secApiKey, settings.secApiModel)}>{t('btnTestLink')}</button>
            </div>
            <Field icon="🌡️" iconBg="bg-orange" label={t('labelSecTemperature')}>
              <RangeInput value={settings.secTemperature} onChange={(value) => update('secTemperature', value)} />
            </Field>
          </>
        ) : null}
      </Section>

      <Section title={t('sectionVisionApi')}>
        <Field icon="👁️" iconBg="bg-purple" label={t('labelEnableVisionApi')} hint={t('hintVisionApi')}>
          <SwitchInput checked={settings.visionApiEnabled} onChange={(value) => update('visionApiEnabled', value)} />
        </Field>
        {settings.visionApiEnabled ? (
          <>
            <Field icon="🔗" iconBg="bg-blue" label={t('labelVisionApiUrl')}>
              <TextInput value={settings.visionApiUrl} onChange={(value) => update('visionApiUrl', value)} placeholder="https://api.openai.com" />
            </Field>
            <Field icon="🔑" iconBg="bg-green" label={t('labelVisionApiKey')}>
              <TextInput type="password" value={settings.visionApiKey} onChange={(value) => update('visionApiKey', value)} placeholder="sk-..." />
            </Field>
            <Field icon="🤖" iconBg="bg-purple" label={t('labelVisionApiModel')}>
              <TextInput value={settings.visionApiModel} onChange={(value) => update('visionApiModel', value)} placeholder={t('labelModelPlaceholder')} />
            </Field>
          </>
        ) : null}
      </Section>

      <Section title={t('sectionAutoRetry')}>
        <p className="section-hint">{t('autoRetryHint')}</p>
        <Field icon="🔁" iconBg="bg-blue" label={t('labelAutoRetryEnabled')}>
          <SwitchInput checked={settings.autoRetryEnabled} onChange={(value) => update('autoRetryEnabled', value)} />
        </Field>
        {settings.autoRetryEnabled ? (
          <Field icon="#" iconBg="bg-orange" label={t('labelMaxRetries')}>
            <SelectInput value={String(settings.maxRetries)} onChange={(value) => update('maxRetries', Number(value))} options={retryOptions} />
          </Field>
        ) : null}
        <Field icon="🔀" iconBg="bg-teal" label={t('labelSecondaryFallbackEnabled')}>
          <SwitchInput checked={settings.secondaryFallbackEnabled} onChange={(value) => update('secondaryFallbackEnabled', value)} />
        </Field>
      </Section>

      <Section title={t('sectionVoiceGen')}>
        <Field icon="🔊" iconBg="bg-pink" label={t('labelEnableVoiceGen', '启用语音生成')}>
          <SwitchInput checked={settings.voiceGenEnabled} onChange={(value) => update('voiceGenEnabled', value)} />
        </Field>
        {settings.voiceGenEnabled ? (
          <>
            <Field icon="M" iconBg="bg-indigo" label={t('labelEnableMinimax')}>
              <SwitchInput checked={settings.minimaxEnabled} onChange={(value) => update('minimaxEnabled', value)} />
            </Field>
            {settings.minimaxEnabled ? (
              <>
                <Field icon="ID" iconBg="bg-indigo" label={t('labelGroupId')}>
                  <TextInput value={settings.minimaxGroupId} onChange={(value) => update('minimaxGroupId', value)} placeholder={t('labelGroupId')} />
                </Field>
                <Field icon="🔑" iconBg="bg-green" label={t('labelApiKey')}>
                  <TextInput type="password" value={settings.minimaxApiKey} onChange={(value) => update('minimaxApiKey', value)} placeholder={t('placeholderEnterApiKey')} />
                </Field>
                <Field icon="🌏" iconBg="bg-blue" label={t('labelRegion')}>
                  <SelectInput value={settings.minimaxRegion} onChange={(value) => update('minimaxRegion', value)} options={[{ id: 'overseas', label: t('labelRegionOverseas') }, { id: 'china', label: t('labelRegionChina') }]} />
                </Field>
              </>
            ) : null}
            <Field icon="E" iconBg="bg-orange" label={t('labelEnableElevenlabs', '启用 ElevenLabs')}>
              <SwitchInput checked={settings.elevenlabsEnabled} onChange={(value) => update('elevenlabsEnabled', value)} />
            </Field>
            <Field icon="S" iconBg="bg-blue" label={t('labelEnableSovits', '启用 GPT-SoVITS')}>
              <SwitchInput checked={settings.sovitsEnabled} onChange={(value) => update('sovitsEnabled', value)} />
            </Field>
          </>
        ) : null}
      </Section>

      <Section title={t('sectionImageGen')}>
        <Field icon="📖" iconBg="bg-purple" label="读取生图世界书">
          <SwitchInput checked={settings.imageGenUseWorldBook} onChange={(value) => update('imageGenUseWorldBook', value)} />
        </Field>
        <Field icon="N" iconBg="bg-purple" label={t('labelEnableNovelAi')}>
          <SwitchInput checked={settings.novelAiEnabled} onChange={(value) => update('novelAiEnabled', value)} />
        </Field>
        {settings.novelAiEnabled ? <Field icon="🔑" iconBg="bg-green" label={t('labelApiKey')}><TextInput type="password" value={settings.novelAiKey} onChange={(value) => update('novelAiKey', value)} /></Field> : null}
        <Field icon="P" iconBg="bg-teal" label={t('labelEnablePollinations')}>
          <SwitchInput checked={settings.pollinationsEnabled} onChange={(value) => update('pollinationsEnabled', value)} />
        </Field>
        <Field icon="G" iconBg="bg-blue" label={t('labelEnableGoogleImagen')}>
          <SwitchInput checked={settings.googleImagenEnabled} onChange={(value) => update('googleImagenEnabled', value)} />
        </Field>
        <Field icon="◇" iconBg="bg-cyan" label={t('labelEnableGeminiImage')}>
          <SwitchInput checked={settings.geminiImageEnabled} onChange={(value) => update('geminiImageEnabled', value)} />
        </Field>
        <Field icon="𝕏" iconBg="bg-gray" label={t('labelEnableGrok')}>
          <SwitchInput checked={settings.grokEnabled} onChange={(value) => update('grokEnabled', value)} />
        </Field>
        <Field icon="GPT" iconBg="bg-green" label={t('labelEnableGptImage')}>
          <SwitchInput checked={settings.gptImageEnabled} onChange={(value) => update('gptImageEnabled', value)} />
        </Field>
      </Section>

      <Section title="系统">
        <Field icon="🔋" iconBg="bg-orange" label={t('labelBackgroundMode')}>
          <SwitchInput checked={settings.backgroundModeEnabled} onChange={(value) => update('backgroundModeEnabled', value)} />
        </Field>
        <p className="section-hint multiline-hint">{t('msgBackgroundModeHint')}</p>
      </Section>

      <Section title="内存监控（Debug）">
        <Field icon="📈" iconBg="bg-gray" label="显示内存监控">
          <SwitchInput checked={settings.memoryMonitorEnabled} onChange={(value) => update('memoryMonitorEnabled', value)} />
        </Field>
        <p className="section-hint">排查 iOS Safari 闪退用：右上角浮动小窗显示 JS heap、DOM 节点数、消息数、IndexedDB 配额。可拖动。排查完请关掉。</p>
        <Field icon="📐" iconBg="bg-gray" label="显示布局诊断浮层">
          <SwitchInput checked={settings.layoutDiagEnabled} onChange={(value) => update('layoutDiagEnabled', value)} />
        </Field>
        <p className="section-hint">排查缩放白边用：底部浮层显示视口高、缩放倍数、root 渲染高度、白边像素等运行时数字。截图回报。</p>
        <ActionRow icon="📊" label="分析存储占用" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="👤" label="找回丢失的用户资料" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="🧹" label="清理朋友圈繁殖图片" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <Section title="最近崩溃记录">
        <ActionRow icon="🧾" label="查看最近崩溃" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <Section title="悬浮控制台">
        <Field icon="✦" iconBg="bg-blue" label="启用悬浮快捷控制台">
          <SwitchInput checked={settings.floatingConsoleEnabled} onChange={(value) => update('floatingConsoleEnabled', value)} />
        </Field>
        <Field icon="🪐" iconBg="bg-purple" label="控制台快捷選單佈局">
          <SelectInput
            value={settings.floatingConsoleLayout}
            onChange={(value) => update('floatingConsoleLayout', value)}
            options={[
              { id: 'orbit', label: '🪐 星系軌道環繞 (Orbit)' },
              { id: 'fan', label: '扇形展开 (Fan)' },
              { id: 'grid', label: '网格 (Grid)' },
              { id: 'drawer', label: '抽屉 (Drawer)' },
            ]}
          />
        </Field>
        <ActionRow icon="↺" label="重置悬浮球位置" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <p className="section-hint">全站显示、可拖拽吸附侧边。快捷栏最多 6 个按钮（固定含主画面 + 最多 5 个自定 App）。</p>
      </Section>

      <Section title={t('sectionRoleActivity')}>
        <Field icon="⏱️" iconBg="bg-pink" label={t('labelEnableRoleActivity')}>
          <SwitchInput checked={settings.roleActivityEnabled} onChange={(value) => update('roleActivityEnabled', value)} />
        </Field>
      </Section>

      <Section title={t('sectionNotifications')}>
        <Field icon="🔔" iconBg="bg-blue" label={t('labelBrowserNotifications')}>
          <SwitchInput checked={settings.browserNotifications} onChange={(value) => update('browserNotifications', value)} />
        </Field>
        <ActionRow icon="🔔" label={t('labelTestNotification')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <p className="section-hint">{t('msgBrowserNotificationsHint')}</p>
        <Field icon="🕶️" iconBg="bg-gray" label={t('labelNotifPrivacy')}>
          <SwitchInput checked={settings.notificationPrivacy} onChange={(value) => update('notificationPrivacy', value)} />
        </Field>
        <p className="section-hint">{t('msgNotifPrivacyHint')}</p>
      </Section>

      <Section title={t('sectionCloudPush')}>
        <Field icon="☁️" iconBg="bg-purple" label={t('labelEnableCloudPush')}>
          <SwitchInput checked={settings.cloudPushEnabled} onChange={(value) => update('cloudPushEnabled', value)} />
        </Field>
        <p className="section-hint multiline-hint">{t('msgCloudPushHint')}</p>
        <ActionRow icon="ⓘ" label={t('titleCloudPushPrivacy')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <Section title={t('relaySectionTitle')}>
        <Field icon="☁️" iconBg="bg-teal" label={t('relayEnableToggle')}>
          <SwitchInput checked={settings.relayEnabled} onChange={(value) => update('relayEnabled', value)} />
        </Field>
        <Field icon="🔗" iconBg="bg-blue" label={t('relayUrlLabel')}>
          <TextInput value={settings.relayUrl} onChange={(value) => update('relayUrl', value)} placeholder={t('relayUrlLabel')} />
        </Field>
        <Field icon="🔐" iconBg="bg-green" label={t('relaySecretLabel')}>
          <TextInput type="password" value={settings.relaySecret} onChange={(value) => update('relaySecret', value)} placeholder={t('relaySecretLabel')} />
        </Field>
        <ActionRow icon="✓" label={t('relayTestButton')} onClick={testRelay} />
        <p className="section-hint multiline-hint">{t('relayHelpText')}</p>
      </Section>

      <Section title="GitHub 云备份">
        <Field icon="🔑" iconBg="bg-gray" label="Token">
          <TextInput type="password" value={settings.githubToken} onChange={(value) => update('githubToken', value)} placeholder="Token" />
        </Field>
        <Field icon="👤" iconBg="bg-blue" label="用户名">
          <TextInput value={settings.githubOwner} onChange={(value) => update('githubOwner', value)} placeholder="用户名" />
        </Field>
        <Field icon="📦" iconBg="bg-purple" label="仓库名">
          <TextInput value={settings.githubRepo} onChange={(value) => update('githubRepo', value)} placeholder="仓库名" />
        </Field>
        <Field icon="📄" iconBg="bg-teal" label="文件名">
          <TextInput value={settings.githubPath} onChange={(value) => update('githubPath', value)} placeholder="nuojiji_backup.json" />
        </Field>
        <Field icon="⏰" iconBg="bg-green" label="自动备份">
          <SwitchInput checked={settings.githubAutoBackup} onChange={(value) => update('githubAutoBackup', value)} />
        </Field>
        {settings.githubAutoBackup ? (
          <>
            <Field icon="⚙️" iconBg="bg-purple" label="备份模式">
              <SelectInput
                value={settings.githubAutoBackupMode}
                onChange={(value) => update('githubAutoBackupMode', value)}
                options={[{ id: 'streaming', label: '流式（推荐）' }, { id: 'full', label: '全量' }]}
              />
            </Field>
            <Field icon="⏱️" iconBg="bg-orange" label="自动备份间隔">
              <span className="inline-combo">
                <TextInput value={settings.githubAutoBackupInterval} onChange={(value) => update('githubAutoBackupInterval', Number(value) || 1)} />
                <SelectInput
                  value={settings.githubAutoBackupUnit}
                  onChange={(value) => update('githubAutoBackupUnit', value)}
                  options={[{ id: 'minutes', label: '分钟' }, { id: 'hours', label: '小时' }, { id: 'days', label: '天' }]}
                />
              </span>
            </Field>
          </>
        ) : null}
        <div className="ios-button-pair wrap-buttons">
          <button type="button" disabled={!githubConfigComplete} onClick={() => setSavedMessage(t('msgDevInProgress'))}>上传 (全量)</button>
          <button type="button" disabled={!githubConfigComplete} onClick={() => setSavedMessage(t('msgDevInProgress'))}>恢复 (全量)</button>
          <button type="button" disabled={!githubConfigComplete} onClick={() => setSavedMessage(t('msgDevInProgress'))}>Git流式上传</button>
          <button type="button" disabled={!githubConfigComplete} onClick={() => setSavedMessage(t('msgDevInProgress'))}>Git流式导入</button>
        </div>
        <p className="section-hint">* 全量模式将所有数据合并为单一文件上传。流式模式将数据按表拆分为多个文件分别上传。</p>
      </Section>

      <Section title={t('sectionDataManage')}>
        <ActionRow icon="⬇️" label={t('labelImportBackup')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="⬇️" label={t('labelPartialImport')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="⬆️" label={t('labelExportBackup')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="⬆️" label={t('labelPartialExport')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow danger icon="🧹" label={t('labelClearData')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="🧹" label="🧹 清理缓存与冗余数据" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="📦" label="📦 清理媒体数据" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <Section title={t('sectionStorage')}>
        <ActionRow icon="💾" label={t('labelPersisted')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <p className="section-hint multiline-hint">{t('msgClickToPersistHint')}</p>
        <div className="storage-meter">
          <div><strong>{t('labelUsedSpace')} (0.00%)</strong><span>0.10 MB / 10240.10 MB</span></div>
          <div className="storage-bar"><span style={{ width: '0.1%' }} /></div>
          <p>{t('msgStorageWarning')}</p>
        </div>
        <ActionRow icon="📊" label="分析存儲數據分佈" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <Section title={t('sectionAppUpdate')}>
        <ActionRow icon="⬆️" label={t('labelManualUpdate')} onClick={() => setSavedMessage(t('msgNoUpdateFound'))} />
      </Section>

      <Section title="内容举报 / 反馈">
        <ActionRow icon="⚠️" label="举报不当内容" onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <p className="section-hint">所有对话与内容均由你自建的 AI 角色在本地生成并存储，不会上传。若你认为某段 AI 生成内容不当，可在此向开发者反馈。</p>
      </Section>

      <Section title={t('sectionLegal')}>
        <ActionRow icon="🔒" label={t('labelPrivacyPolicy')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
        <ActionRow icon="📜" label={t('labelTermsOfService')} onClick={() => setSavedMessage(t('msgDevInProgress'))} />
      </Section>

      <div className="settings-version">v6.8.7 (2026.06.13)</div>

      {savedMessage ? <div className="settings-toast">{savedMessage}</div> : null}
    </div>
  );
}
