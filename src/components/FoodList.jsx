import { useState } from 'react';
import { GROUPS, STATUS } from '../data/foods.js';

const ICON = {
  b: <path d="M2 6.5l2.6 2.6L10 3.4" />,
  n: <path d="M2.5 6h7" />,
  a: <path d="M3 3l6 6M9 3l-6 6" />,
};

function Icon({ code }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {ICON[code]}
    </svg>
  );
}

export default function FoodList({ base, group, status }) {
  const [open, setOpen] = useState({});

  const sections = base
    .map((d) => {
      const items = d.items
        .filter(([, codes]) => status === 'all' || codes[group] === status)
        .slice()
        .sort(
          (x, y) =>
            STATUS[x[1][group]].order - STATUS[y[1][group]].order || x[0].localeCompare(y[0], 'it')
        );
      return { cat: d.cat, items };
    })
    .filter((d) => d.items.length > 0);

  if (sections.length === 0) {
    return (
      <p className="empty">Nessun alimento trovato. Prova con un altro nome o un altro filtro.</p>
    );
  }

  return (
    <div aria-live="polite">
      {sections.map((d) => (
        <section className="cat" key={d.cat}>
          <h2>
            {d.cat}
            <span>{d.items.length}</span>
          </h2>
          <ul className="list">
            {d.items.map(([name, codes]) => {
              const code = codes[group];
              const isOpen = !!open[name];
              return (
                <li className="row" key={name}>
                  <button
                    type="button"
                    className="rowbtn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen((o) => ({ ...o, [name]: !o[name] }))}
                  >
                    <span className="nm">{name}</span>
                    <span className={`pill ${STATUS[code].cls}`}>
                      <Icon code={code} />
                      {STATUS[code].label}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="more">
                      <p>Come si classifica per ciascun gruppo</p>
                      <div className="cells">
                        {GROUPS.map((g, i) => (
                          <div
                            key={g.key}
                            className={`cell ${STATUS[codes[i]].cls}${i === group ? ' me' : ''}`}
                          >
                            <b>{g.key}</b>
                            <Icon code={codes[i]} />
                            <span>{STATUS[codes[i]].label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
