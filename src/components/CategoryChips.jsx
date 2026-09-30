import { FOODS } from '../data/foods.js';

export default function CategoryChips({ category, onChange }) {
  const chips = [{ key: 'all', label: 'Tutte' }, ...FOODS.map((d) => ({ key: d.cat, label: d.cat }))];

  return (
    <div className="chips" role="group" aria-label="Categorie">
      {chips.map((c) => (
        <button
          key={c.key}
          type="button"
          className="chip"
          aria-pressed={category === c.key}
          onClick={() => onChange(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
