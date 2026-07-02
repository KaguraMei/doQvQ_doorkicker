export default function PlaceholderScreen({ app }) {
  return (
    <div className="placeholder-screen">
      <div className="placeholder-card">
        <div className="placeholder-icon" aria-hidden="true">{app?.icon || '▣'}</div>
        <h2>{app?.fallbackLabel || '待重建页面'}</h2>
        <p>
          这个页面已经在 reconstructed app registry 中登记，下一步会从
          <code>{app?.sourceChunk || 'unknown chunk'}</code>
          按真实 bundle 代码逐块重建。
        </p>
        <dl>
          <dt>screen id</dt>
          <dd>{app?.screenId}</dd>
          <dt>i18n key</dt>
          <dd>{app?.labelKey}</dd>
        </dl>
      </div>
    </div>
  );
}
