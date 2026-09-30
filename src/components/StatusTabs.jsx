export default function StatusTabs({ status, counts, onChange }) {
  const total = counts.b + counts.n + counts.a;
  const tabs = [
    { key: 'all', label: 'Tutti', n: total, cls: '' },
    { key: 'b', label: 'Benefici', n: counts.b, cls: 't-good' },
    { key: 'n', label: 'Neutri', n: counts.n, cls: 't-neutral' },
    { key: 'a', label: 'Vietati', n: counts.a, cls: 't-avoid' },
  ];

  return (
    <div className="tabs" role="group" aria-label="Filtra per stato">
      {tabs.map((t) => (
        <button
          key={t.key}
          type="button"
          className={`tab ${t.cls}`}
          aria-pressed={status === t.key}
          onClick={() => onChange(status === t.key ? 'all' : t.key)}
        >
          <span className="n">{t.n}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}
