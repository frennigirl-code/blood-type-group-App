import { useEffect, useMemo, useState } from 'react';
import { FOODS } from './data/foods.js';
import GroupPicker from './components/GroupPicker.jsx';
import StatusTabs from './components/StatusTabs.jsx';
import CategoryChips from './components/CategoryChips.jsx';
import FoodList from './components/FoodList.jsx';

const STORAGE_KEY = 'dgs-group';

function normalize(s) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function loadGroup() {
  try {
    const n = parseInt(localStorage.getItem(STORAGE_KEY), 10);
    if (n >= 0 && n < 4) return n;
  } catch (e) {
    /* localStorage non disponibile */
  }
  return 0;
}

export default function App() {
  const [group, setGroup] = useState(loadGroup);
  const [status, setStatus] = useState('all');
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(group));
    } catch (e) {
      /* ignora */
    }
  }, [group]);

  // Alimenti che passano ricerca e categoria, prima del filtro per stato
  const base = useMemo(() => {
    const q = normalize(query.trim());
    return FOODS.filter((d) => category === 'all' || d.cat === category)
      .map((d) => ({
        cat: d.cat,
        items: d.items.filter(([name]) => !q || normalize(name).includes(q)),
      }))
      .filter((d) => d.items.length > 0);
  }, [query, category]);

  const counts = useMemo(() => {
    const c = { b: 0, n: 0, a: 0 };
    base.forEach((d) => d.items.forEach(([, codes]) => { c[codes[group]] += 1; }));
    return c;
  }, [base, group]);

  return (
    <div className="wrap">
      <h1>Alimenti per gruppo sanguigno</h1>
      <p className="lead">
        Scegli il gruppo e consulta gli alimenti benefici, neutri e da evitare secondo la dieta del
        gruppo sanguigno. Tocca un alimento per confrontarlo con gli altri gruppi.
      </p>

      <p className="label">Gruppo sanguigno</p>
      <GroupPicker group={group} onChange={setGroup} />

      <StatusTabs status={status} counts={counts} onChange={setStatus} />

      <label className="label" htmlFor="q">Cerca un alimento</label>
      <input
        className="search"
        id="q"
        type="search"
        placeholder="Es. salmone, riso, banane"
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <CategoryChips category={category} onChange={setCategory} />

      <FoodList base={base} group={group} status={status} />

      <div className="note">
        <strong>Da sapere.</strong> Le liste seguono la versione divulgativa della dieta di Peter
        D'Adamo e alcune voci possono variare tra le edizioni. Le evidenze scientifiche non
        confermano che il gruppo sanguigno determini quali alimenti fanno bene: le revisioni
        sistematiche non hanno trovato benefici legati al gruppo. Usa l'app come riferimento e, per
        problemi di salute o piani alimentari specifici, parla con un medico o un dietista.
      </div>
    </div>
  );
}
