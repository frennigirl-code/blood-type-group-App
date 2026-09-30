import { GROUPS } from '../data/foods.js';

export default function GroupPicker({ group, onChange }) {
  return (
    <div className="groups" role="group" aria-label="Gruppo sanguigno">
      {GROUPS.map((g, i) => (
        <button
          key={g.key}
          type="button"
          className="gbtn"
          aria-pressed={group === i}
          onClick={() => onChange(i)}
        >
          <span className="big">{g.key}</span>
          <span className="tag">{g.tag}</span>
        </button>
      ))}
    </div>
  );
}
